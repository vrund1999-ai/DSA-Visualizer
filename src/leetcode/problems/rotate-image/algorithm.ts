import type { Highlight, Step } from "@/core/types";

export interface RotateData {
  matrix: number[][];
  phase: "transpose" | "reverse" | "done";
}

export type RotateStep = Step<RotateData>;

/**
 * Rotate 90° clockwise in-place as two passes: transpose (swap across the main
 * diagonal), then reverse each row. Composing a mirror over the diagonal with a
 * horizontal flip equals a quarter turn. `line` indexes CODE.
 */
export function rotateSteps(input: number[][]): RotateStep[] {
  const matrix = input.map((row) => [...row]);
  const n = matrix.length;
  const steps: RotateStep[] = [];

  const snap = (phase: RotateData["phase"], highlights: Highlight[], line: number, explanation: string) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { matrix: matrix.map((r) => [...r]), phase },
      highlights,
    });
  };

  snap("transpose", [], 2, "Pass 1: transpose — mirror the matrix across its main diagonal.");
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      snap("transpose", [
        { ref: `${i},${j}`, role: "swapped" },
        { ref: `${j},${i}`, role: "swapped" },
      ], 5, `Swap (${i}, ${j}) with (${j}, ${i}).`);
    }
  }

  snap("reverse", [], 6, "Pass 2: reverse each row to complete the clockwise rotation.");
  for (let i = 0; i < n; i++) {
    let l = 0;
    let r = n - 1;
    while (l < r) {
      [matrix[i][l], matrix[i][r]] = [matrix[i][r], matrix[i][l]];
      snap("reverse", [
        { ref: `${i},${l}`, role: "active" },
        { ref: `${i},${r}`, role: "active" },
      ], 6, `Row ${i}: swap columns ${l} and ${r}.`);
      l++;
      r--;
    }
  }

  snap("done", matrix.flatMap((row, i) => row.map((_, j) => ({ ref: `${i},${j}`, role: "sorted" }) as Highlight)), 7, "Rotated 90° clockwise.");
  return steps;
}
