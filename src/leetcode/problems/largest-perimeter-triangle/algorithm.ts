import type { Step } from "@/core/types";

export interface TriangleData {
  sorted: number[];
  triple: [number, number, number] | null;
  valid: boolean | null;
  answer: number | null;
}

export type TriangleStep = Step<TriangleData>;

/**
 * Sort side lengths descending; the largest perimeter comes from the first consecutive triple (a ≥ b ≥ c)
 * satisfying the triangle inequality b + c > a. If none qualifies, no triangle exists. `line` indexes CODE.
 */
export function triangleSteps(nums: number[]): TriangleStep[] {
  const steps: TriangleStep[] = [];
  const sorted = [...nums].sort((a, b) => b - a);

  const snap = (o: Partial<TriangleData>): TriangleData => ({ sorted, triple: null, valid: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TriangleData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sorted descending: [${sorted.join(", ")}]. Scan consecutive triples.`);

  for (let i = 0; i + 2 < sorted.length; i++) {
    const a = sorted[i];
    const b = sorted[i + 1];
    const c = sorted[i + 2];
    const valid = b + c > a;
    if (valid) {
      push(5, `${b} + ${c} > ${a} → valid triangle, perimeter ${a + b + c}.`, { triple: [i, i + 1, i + 2], valid, answer: a + b + c });
      return steps;
    }
    push(4, `${b} + ${c} ≤ ${a} → not a triangle, keep scanning.`, { triple: [i, i + 1, i + 2], valid });
  }

  push(7, `No valid triangle → 0.`, { answer: 0 });
  return steps;
}
