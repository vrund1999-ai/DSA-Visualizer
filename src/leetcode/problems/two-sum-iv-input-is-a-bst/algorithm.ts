import type { Step } from "@/core/types";

export interface TwoSumBstData {
  heap: (number | null)[];
  k: number;
  cur: number | null;
  seen: number[];
  /** the complement k - node.val looked up */
  complement: number | null;
  found: boolean;
  answer: boolean | null;
}

export type TwoSumBstStep = Step<TwoSumBstData>;

/**
 * The tree structure is incidental here: a plain DFS with a hash set of visited values suffices. At
 * each node we ask whether its complement k − val was already seen; if so two nodes sum to k,
 * otherwise we remember this value and continue. `line` indexes CODE.
 */
export function twoSumBstSteps(heap: (number | null)[], k: number): TwoSumBstStep[] {
  const steps: TwoSumBstStep[] = [];
  const seen = new Set<number>();

  const snap = (o: Partial<TwoSumBstData>): TwoSumBstData => ({ heap, k, cur: null, seen: [...seen], complement: null, found: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TwoSumBstData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const valid = (i: number) => i < heap.length && heap[i] !== null;

  push(1, `Walk the tree with a seen-set; look for two values summing to ${k}.`);

  const dfs = (i: number): boolean => {
    if (!valid(i)) return false;
    const val = heap[i]!;
    const complement = k - val;
    if (seen.has(complement)) {
      push(4, `At ${val}: complement ${complement} already seen → pair sums to ${k}, true.`, { cur: i, complement, found: true, answer: true });
      return true;
    }
    push(4, `At ${val}: complement ${complement} not seen yet.`, { cur: i, complement });
    seen.add(val);
    push(5, `Remember ${val}.`, { cur: i });
    return dfs(2 * i + 1) || dfs(2 * i + 2);
  };

  const answer = dfs(0);
  if (!answer) push(8, `No two nodes sum to ${k} → false.`, { answer: false });
  return steps;
}
