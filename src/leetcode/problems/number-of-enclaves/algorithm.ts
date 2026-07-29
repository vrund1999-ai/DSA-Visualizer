import type { Step } from "@/core/types";

export interface EnclavesData {
  /** 1 = land, 0 = sea, 2 = escaped land (reached from border) */
  grid: number[][];
  phase: "flood" | "count" | "done";
  cur: [number, number] | null;
  count: number;
  answer: number | null;
}

export type EnclavesStep = Step<EnclavesData>;

/**
 * Land cells that can walk off the grid are exactly those connected to a border land cell. We flood
 * every border-connected component and mark it "escaped", then whatever land remains is enclosed. The
 * count of that remaining land is the answer. `line` indexes CODE.
 */
export function enclavesSteps(input: number[][]): EnclavesStep[] {
  const steps: EnclavesStep[] = [];
  const grid = input.map((r) => [...r]);
  const m = grid.length;
  const n = grid[0].length;

  const snap = (o: Partial<EnclavesData>): EnclavesData => ({ grid: grid.map((r) => [...r]), phase: "flood", cur: null, count: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<EnclavesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const flood = (r: number, c: number) => {
    if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] !== 1) return;
    grid[r][c] = 2;
    push(4, `(${r}, ${c}) reaches the border → escaped.`, { phase: "flood", cur: [r, c] });
    flood(r + 1, c);
    flood(r - 1, c);
    flood(r, c + 1);
    flood(r, c - 1);
  };

  push(1, "Flood land connected to the border; whatever land remains is enclosed.");

  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) if (r === 0 || c === 0 || r === m - 1 || c === n - 1) flood(r, c);

  let count = 0;
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) if (grid[r][c] === 1) count++;
  push(11, `Enclosed land cells (never reached the border): ${count}.`, { phase: "done", count, answer: count });
  return steps;
}
