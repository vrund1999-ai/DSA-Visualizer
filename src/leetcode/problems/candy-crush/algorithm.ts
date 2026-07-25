import type { Step } from "@/core/types";

export interface CandyData {
  grid: number[][];
  phase: "mark" | "crush" | "drop" | "done";
  /** cells marked for crushing this pass */
  marked: string[];
  answer: number[][] | null;
}

export type CandyStep = Step<CandyData>;

const MAX_STEPS = 400;

/**
 * One pass scans every row and column for runs of three or more equal candies, marks them, zeroes
 * all marked cells at once, then lets each column fall (gravity). Repeating until a pass marks
 * nothing yields the stable board. `line` indexes CODE.
 */
export function candySteps(input: number[][]): CandyStep[] {
  const steps: CandyStep[] = [];
  const grid = input.map((r) => [...r]);
  const R = grid.length;
  const C = grid[0].length;

  const push = (line: number, explanation: string, phase: CandyData["phase"], marked: string[], answer: number[][] | null = null) => {
    if (steps.length >= MAX_STEPS && phase !== "done") return;
    steps.push({ id: steps.length, line, explanation, data: { grid: grid.map((r) => [...r]), phase, marked: [...marked], answer }, highlights: [] });
  };

  push(3, "Repeat: mark 3-in-a-rows, crush them to empty, then drop candies down.", "mark", []);

  let crushed = true;
  while (crushed) {
    const mark = new Set<string>();
    for (let r = 0; r < R; r++)
      for (let c = 0; c + 2 < C; c++) {
        const v = grid[r][c];
        if (v !== 0 && v === grid[r][c + 1] && v === grid[r][c + 2]) { mark.add(`${r},${c}`); mark.add(`${r},${c + 1}`); mark.add(`${r},${c + 2}`); }
      }
    for (let c = 0; c < C; c++)
      for (let r = 0; r + 2 < R; r++) {
        const v = grid[r][c];
        if (v !== 0 && v === grid[r + 1][c] && v === grid[r + 2][c]) { mark.add(`${r},${c}`); mark.add(`${r + 1},${c}`); mark.add(`${r + 2},${c}`); }
      }

    crushed = mark.size > 0;
    if (!crushed) break;
    push(5, `Found ${mark.size} candies in runs of 3+ — mark them.`, "mark", [...mark]);

    for (const key of mark) { const [r, c] = key.split(",").map(Number); grid[r][c] = 0; }
    push(7, "Crush all marked candies to empty simultaneously.", "crush", [...mark]);

    for (let c = 0; c < C; c++) {
      let write = R - 1;
      for (let r = R - 1; r >= 0; r--) if (grid[r][c] !== 0) grid[write--][c] = grid[r][c];
      for (; write >= 0; write--) grid[write][c] = 0;
    }
    push(8, "Apply gravity: surviving candies fall to fill the gaps.", "drop", []);
  }

  push(10, "No more runs of three — the board is stable.", "done", [], grid.map((r) => [...r]));
  return steps;
}
