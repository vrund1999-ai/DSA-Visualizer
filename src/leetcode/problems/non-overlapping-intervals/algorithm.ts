import type { Step } from "@/core/types";

export interface NonOverlapData {
  intervals: [number, number][];
  /** index currently examined (in the sorted order) */
  cur: number | null;
  /** current kept-frontier end */
  end: number;
  /** indices kept / removed */
  kept: number[];
  removed: number[];
  count: number;
  answer: number | null;
}

export type NonOverlapStep = Step<NonOverlapData>;

/**
 * Greedily keep intervals: sort by end, then walk left to right keeping any interval
 * that starts at or after the last kept end. Everything else must be removed —
 * keeping earliest-ending intervals leaves the most room. `line` indexes CODE.
 */
export function nonOverlapSteps(input: [number, number][]): NonOverlapStep[] {
  const steps: NonOverlapStep[] = [];
  const intervals = [...input].sort((a, b) => a[1] - b[1]);
  const kept: number[] = [];
  const removed: number[] = [];
  let end = -Infinity;
  let count = 0;

  const snap = (o: Partial<NonOverlapData>): NonOverlapData => ({ intervals: intervals.map((iv) => [...iv] as [number, number]), cur: null, end, kept: [...kept], removed: [...removed], count, answer: null, ...o });
  const push = (line: number, explanation: string, data: NonOverlapData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Sort by end time; keep earliest-ending compatible intervals.", snap({}));

  for (let i = 0; i < intervals.length; i++) {
    const [s, e] = intervals[i];
    if (s >= end) {
      end = e;
      kept.push(i);
      push(5, `[${s}, ${e}] starts ≥ frontier — keep it (end → ${e}).`, snap({ cur: i }));
    } else {
      count++;
      removed.push(i);
      push(7, `[${s}, ${e}] overlaps frontier ${end} — remove it.`, snap({ cur: i }));
    }
  }

  push(10, `Minimum removals: ${count}.`, snap({ answer: count }));
  return steps;
}
