import type { Step } from "@/core/types";

export interface Spiral2Data {
  n: number;
  matrix: number[][];
  cur: [number, number] | null;
  answer: number[][] | null;
}

export type Spiral2Step = Step<Spiral2Data>;

/**
 * Fill the matrix along shrinking boundaries: the top row left→right, the right column top→bottom, the
 * bottom row right→left, the left column bottom→top, then move each boundary inward and repeat. `line`
 * indexes CODE.
 */
export function spiral2Steps(n: number): Spiral2Step[] {
  const steps: Spiral2Step[] = [];
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  const snap = (o: Partial<Spiral2Data>): Spiral2Data => ({ n, matrix: matrix.map((r) => [...r]), cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<Spiral2Data> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  let v = 1;

  push(2, `Fill an ${n}×${n} matrix with 1…${n * n} in spiral order.`);

  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) {
      matrix[top][c] = v;
      push(5, `Top row → place ${v} at (${top},${c}).`, { cur: [top, c] });
      v++;
    }
    top++;
    for (let r = top; r <= bottom; r++) {
      matrix[r][right] = v;
      push(7, `Right col ↓ place ${v} at (${r},${right}).`, { cur: [r, right] });
      v++;
    }
    right--;
    for (let c = right; c >= left; c--) {
      matrix[bottom][c] = v;
      push(9, `Bottom row ← place ${v} at (${bottom},${c}).`, { cur: [bottom, c] });
      v++;
    }
    bottom--;
    for (let r = bottom; r >= top; r--) {
      matrix[r][left] = v;
      push(11, `Left col ↑ place ${v} at (${r},${left}).`, { cur: [r, left] });
      v++;
    }
    left++;
  }

  push(14, "Spiral matrix complete.", { answer: matrix.map((r) => [...r]) });
  return steps;
}
