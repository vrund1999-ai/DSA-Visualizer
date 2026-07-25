import type { Step } from "@/core/types";

export interface DistanceKData {
  heap: (number | null)[];
  target: number;
  k: number;
  /** heap indices in the current BFS ring */
  frontier: number[];
  seen: number[];
  dist: number;
  answer: number[] | null;
}

export type DistanceKStep = Step<DistanceKData>;

/**
 * Distance is symmetric, so we treat the tree as an undirected graph by also allowing moves to a
 * node's parent. A breadth-first expansion from the target grows one ring per step; after k rings the
 * frontier holds exactly the nodes at distance k. `line` indexes CODE.
 */
export function distanceKSteps(heap: (number | null)[], target: number, k: number): DistanceKStep[] {
  const steps: DistanceKStep[] = [];
  const valid = (i: number) => i >= 0 && i < heap.length && heap[i] !== null;
  const neighbors = (i: number) => [2 * i + 1, 2 * i + 2, i === 0 ? -1 : Math.floor((i - 1) / 2)].filter(valid);
  const targetIdx = heap.findIndex((v) => v === target);

  const seen = new Set<number>([targetIdx]);
  let frontier = [targetIdx];
  let dist = 0;

  const snap = (o: Partial<DistanceKData>): DistanceKData => ({ heap, target, k, frontier: [...frontier], seen: [...seen], dist, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DistanceKData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `BFS out from target ${target}; expand ${k} ring(s).`);

  while (dist < k) {
    const next: number[] = [];
    for (const node of frontier) for (const nb of neighbors(node)) if (!seen.has(nb)) { seen.add(nb); next.push(nb); }
    frontier = next;
    dist++;
    push(12, `Ring ${dist}: nodes [${frontier.map((i) => heap[i]).join(", ") || "none"}].`);
  }

  const answer = frontier.map((i) => heap[i]!);
  push(14, `Nodes at distance ${k}: [${answer.join(", ")}].`, { answer });
  return steps;
}
