import type { Step } from "@/core/types";

export interface SpiralData {
  matrix: number[][];
  current: [number, number] | null;
  visited: [number, number][];
  result: number[];
}

export type SpiralStep = Step<SpiralData>;

/**
 * Peel the matrix in layers, shrinking four boundaries (top, bottom, left,
 * right) after walking each edge: left→right across the top, top→bottom down the
 * right, and so on inward. `line` indexes CODE.
 */
export function spiralSteps(matrix: number[][]): SpiralStep[] {
  const steps: SpiralStep[] = [];
  const result: number[] = [];
  const visited: [number, number][] = [];
  const m = matrix.length;
  const n = m ? matrix[0].length : 0;

  const visit = (r: number, c: number, line: number) => {
    result.push(matrix[r][c]);
    visited.push([r, c]);
    steps.push({
      id: steps.length,
      line,
      explanation: `Take matrix[${r}][${c}] = ${matrix[r][c]}.`,
      data: { matrix: matrix.map((row) => [...row]), current: [r, c], visited: visited.map((v) => [...v] as [number, number]), result: [...result] },
      highlights: [],
      metrics: { taken: result.length },
    });
  };

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) visit(top, c, 4);
    top++;
    for (let r = top; r <= bottom; r++) visit(r, right, 6);
    right--;
    if (top <= bottom) for (let c = right; c >= left; c--) visit(bottom, c, 9);
    bottom--;
    if (left <= right) for (let r = bottom; r >= top; r--) visit(r, left, 12);
    left++;
  }

  steps.push({
    id: steps.length,
    line: 15,
    explanation: `Spiral order: [${result.join(", ")}].`,
    data: { matrix: matrix.map((row) => [...row]), current: null, visited: visited.map((v) => [...v] as [number, number]), result: [...result] },
    highlights: [],
  });
  return steps;
}
