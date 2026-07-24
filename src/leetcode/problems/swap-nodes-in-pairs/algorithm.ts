import type { Step } from "@/core/types";

export interface SwapPairsData {
  values: number[];
  /** Indices (into the current values order) of the pair being swapped. */
  pair: [number, number] | null;
  swappedUpTo: number;
}

export type SwapPairsStep = Step<SwapPairsData>;

/**
 * Walk the list two nodes at a time and swap each adjacent pair by relinking. We
 * model the list as an array and swap positions, since the visible effect of the
 * pointer surgery is exactly a positional swap. `line` indexes CODE.
 */
export function swapPairsSteps(input: number[]): SwapPairsStep[] {
  const values = [...input];
  const steps: SwapPairsStep[] = [];

  const snap = (o: Partial<SwapPairsData>): SwapPairsData => ({
    values: [...values],
    pair: null,
    swappedUpTo: 0,
    ...o,
  });
  const push = (line: number, explanation: string, data: SwapPairsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Swap each adjacent pair of nodes, left to right.", snap({}));

  for (let i = 0; i + 1 < values.length; i += 2) {
    push(4, `Pair (${values[i]}, ${values[i + 1]}) — swap them.`, snap({ pair: [i, i + 1], swappedUpTo: i }));
    [values[i], values[i + 1]] = [values[i + 1], values[i]];
    push(6, `Swapped → (${values[i]}, ${values[i + 1]}).`, snap({ pair: [i, i + 1], swappedUpTo: i + 2 }));
  }

  push(9, "Every pair swapped.", snap({ swappedUpTo: values.length }));
  return steps;
}
