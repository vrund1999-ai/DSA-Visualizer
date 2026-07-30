import type { Step } from "@/core/types";

export interface WeakRowsData {
  mat: number[][];
  k: number;
  /** soldier count per row */
  counts: number[];
  /** row currently being counted */
  cur: number | null;
  /** ranked order of row indices (weakest first), once sorted */
  order: number[];
  answer: number[] | null;
}

export type WeakRowsStep = Step<WeakRowsData>;

/**
 * A row's strength is its number of soldiers (the 1s, which precede all 0s). Pairing each count with its
 * index and sorting by count then index puts the weakest rows first; the first k indices are the answer.
 * `line` indexes CODE.
 */
export function weakRowsSteps(mat: number[][], k: number): WeakRowsStep[] {
  const steps: WeakRowsStep[] = [];
  const counts = new Array(mat.length).fill(0);

  const snap = (o: Partial<WeakRowsData>): WeakRowsData => ({ mat, k, counts: [...counts], cur: null, order: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<WeakRowsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Count soldiers per row, then take the ${k} weakest.`);

  for (let i = 0; i < mat.length; i++) {
    counts[i] = mat[i].reduce((a, b) => a + b, 0);
    push(2, `Row ${i} has ${counts[i]} soldier(s).`, { cur: i });
  }

  const order = mat.map((_, i) => i).sort((a, b) => counts[a] - counts[b] || a - b);
  const answer = order.slice(0, k);
  push(7, `Weakest ${k} rows (by strength then index): [${answer.join(", ")}].`, { order, answer });
  return steps;
}
