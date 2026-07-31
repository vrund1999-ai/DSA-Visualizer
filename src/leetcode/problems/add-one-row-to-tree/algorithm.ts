import type { Step } from "@/core/types";

interface Node {
  val: number;
  left: Node | null;
  right: Node | null;
}

export interface AddRowData {
  heap: (number | null)[];
  /** heap indices of the newly inserted row */
  inserted: number[];
  depth: number;
  val: number;
  phase: "before" | "after";
}

export type AddRowStep = Step<AddRowData>;

const fromHeap = (heap: (number | null)[], i = 0): Node | null => {
  if (i >= heap.length || heap[i] === null) return null;
  return { val: heap[i] as number, left: fromHeap(heap, 2 * i + 1), right: fromHeap(heap, 2 * i + 2) };
};

/** serialize a node tree back to a heap array, recording which nodes are "new" (marked). */
const toHeap = (root: Node | null, isNew: (n: Node) => boolean): { heap: (number | null)[]; inserted: number[] } => {
  const heap: (number | null)[] = [];
  const inserted: number[] = [];
  const place = (node: Node | null, i: number) => {
    if (!node) return;
    while (heap.length <= i) heap.push(null);
    heap[i] = node.val;
    if (isNew(node)) inserted.push(i);
    place(node.left, 2 * i + 1);
    place(node.right, 2 * i + 2);
  };
  place(root, 0);
  return { heap, inserted };
};

/**
 * Add One Row to Tree: at depth 1 a new node becomes the root (old tree its left child). Otherwise, for
 * every node at depth−1, splice in two new nodes, moving its existing left/right subtrees down one level.
 * `line` indexes CODE.
 */
export function addRowSteps(inputHeap: (number | null)[], val: number, depth: number): AddRowStep[] {
  const steps: AddRowStep[] = [];
  const root = fromHeap(inputHeap);
  const newNodes = new Set<Node>();

  const before = toHeap(root, () => false);
  const push = (line: number, explanation: string, o: Partial<AddRowData>) => {
    steps.push({ id: steps.length, line, explanation, data: { heap: before.heap, inserted: [], depth, val, phase: "before", ...o }, highlights: [] });
  };
  push(0, `Insert a row of ${val} at depth ${depth}.`, { heap: before.heap });

  let newRoot = root;
  if (depth === 1) {
    const nr: Node = { val, left: root, right: null };
    newNodes.add(nr);
    newRoot = nr;
  } else {
    const dfs = (node: Node | null, d: number) => {
      if (!node) return;
      if (d === depth - 1) {
        const nl: Node = { val, left: node.left, right: null };
        const nrr: Node = { val, left: null, right: node.right };
        newNodes.add(nl);
        newNodes.add(nrr);
        node.left = nl;
        node.right = nrr;
        return;
      }
      dfs(node.left, d + 1);
      dfs(node.right, d + 1);
    };
    dfs(root, 1);
  }

  const after = toHeap(newRoot, (n) => newNodes.has(n));
  steps.push({
    id: steps.length,
    line: 14,
    explanation: `Inserted ${after.inserted.length} new node(s) of value ${val} at depth ${depth}.`,
    data: { heap: after.heap, inserted: after.inserted, depth, val, phase: "after" },
    highlights: [],
  });
  return steps;
}
