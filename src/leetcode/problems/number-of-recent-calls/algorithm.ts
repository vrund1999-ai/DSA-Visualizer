import type { Step } from "@/core/types";

export interface RecentCallsData {
  queue: number[];
  /** current ping timestamp */
  t: number | null;
  /** lower bound of the valid window (t - 3000) */
  lowerBound: number | null;
  /** timestamp just evicted this step */
  evicted: number | null;
  result: number | null;
}

export type RecentCallsStep = Step<RecentCallsData>;

/**
 * Each ping(t) keeps a queue of request times and evicts anything older than
 * t − 3000, so the queue always holds exactly the calls in the last 3000 ms; its
 * length is the answer. `line` indexes CODE.
 */
export function recentCallsSteps(pings: number[]): RecentCallsStep[] {
  const steps: RecentCallsStep[] = [];
  const queue: number[] = [];

  const snap = (o: Partial<RecentCallsData>): RecentCallsData => ({ queue: [...queue], t: null, lowerBound: null, evicted: null, result: null, ...o });
  const push = (line: number, explanation: string, data: RecentCallsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  for (const t of pings) {
    const lowerBound = t - 3000;
    queue.push(t);
    push(3, `ping(${t}) — enqueue; window is [${lowerBound}, ${t}].`, snap({ t, lowerBound }));
    while (queue[0] < lowerBound) {
      const evicted = queue.shift()!;
      push(5, `${evicted} < ${lowerBound} — too old, drop it.`, snap({ t, lowerBound, evicted }));
    }
    push(6, `Calls in the last 3000 ms: ${queue.length}.`, snap({ t, lowerBound, result: queue.length }));
  }

  return steps;
}
