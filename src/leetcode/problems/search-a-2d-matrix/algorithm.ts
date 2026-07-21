import type { Highlight, Step } from "@/core/types";

export interface Search2DInput {
  matrix: number[][];
  target: number;
}

export interface Search2DData {
  matrix: number[][];
  target: number;
  lo: number;
  hi: number;
  mid: number | null;
  found: boolean | null;
}

export type Search2DStep = Step<Search2DData>;

/**
 * The row-sorted, column-shifted matrix is fully sorted when read row by row, so
 * treat it as one array of length m·n and binary-search it, mapping a flat index
 * to (row, col) with divide/modulo. `line` indexes CODE.
 */
export function search2DSteps(input: Search2DInput): Search2DStep[] {
  const { matrix, target } = input;
  const m = matrix.length;
  const n = m ? matrix[0].length : 0;
  const steps: Search2DStep[] = [];
  let lo = 0;
  let hi = m * n - 1;
  let found: boolean | null = null;

  const rc = (flat: number): [number, number] => [Math.floor(flat / n), flat % n];
  const outside = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let f = 0; f < m * n; f++) {
      if (f < lo || f > hi) {
        const [r, c] = rc(f);
        hl.push({ ref: `${r},${c}`, role: "visited" });
      }
    }
    return hl;
  };
  const snap = (o: Partial<Search2DData>): Search2DData => ({ matrix: matrix.map((r) => [...r]), target, lo, hi, mid: null, found, ...o });
  const push = (line: number, explanation: string, data: Search2DData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(2, `Treat the matrix as one sorted array of ${m * n} values and search for ${target}.`, snap({}), []);

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const [r, c] = rc(mid);
    const val = matrix[r][c];
    if (val === target) {
      found = true;
      push(6, `matrix[${r}][${c}] = ${val} — found the target.`, snap({ mid, found: true }), [{ ref: `${r},${c}`, role: "target" }]);
      return steps;
    }
    if (val < target) {
      push(7, `matrix[${r}][${c}] = ${val} < ${target} — search the upper half.`, snap({ mid }), [...outside(), { ref: `${r},${c}`, role: "swapped" }]);
      lo = mid + 1;
    } else {
      push(8, `matrix[${r}][${c}] = ${val} > ${target} — search the lower half.`, snap({ mid }), [...outside(), { ref: `${r},${c}`, role: "swapped" }]);
      hi = mid - 1;
    }
  }

  found = false;
  push(10, `${target} is not in the matrix.`, snap({ mid: null, found: false }), []);
  return steps;
}
