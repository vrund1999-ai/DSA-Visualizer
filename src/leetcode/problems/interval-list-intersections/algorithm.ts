import type { Step } from "@/core/types";

export interface IntersectionData {
  A: number[][];
  B: number[][];
  i: number | null;
  j: number | null;
  /** the overlap just found */
  overlap: number[] | null;
  res: number[][];
  answer: number[][] | null;
}

export type IntersectionStep = Step<IntersectionData>;

/**
 * Both lists are sorted and disjoint, so two pointers sweep them together. The current pair overlaps on
 * [max start, min end] when that range is valid; whichever interval ends first is discarded, since it
 * can't intersect anything later. `line` indexes CODE.
 */
export function intersectionSteps(A: number[][], B: number[][]): IntersectionStep[] {
  const steps: IntersectionStep[] = [];
  const res: number[][] = [];
  let i = 0;
  let j = 0;

  const snap = (o: Partial<IntersectionData>): IntersectionData => ({ A, B, i: null, j: null, overlap: null, res: res.map((r) => [...r]), answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<IntersectionData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Sweep both sorted lists with two pointers, taking each overlapping range.");

  while (i < A.length && j < B.length) {
    const lo = Math.max(A[i][0], B[j][0]);
    const hi = Math.min(A[i][1], B[j][1]);
    if (lo <= hi) {
      res.push([lo, hi]);
      push(6, `A[${i}]=[${A[i]}] ∩ B[${j}]=[${B[j]}] = [${lo}, ${hi}].`, { i, j, overlap: [lo, hi] });
    } else {
      push(5, `A[${i}]=[${A[i]}] and B[${j}]=[${B[j]}] do not overlap.`, { i, j });
    }
    if (A[i][1] < B[j][1]) i++;
    else j++;
  }

  push(10, `Intersections: ${res.map((r) => `[${r}]`).join(", ") || "none"}.`, { answer: res.map((r) => [...r]) });
  return steps;
}
