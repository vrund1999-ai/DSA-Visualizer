import type { Step } from "@/core/types";

export interface Point {
  x: number;
  y: number;
  dist: number;
}

export interface KClosestData {
  points: Point[];
  k: number;
  phase: "measure" | "sort" | "select";
  /** point index highlighted this step */
  cur: number | null;
  /** indices selected as the k closest */
  selected: number[];
  answer: number[][] | null;
}

export type KClosestStep = Step<KClosestData>;

/**
 * Comparing squared distances x²+y² avoids square roots while ranking points identically. We measure
 * each point, sort ascending by that squared distance, and keep the first k. `line` indexes CODE.
 */
export function kClosestSteps(input: number[][], k: number): KClosestStep[] {
  const steps: KClosestStep[] = [];
  const points: Point[] = input.map(([x, y]) => ({ x, y, dist: x * x + y * y }));

  const snap = (o: Partial<KClosestData>): KClosestData => ({ points: [...points], k, phase: "measure", cur: null, selected: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KClosestData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Rank points by squared distance x² + y² (no square roots needed).");

  for (let i = 0; i < points.length; i++) {
    push(2, `(${points[i].x}, ${points[i].y}) → dist² = ${points[i].dist}.`, { phase: "measure", cur: i });
  }

  points.sort((a, b) => a.dist - b.dist);
  push(3, `Sorted by distance: [${points.map((p) => `(${p.x},${p.y})`).join(", ")}].`, { phase: "sort" });

  const selected = points.slice(0, k).map((_, i) => i);
  const answer = points.slice(0, k).map((p) => [p.x, p.y]);
  push(4, `Take the ${k} closest: ${answer.map((p) => `(${p[0]},${p[1]})`).join(", ")}.`, { phase: "select", selected, answer });
  return steps;
}
