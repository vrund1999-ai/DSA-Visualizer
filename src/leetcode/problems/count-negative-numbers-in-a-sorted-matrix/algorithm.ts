import type { Step } from "@/core/types";

export interface CountNegData {
  grid: number[][];
  r: number | null;
  c: number | null;
  /** cells counted as negative this step (row segment) */
  counted: string[];
  count: number;
  answer: number | null;
}

export type CountNegStep = Step<CountNegData>;

/**
 * Rows and columns are sorted non-increasing, so from the bottom-left corner a negative cell means
 * the entire rest of its row is negative (count them and move up), while a non-negative cell means we
 * must move right. This staircase walk is O(m + n). `line` indexes CODE.
 */
export function countNegSteps(grid: number[][]): CountNegStep[] {
  const steps: CountNegStep[] = [];
  const m = grid.length;
  const n = grid[0].length;
  let r = m - 1;
  let c = 0;
  let count = 0;

  const snap = (o: Partial<CountNegData>): CountNegData => ({ grid, r: null, c: null, counted: [], count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CountNegData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Walk a staircase from the bottom-left; each side of a negative cell is decided at once.");

  while (r >= 0 && c < n) {
    if (grid[r][c] < 0) {
      const counted = Array.from({ length: n - c }, (_, k) => `${r},${c + k}`);
      count += n - c;
      push(5, `grid[${r}][${c}] = ${grid[r][c]} < 0 → whole rest of row (${n - c}) is negative. Move up.`, { r, c, counted });
      r--;
    } else {
      push(8, `grid[${r}][${c}] = ${grid[r][c]} ≥ 0 → move right.`, { r, c });
      c++;
    }
  }

  push(11, `Total negative numbers: ${count}.`, { answer: count });
  return steps;
}
