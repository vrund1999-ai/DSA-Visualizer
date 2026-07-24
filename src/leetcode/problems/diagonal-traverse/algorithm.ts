import type { Step } from "@/core/types";

export interface DiagonalData {
  mat: number[][];
  r: number;
  c: number;
  up: boolean;
  order: number[];
  /** cells already emitted, as "r,c" keys */
  visited: string[];
  done: boolean;
}

export type DiagonalStep = Step<DiagonalData>;

/**
 * Walk the anti-diagonals, alternating direction: up-right then down-left. At each
 * boundary we step to the next diagonal and flip direction. `line` indexes CODE.
 */
export function diagonalSteps(mat: number[][]): DiagonalStep[] {
  const steps: DiagonalStep[] = [];
  const m = mat.length;
  const n = mat[0].length;
  const order: number[] = [];
  const visited: string[] = [];
  let r = 0;
  let c = 0;
  let up = true;

  const snap = (o: Partial<DiagonalData>): DiagonalData => ({ mat: mat.map((row) => [...row]), r, c, up, order: [...order], visited: [...visited], done: false, ...o });
  const push = (line: number, explanation: string, data: DiagonalData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Zigzag along anti-diagonals, alternating up-right / down-left.", snap({}));

  for (let i = 0; i < m * n; i++) {
    order.push(mat[r][c]);
    visited.push(`${r},${c}`);
    push(4, `Emit ${mat[r][c]} at (${r}, ${c}) — ${up ? "↗" : "↙"}.`, snap({}));
    if (up) {
      if (c === n - 1) { r++; up = false; }
      else if (r === 0) { c++; up = false; }
      else { r--; c++; }
    } else {
      if (r === m - 1) { c++; up = true; }
      else if (c === 0) { r++; up = true; }
      else { r++; c--; }
    }
  }

  push(15, `Diagonal order: [${order.join(", ")}].`, snap({ done: true }));
  return steps;
}
