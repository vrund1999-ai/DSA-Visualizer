import type { Step } from "@/core/types";

export interface PostorderData {
  heap: (number | null)[];
  cur: number | null;
  visited: number[];
  out: number[];
  answer: number[] | null;
}

export type PostorderStep = Step<PostorderData>;

/**
 * Postorder emits a node only after both its subtrees: recurse left, recurse right, then output. On
 * a heap-array tree the children of index i live at 2i+1 and 2i+2, so the recursion follows those
 * indices and appends the node on the way back up. `line` indexes CODE.
 */
export function postorderSteps(heap: (number | null)[]): PostorderStep[] {
  const steps: PostorderStep[] = [];
  const out: number[] = [];
  const visited: number[] = [];

  const snap = (o: Partial<PostorderData>): PostorderData => ({ heap, cur: null, visited: [...visited], out: [...out], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PostorderData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const valid = (i: number) => i < heap.length && heap[i] !== null;

  push(1, "Postorder: left subtree, then right subtree, then the node itself.");

  const visit = (i: number) => {
    if (!valid(i)) return;
    visit(2 * i + 1);
    visit(2 * i + 2);
    out.push(heap[i]!);
    visited.push(i);
    push(6, `Both subtrees of ${heap[i]} done → output ${heap[i]}.`, { cur: i });
  };

  visit(0);
  push(9, `Postorder sequence: [${out.join(", ")}].`, { answer: [...out] });
  return steps;
}
