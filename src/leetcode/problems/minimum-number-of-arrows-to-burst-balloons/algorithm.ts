import type { Step } from "@/core/types";

export interface ArrowsData {
  /** balloons sorted by end */
  points: number[][];
  i: number | null;
  /** x-position of the current arrow */
  arrowAt: number | null;
  /** whether the current balloon needs a new arrow */
  newArrow: boolean | null;
  arrows: number;
  answer: number | null;
}

export type ArrowsStep = Step<ArrowsData>;

/**
 * Sorting balloons by their right edge lets a single arrow at that edge burst every overlapping
 * balloon. We only spend a new arrow when a balloon starts after the current arrow's position — a
 * classic greedy interval-covering. `line` indexes CODE.
 */
export function arrowsSteps(input: number[][]): ArrowsStep[] {
  const steps: ArrowsStep[] = [];
  const points = [...input].sort((a, b) => a[1] - b[1]);
  let arrows = 1;
  let arrowAt = points[0][1];

  const snap = (o: Partial<ArrowsData>): ArrowsData => ({ points, i: null, arrowAt, newArrow: null, arrows, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ArrowsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Sort by end. First arrow at x = ${arrowAt} bursts the earliest-ending balloon.`, { i: 0 });

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > arrowAt) {
      arrows++;
      arrowAt = points[i][1];
      push(7, `Balloon [${points[i]}] starts after ${arrowAt} — new arrow at ${arrowAt} (arrows ${arrows}).`, { i, newArrow: true });
    } else {
      push(5, `Balloon [${points[i]}] overlaps the arrow at x = ${arrowAt} — burst for free.`, { i, newArrow: false });
    }
  }

  push(10, `Minimum arrows: ${arrows}.`, { answer: arrows });
  return steps;
}
