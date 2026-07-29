import type { Step } from "@/core/types";

export interface SumNumbersData {
  heap: (number | null)[];
  cur: number | null;
  value: number | null;
  path: number[];
  leafValues: number[];
  sum: number;
  answer: number | null;
}

export type SumNumbersStep = Step<SumNumbersData>;

/**
 * Each root-to-leaf path spells a decimal number, most-significant digit at the root. Descending, we
 * grow the running value as value·10 + node; reaching a leaf finalizes one path number, and the answer
 * sums them over all leaves. `line` indexes CODE.
 */
export function sumNumbersSteps(heap: (number | null)[]): SumNumbersStep[] {
  const steps: SumNumbersStep[] = [];
  const leafValues: number[] = [];
  let sum = 0;

  const snap = (o: Partial<SumNumbersData>): SumNumbersData => ({ heap, cur: null, value: null, path: [], leafValues: [...leafValues], sum, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SumNumbersData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const valid = (i: number) => i < heap.length && heap[i] !== null;

  push(1, "Grow a decimal number down each path; sum the numbers at the leaves.");

  const dfs = (i: number, cur: number, path: number[]) => {
    if (!valid(i)) return;
    const v = cur * 10 + heap[i]!;
    const newPath = [...path, i];
    const isLeaf = !valid(2 * i + 1) && !valid(2 * i + 2);
    if (isLeaf) {
      leafValues.push(v);
      sum += v;
      push(5, `Leaf ${heap[i]}: path number ${v}. Sum now ${sum}.`, { cur: i, value: v, path: newPath });
    } else {
      push(3, `Visit ${heap[i]}: value = ${cur}·10 + ${heap[i]} = ${v}.`, { cur: i, value: v, path: newPath });
    }
    dfs(2 * i + 1, v, newPath);
    dfs(2 * i + 2, v, newPath);
  };

  dfs(0, 0, []);
  push(9, `Sum of root-to-leaf numbers: ${sum}.`, { answer: sum });
  return steps;
}
