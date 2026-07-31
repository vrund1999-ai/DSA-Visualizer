import type { Step } from "@/core/types";

export interface DistinctColorsData {
  queries: number[][];
  opIndex: number | null;
  /** current ball → color assignments */
  balls: { ball: number; color: number }[];
  /** ball touched this step */
  activeBall: number | null;
  distinct: number | null;
  answers: (number | null)[];
}

export type DistinctColorsStep = Step<DistinctColorsData>;

/**
 * Find the Number of Distinct Colors Among the Balls: each query paints (or repaints) a ball. A ball→color
 * map plus a color→count map lets each query update in O(1) and report the number of distinct colors in use.
 * `line` indexes CODE.
 */
export function distinctColorsSteps(queries: number[][]): DistinctColorsStep[] {
  const steps: DistinctColorsStep[] = [];
  const ballColor = new Map<number, number>();
  const colorCount = new Map<number, number>();
  const answers: (number | null)[] = queries.map(() => null);

  const ballsView = () =>
    [...ballColor.entries()].sort((a, b) => a[0] - b[0]).map(([ball, color]) => ({ ball, color }));
  const snap = (o: Partial<DistinctColorsData>): DistinctColorsData => ({
    queries,
    opIndex: null,
    balls: ballsView(),
    activeBall: null,
    distinct: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<DistinctColorsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Paint balls one query at a time; report distinct colors each time.`);

  for (let k = 0; k < queries.length; k++) {
    const [ball, color] = queries[k];
    if (ballColor.has(ball)) {
      const old = ballColor.get(ball)!;
      colorCount.set(old, colorCount.get(old)! - 1);
      if (colorCount.get(old) === 0) colorCount.delete(old);
    }
    ballColor.set(ball, color);
    colorCount.set(color, (colorCount.get(color) ?? 0) + 1);
    const distinct = colorCount.size;
    answers[k] = distinct;
    push(12, `Paint ball ${ball} color ${color} → ${distinct} distinct color(s).`, { opIndex: k, activeBall: ball, distinct });
  }

  return steps;
}
