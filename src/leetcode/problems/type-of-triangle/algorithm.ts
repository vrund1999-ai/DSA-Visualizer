import type { Step } from "@/core/types";

export interface TriangleData {
  nums: number[];
  sorted: number[];
  /** which check is being evaluated */
  stage: "sort" | "valid" | "classify" | "done";
  valid: boolean | null;
  answer: string | null;
}

export type TriangleStep = Step<TriangleData>;

/**
 * Sorting the three sides makes the checks trivial: the triangle inequality only needs a+b > c (the
 * two smallest vs the largest). Then equal-side counts classify it as equilateral, isosceles, or
 * scalene. `line` indexes CODE.
 */
export function triangleSteps(nums: number[]): TriangleStep[] {
  const steps: TriangleStep[] = [];
  const sorted = [...nums].sort((a, b) => a - b);
  const [a, b, c] = sorted;

  const snap = (o: Partial<TriangleData>): TriangleData => ({ nums, sorted, stage: "sort", valid: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TriangleData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort sides: [${sorted.join(", ")}].`, { stage: "sort" });

  if (a + b <= c) {
    push(2, `${a} + ${b} = ${a + b} ≤ ${c} → not a valid triangle → "none".`, { stage: "valid", valid: false, answer: "none" });
    return steps;
  }
  push(2, `${a} + ${b} = ${a + b} > ${c} → valid triangle.`, { stage: "valid", valid: true });

  let answer: string;
  if (a === b && b === c) answer = "equilateral";
  else if (a === b || b === c) answer = "isosceles";
  else answer = "scalene";
  push(answer === "equilateral" ? 3 : answer === "isosceles" ? 4 : 5, `Sides ${sorted.join(", ")} → ${answer}.`, { stage: "done", valid: true, answer });
  return steps;
}
