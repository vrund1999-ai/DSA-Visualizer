import type { Step } from "@/core/types";

export interface MagicData {
  grid: number[][];
  /** top-left of the 3x3 window under inspection */
  window: [number, number] | null;
  verdict: "magic" | "not-magic" | null;
  reason: string;
  count: number;
  answer: number | null;
}

export type MagicStep = Step<MagicData>;

function isMagic(g: number[][], r: number, c: number): { ok: boolean; reason: string } {
  const seen = new Set<number>();
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      const v = g[r + i][c + j];
      if (v < 1 || v > 9) return { ok: false, reason: `${v} is outside 1–9` };
      if (seen.has(v)) return { ok: false, reason: `${v} repeats` };
      seen.add(v);
    }
  const line = (vals: number[]) => vals.reduce((a, b) => a + b, 0);
  const lines = [
    [g[r][c], g[r][c + 1], g[r][c + 2]],
    [g[r + 1][c], g[r + 1][c + 1], g[r + 1][c + 2]],
    [g[r + 2][c], g[r + 2][c + 1], g[r + 2][c + 2]],
    [g[r][c], g[r + 1][c], g[r + 2][c]],
    [g[r][c + 1], g[r + 1][c + 1], g[r + 2][c + 1]],
    [g[r][c + 2], g[r + 1][c + 2], g[r + 2][c + 2]],
    [g[r][c], g[r + 1][c + 1], g[r + 2][c + 2]],
    [g[r][c + 2], g[r + 1][c + 1], g[r + 2][c]],
  ];
  for (const l of lines) if (line(l) !== 15) return { ok: false, reason: `a line sums to ${line(l)}, not 15` };
  return { ok: true, reason: "1–9 once each, all lines sum to 15" };
}

/**
 * A 3×3 magic square uses each of 1–9 exactly once with every row, column, and diagonal summing to 15.
 * Slide a 3×3 window over the grid and test each placement independently. `line` indexes CODE.
 */
export function magicSteps(grid: number[][]): MagicStep[] {
  const steps: MagicStep[] = [];
  let count = 0;

  const snap = (o: Partial<MagicData>): MagicData => ({ grid, window: null, verdict: null, reason: "", count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MagicData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const R = grid.length;
  const C = grid[0].length;
  push(1, "Slide a 3×3 window across the grid, testing each placement.");

  if (R < 3 || C < 3) {
    push(5, "Grid smaller than 3×3 — no magic squares.", { answer: 0 });
    return steps;
  }

  for (let r = 0; r + 3 <= R; r++) {
    for (let c = 0; c + 3 <= C; c++) {
      const { ok, reason } = isMagic(grid, r, c);
      if (ok) {
        count++;
        push(4, `Window at (${r},${c}) is magic — ${reason}.`, { window: [r, c], verdict: "magic", reason, count });
      } else {
        push(4, `Window at (${r},${c}) is not magic — ${reason}.`, { window: [r, c], verdict: "not-magic", reason });
      }
    }
  }

  push(5, `Found ${count} magic square(s).`, { answer: count });
  return steps;
}
