import type { Step } from "@/core/types";

export interface TriangleData {
  points: number[][];
  /** current triple of point indices */
  tri: [number, number, number] | null;
  area: number | null;
  best: number;
  /** best triple so far */
  bestTri: [number, number, number] | null;
  answer: number | null;
}

export type TriangleStep = Step<TriangleData>;

const MAX_STEPS = 400;

/**
 * The area of a triangle from three points is half the absolute value of the shoelace cross product. With
 * few points, checking every triple and keeping the largest area is direct. `line` indexes CODE.
 */
export function triangleSteps(points: number[][]): TriangleStep[] {
  const steps: TriangleStep[] = [];
  const n = points.length;
  let best = 0;
  let bestTri: [number, number, number] | null = null;

  const snap = (o: Partial<TriangleData>): TriangleData => ({ points, tri: null, area: null, best, bestTri, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TriangleData> = {}) => {
    if (steps.length >= MAX_STEPS) return;
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Try every triple of points; the triangle area is half the shoelace cross product.");

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[j];
        const [x3, y3] = points[k];
        const area = Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
        if (area > best) {
          best = area;
          bestTri = [i, j, k];
          push(11, `Triple (${i},${j},${k}): area ${area.toFixed(2)} — new best.`, { tri: [i, j, k], area });
        } else {
          push(10, `Triple (${i},${j},${k}): area ${area.toFixed(2)} ≤ best ${best.toFixed(2)}.`, { tri: [i, j, k], area });
        }
      }
    }
  }

  steps.push({ id: steps.length, line: 13, explanation: `Largest triangle area: ${best.toFixed(5).replace(/0+$/, "").replace(/\.$/, "")}.`, data: snap({ answer: best }), highlights: [] });
  return steps;
}
