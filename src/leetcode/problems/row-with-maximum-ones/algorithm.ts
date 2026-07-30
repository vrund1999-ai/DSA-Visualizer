import type { Step } from "@/core/types";

export interface RowMaxData {
  grid: number[][];
  scanRow: number | null;
  bestRow: number;
  bestCount: number;
  answer: [number, number] | null;
}

export type RowMaxStep = Step<RowMaxData>;

/**
 * Scan each row, count its ones, and keep the row with the most (ties keep the earliest row since we only
 * update on a strict increase). Return [rowIndex, count]. `line` indexes CODE.
 */
export function rowMaxSteps(grid: number[][]): RowMaxStep[] {
  const steps: RowMaxStep[] = [];
  let bestRow = 0;
  let bestCount = 0;

  const snap = (o: Partial<RowMaxData>): RowMaxData => ({
    grid,
    scanRow: null,
    bestRow,
    bestCount,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<RowMaxData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Find the row with the most 1s (ties → smallest index).`);

  for (let r = 0; r < grid.length; r++) {
    const count = grid[r].reduce((a, b) => a + b, 0);
    if (count > bestCount) {
      bestCount = count;
      bestRow = r;
      push(6, `Row ${r} has ${count} one(s) — new best.`, { scanRow: r });
    } else {
      push(3, `Row ${r} has ${count} one(s) — not better than ${bestCount}.`, { scanRow: r });
    }
  }

  push(9, `Answer: row ${bestRow} with ${bestCount} one(s).`, { answer: [bestRow, bestCount] });
  return steps;
}
