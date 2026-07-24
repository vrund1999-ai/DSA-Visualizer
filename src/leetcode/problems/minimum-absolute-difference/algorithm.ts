import type { Step } from "@/core/types";

export interface MinAbsDiffData {
  arr: number[];
  /** the adjacent pair currently compared: [i-1, i] */
  pair: [number, number] | null;
  min: number;
  phase: "sort" | "scan" | "collect" | "done";
  results: [number, number][];
}

export type MinAbsDiffStep = Step<MinAbsDiffData>;

/**
 * After sorting, the smallest absolute difference can only occur between adjacent
 * elements. One pass finds that minimum; a second pass collects every adjacent pair
 * achieving it. `line` indexes CODE.
 */
export function minAbsDiffSteps(input: number[]): MinAbsDiffStep[] {
  const steps: MinAbsDiffStep[] = [];
  const arr = [...input].sort((a, b) => a - b);
  let min = Infinity;
  const results: [number, number][] = [];

  const snap = (o: Partial<MinAbsDiffData>): MinAbsDiffData => ({ arr: [...arr], pair: null, min, phase: "scan", results: results.map((r) => [...r] as [number, number]), ...o });
  const push = (line: number, explanation: string, data: MinAbsDiffData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Sort; the min difference is between adjacent values.", snap({ phase: "sort" }));

  for (let i = 1; i < arr.length; i++) {
    const d = arr[i] - arr[i - 1];
    if (d < min) min = d;
    push(4, `|${arr[i]} − ${arr[i - 1]}| = ${d}; running min ${min}.`, snap({ pair: [i - 1, i], phase: "scan" }));
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === min) {
      results.push([arr[i - 1], arr[i]]);
      push(8, `Pair [${arr[i - 1]}, ${arr[i]}] has the min difference ${min}.`, snap({ pair: [i - 1, i], phase: "collect" }));
    }
  }

  push(9, `Minimum difference ${min}: ${results.length} pair(s).`, snap({ phase: "done" }));
  return steps;
}
