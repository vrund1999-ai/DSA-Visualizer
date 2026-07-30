import type { Step } from "@/core/types";

export interface RelativeSortData {
  arr1: number[];
  arr2: number[];
  /** remaining counts of values from arr1 */
  counts: { value: number; count: number }[];
  /** arr2 index currently emitted, or null in the tail phase */
  activeArr2: number | null;
  output: number[];
  phase: "order" | "tail";
  done: boolean;
}

export type RelativeSortStep = Step<RelativeSortData>;

/**
 * Relative Sort Array: tally arr1, then emit each arr2 value (in arr2's order) as many times as it occurs,
 * and finally append the remaining values in ascending order. `line` indexes CODE.
 */
export function relativeSortSteps(arr1: number[], arr2: number[]): RelativeSortStep[] {
  const steps: RelativeSortStep[] = [];
  const count = new Map<number, number>();
  for (const x of arr1) count.set(x, (count.get(x) ?? 0) + 1);
  const output: number[] = [];

  const countsArr = () => [...count.entries()].map(([value, c]) => ({ value, count: c }));
  const snap = (o: Partial<RelativeSortData>): RelativeSortData => ({
    arr1,
    arr2,
    counts: countsArr(),
    activeArr2: null,
    output: [...output],
    phase: "order",
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<RelativeSortData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Counted arr1. Emit arr2's values in order, then the leftovers ascending.`);

  for (let k = 0; k < arr2.length; k++) {
    const x = arr2[k];
    const c = count.get(x) ?? 0;
    for (let i = 0; i < c; i++) output.push(x);
    count.delete(x);
    push(6, `Emit ${x} ×${c} in arr2 order.`, { activeArr2: k });
  }

  const rest = [...count.entries()].flatMap(([x, c]) => new Array(c).fill(x)).sort((a, b) => a - b);
  for (const x of rest) output.push(x);
  push(11, `Append leftovers ascending: [${rest.join(", ")}].`, { phase: "tail" });

  push(12, `Result: [${output.join(", ")}].`, { phase: "tail", done: true });
  return steps;
}
