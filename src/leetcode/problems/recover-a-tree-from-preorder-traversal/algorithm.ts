import type { Step } from "@/core/types";

export interface RecoverTreeData {
  s: string;
  /** heap array built so far */
  heap: (number | null)[];
  /** heap index just placed */
  active: number | null;
  /** the parsed [depth, value] just handled */
  token: { depth: number; value: number } | null;
  done: boolean;
}

export type RecoverTreeStep = Step<RecoverTreeData>;

/**
 * Recover a Tree From Preorder Traversal: each token is a run of dashes giving the depth followed by the
 * node value. A per-depth stack tracks the current ancestor at each level; a node attaches to the last node
 * one level up, as its left child if free else right. Nodes are placed into a heap array (children at
 * 2i+1 / 2i+2) for rendering. `line` indexes CODE.
 */
export function recoverTreeSteps(s: string): RecoverTreeStep[] {
  const steps: RecoverTreeStep[] = [];
  const heap: (number | null)[] = [];
  const stackIdx: number[] = []; // heap index of the current node at each depth
  const childCount = new Map<number, number>();

  const setHeap = (i: number, v: number) => {
    while (heap.length <= i) heap.push(null);
    heap[i] = v;
  };

  const snap = (o: Partial<RecoverTreeData>): RecoverTreeData => ({
    s,
    heap: [...heap],
    active: null,
    token: null,
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<RecoverTreeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Parse "${s}": dashes give depth, digits give the node value.`);

  let i = 0;
  while (i < s.length) {
    let depth = 0;
    while (s[i] === "-") {
      depth++;
      i++;
    }
    let val = 0;
    while (i < s.length && s[i] !== "-") val = val * 10 + +s[i++];

    let heapIdx: number;
    if (depth === 0) {
      heapIdx = 0;
    } else {
      const parent = stackIdx[depth - 1];
      const c = childCount.get(parent) ?? 0;
      heapIdx = c === 0 ? 2 * parent + 1 : 2 * parent + 2;
      childCount.set(parent, c + 1);
    }
    setHeap(heapIdx, val);
    stackIdx.length = depth;
    stackIdx[depth] = heapIdx;
    push(15, `Node ${val} at depth ${depth} → heap index ${heapIdx}.`, { active: heapIdx, token: { depth, value: val } });
  }

  push(17, `Tree fully recovered.`, { done: true });
  return steps;
}
