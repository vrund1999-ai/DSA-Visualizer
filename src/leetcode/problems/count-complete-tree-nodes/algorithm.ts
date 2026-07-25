import type { Step } from "@/core/types";

export interface CountNodesData {
  heap: (number | null)[];
  /** subtree root index under consideration */
  root: number | null;
  leftHeight: number | null;
  rightHeight: number | null;
  perfect: boolean | null;
  total: number;
  answer: number | null;
}

export type CountNodesStep = Step<CountNodesData>;

/**
 * A complete tree's perfect subtrees can be counted without visiting them: if the leftmost and
 * rightmost path lengths agree, the subtree is perfect with 2^h − 1 nodes. Otherwise we recurse into
 * both children, so only O(log²n) nodes are ever examined. `line` indexes CODE.
 */
export function countNodesSteps(heap: (number | null)[]): CountNodesStep[] {
  const steps: CountNodesStep[] = [];
  const valid = (i: number) => i < heap.length && heap[i] !== null;
  let total = 0;

  const snap = (o: Partial<CountNodesData>): CountNodesData => ({ heap, root: null, leftHeight: null, rightHeight: null, perfect: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CountNodesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const leftH = (i: number) => { let h = 0; while (valid(i)) { h++; i = 2 * i + 1; } return h; };
  const rightH = (i: number) => { let h = 0; while (valid(i)) { h++; i = 2 * i + 2; } return h; };

  push(0, "Count nodes using perfect-subtree shortcuts (compare left & right heights).");

  const count = (i: number): number => {
    if (!valid(i)) return 0;
    const lh = leftH(i);
    const rh = rightH(i);
    if (lh === rh) {
      const n = (1 << lh) - 1;
      total += n;
      push(5, `Subtree at ${heap[i]}: left height ${lh} = right height ${rh} → perfect, ${n} nodes.`, { root: i, leftHeight: lh, rightHeight: rh, perfect: true });
      return n;
    }
    push(6, `Subtree at ${heap[i]}: heights ${lh} ≠ ${rh} → recurse into children.`, { root: i, leftHeight: lh, rightHeight: rh, perfect: false });
    total += 1;
    return 1 + count(2 * i + 1) + count(2 * i + 2);
  };

  const answer = count(0);
  total = answer;
  push(0, `Total nodes: ${answer}.`, { answer });
  return steps;
}
