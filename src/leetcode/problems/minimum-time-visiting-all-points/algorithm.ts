import type { Step } from "@/core/types";

export interface VisitPointsData {
  points: number[][];
  /** index of the destination leg being traveled */
  to: number | null;
  dx: number | null;
  dy: number | null;
  legTime: number | null;
  time: number;
  answer: number | null;
}

export type VisitPointsStep = Step<VisitPointsData>;

/**
 * Each move can go diagonally (covering one x and one y unit at once) or straight. So the time
 * between two points is the Chebyshev distance max(|dx|, |dy|): travel diagonally until aligned, then
 * straight. Summing the legs gives the total. `line` indexes CODE.
 */
export function visitPointsSteps(points: number[][]): VisitPointsStep[] {
  const steps: VisitPointsStep[] = [];
  let time = 0;

  const snap = (o: Partial<VisitPointsData>): VisitPointsData => ({ points, to: null, dx: null, dy: null, legTime: null, time, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<VisitPointsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Time between points is max(|dx|, |dy|) — diagonal moves are free on one axis.");

  for (let i = 1; i < points.length; i++) {
    const dx = Math.abs(points[i][0] - points[i - 1][0]);
    const dy = Math.abs(points[i][1] - points[i - 1][1]);
    const legTime = Math.max(dx, dy);
    time += legTime;
    push(5, `(${points[i - 1]}) → (${points[i]}): max(${dx}, ${dy}) = ${legTime} (total ${time}).`, { to: i, dx, dy, legTime });
  }

  push(7, `Minimum total time: ${time}.`, { answer: time });
  return steps;
}
