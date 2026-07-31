import type { Step } from "@/core/types";

export interface MinSwapsData {
  /** trailing-zero count per row, current order */
  zeros: number[];
  n: number;
  /** the target row index being satisfied */
  target: number | null;
  /** the row currently bubbling up */
  moving: number | null;
  swaps: number;
  answer: number | null;
}

export type MinSwapsStep = Step<MinSwapsData>;

/**
 * Minimum Swaps to Arrange a Binary Grid: row i must have at least n−1−i trailing zeros (space below the
 * diagonal). Working top-down, find the nearest row below with enough trailing zeros and bubble it up with
 * adjacent swaps; if none exists it's impossible. `line` indexes CODE.
 */
export function minSwapsSteps(grid: number[][]): MinSwapsStep[] {
  const steps: MinSwapsStep[] = [];
  const n = grid.length;
  const zeros = grid.map((row) => {
    let z = 0;
    for (let c = n - 1; c >= 0 && row[c] === 0; c--) z++;
    return z;
  });
  let swaps = 0;

  const snap = (o: Partial<MinSwapsData>): MinSwapsData => ({
    zeros: [...zeros],
    n,
    target: null,
    moving: null,
    swaps,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<MinSwapsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(7, `Trailing zeros per row: [${zeros.join(", ")}]. Row i needs ≥ ${n - 1}−i.`);

  for (let i = 0; i < n; i++) {
    const need = n - 1 - i;
    let j = i;
    while (j < n && zeros[j] < need) j++;
    if (j === n) {
      push(13, `No row from ${i} down has ≥ ${need} trailing zeros → impossible.`, { target: i, answer: -1 });
      return steps;
    }
    push(12, `Row ${i} needs ${need}; row ${j} qualifies (${zeros[j]} zeros).`, { target: i, moving: j });
    while (j > i) {
      [zeros[j], zeros[j - 1]] = [zeros[j - 1], zeros[j]];
      j--;
      swaps++;
      push(16, `Swap rows ${j} and ${j + 1} (swaps = ${swaps}).`, { target: i, moving: j });
    }
  }

  push(19, `Minimum swaps = ${swaps}.`, { answer: swaps });
  return steps;
}
