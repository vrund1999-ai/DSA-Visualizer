import type { Step } from "@/core/types";

export type HitOp = { type: "hit"; t: number } | { type: "getHits"; t: number };

export interface HitCounterData {
  queue: number[];
  op: string;
  /** lower bound of the valid window (t - 300) */
  lowerBound: number | null;
  evicted: number | null;
  result: number | null;
}

export type HitCounterStep = Step<HitCounterData>;

/**
 * Record each hit's timestamp in a queue. getHits(t) evicts timestamps that are more
 * than 300 seconds old, then the queue length is the count in the last 5 minutes.
 * `line` indexes CODE.
 */
export function hitCounterSteps(ops: HitOp[]): HitCounterStep[] {
  const steps: HitCounterStep[] = [];
  const q: number[] = [];

  const snap = (o: Partial<HitCounterData>): HitCounterData => ({ queue: [...q], op: "", lowerBound: null, evicted: null, result: null, ...o });
  const push = (line: number, explanation: string, data: HitCounterData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  for (const op of ops) {
    if (op.type === "hit") {
      q.push(op.t);
      push(2, `hit(${op.t}) — record the timestamp.`, snap({ op: `hit(${op.t})` }));
    } else {
      const lowerBound = op.t - 300;
      while (q.length && q[0] <= lowerBound) {
        const evicted = q.shift()!;
        push(6, `${evicted} ≤ ${lowerBound} — older than 300s, drop it.`, snap({ op: `getHits(${op.t})`, lowerBound, evicted }));
      }
      push(7, `getHits(${op.t}) → ${q.length} hit(s) in the last 300s.`, snap({ op: `getHits(${op.t})`, lowerBound, result: q.length }));
    }
  }

  return steps;
}
