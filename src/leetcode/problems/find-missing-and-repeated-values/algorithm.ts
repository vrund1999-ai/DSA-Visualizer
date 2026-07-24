import type { Step } from "@/core/types";

export interface MissingRepeatedData {
  grid: number[][];
  /** occurrence count per value 1..n*n (index 0 unused) */
  seen: number[];
  /** grid cell [r,c] currently being counted */
  cell: [number, number] | null;
  repeated: number | null;
  missing: number | null;
  phase: "count" | "scan" | "done";
  /** value being inspected during the scan phase */
  scanValue: number | null;
}

export type MissingRepeatedStep = Step<MissingRepeatedData>;

/**
 * The grid holds 1..n² with exactly one value duplicated and one absent. Tally every
 * cell, then scan the tallies: the value seen twice is the repeat, the value seen
 * zero times is the missing one. `line` indexes CODE.
 */
export function missingRepeatedSteps(grid: number[][]): MissingRepeatedStep[] {
  const steps: MissingRepeatedStep[] = [];
  const n = grid.length;
  const seen = new Array(n * n + 1).fill(0);

  const snap = (o: Partial<MissingRepeatedData>): MissingRepeatedData => ({ grid: grid.map((r) => [...r]), seen: [...seen], cell: null, repeated: null, missing: null, phase: "count", scanValue: null, ...o });
  const push = (line: number, explanation: string, data: MissingRepeatedData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Count how many times each value appears.", snap({}));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const v = grid[r][c];
      seen[v]++;
      push(4, `Cell (${r}, ${c}) = ${v} → seen ${seen[v]} time(s).`, snap({ cell: [r, c], phase: "count" }));
    }
  }

  let repeated = -1;
  let missing = -1;
  for (let v = 1; v <= n * n; v++) {
    if (seen[v] === 2) {
      repeated = v;
      push(7, `${v} appears twice → repeated value.`, snap({ scanValue: v, phase: "scan", repeated, missing: missing === -1 ? null : missing }));
    } else if (seen[v] === 0) {
      missing = v;
      push(8, `${v} never appears → missing value.`, snap({ scanValue: v, phase: "scan", repeated: repeated === -1 ? null : repeated, missing }));
    }
  }

  push(10, `Answer: [repeated ${repeated}, missing ${missing}].`, snap({ repeated, missing, phase: "done" }));
  return steps;
}
