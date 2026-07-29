import type { Step } from "@/core/types";

export interface MaxPointsData {
  points: number[][];
  /** anchor point index */
  anchor: number | null;
  /** point indices sharing the best slope from this anchor (including anchor) */
  bestLine: number[];
  best: number;
  answer: number | null;
}

export type MaxPointsStep = Step<MaxPointsData>;

const gcd = (a: number, b: number): number => (b === 0 ? a || 1 : gcd(b, a % b));

/**
 * Any line through the most points passes through some anchor point. Fixing an anchor, every other
 * point defines a slope; reducing dx/dy by their gcd (and normalizing sign) gives a canonical key, so
 * counting equal slopes finds the largest collinear group through that anchor. `line` indexes CODE.
 */
export function maxPointsSteps(points: number[][]): MaxPointsStep[] {
  const steps: MaxPointsStep[] = [];
  let best = points.length ? 1 : 0;
  let bestLine: number[] = points.length ? [0] : [];

  const snap = (o: Partial<MaxPointsData>): MaxPointsData => ({ points, anchor: null, bestLine: [...bestLine], best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxPointsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Through each anchor point, count how many others share each reduced slope.");

  for (let i = 0; i < points.length; i++) {
    const slopes = new Map<string, number[]>();
    let localBest = 1;
    let localLine = [i];
    for (let j = i + 1; j < points.length; j++) {
      let dx = points[j][0] - points[i][0];
      let dy = points[j][1] - points[i][1];
      const g = Math.abs(gcd(dx, dy)) || 1;
      dx /= g;
      dy /= g;
      if (dx < 0 || (dx === 0 && dy < 0)) { dx = -dx; dy = -dy; }
      const key = `${dx},${dy}`;
      const group = slopes.get(key) ?? [i];
      group.push(j);
      slopes.set(key, group);
      if (group.length > localBest) { localBest = group.length; localLine = group; }
    }
    if (localBest > best) { best = localBest; bestLine = localLine; }
    push(10, `Anchor (${points[i]}): best collinear group here has ${localBest} point(s) (overall ${best}).`, { anchor: i, bestLine: localLine });
  }

  push(13, `Maximum points on a line: ${best}.`, { answer: best });
  return steps;
}
