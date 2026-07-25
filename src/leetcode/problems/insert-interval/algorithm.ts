import type { Step } from "@/core/types";

export interface InsertIntervalData {
  intervals: [number, number][];
  newInterval: [number, number];
  /** interval index being processed */
  cur: number | null;
  /** the growing merged interval [s, e] */
  merged: [number, number];
  phase: "before" | "merge" | "after" | "done";
  result: [number, number][];
}

export type InsertIntervalStep = Step<InsertIntervalData>;

/**
 * Three phases: copy intervals that end before the new one starts, merge everything
 * that overlaps into one growing interval, then copy the rest. `line` indexes CODE.
 */
export function insertIntervalSteps(intervals: [number, number][], newInterval: [number, number]): InsertIntervalStep[] {
  const steps: InsertIntervalStep[] = [];
  const res: [number, number][] = [];
  let [s, e] = newInterval;
  let i = 0;

  const snap = (o: Partial<InsertIntervalData>): InsertIntervalData => ({ intervals: intervals.map((iv) => [...iv] as [number, number]), newInterval: [...newInterval] as [number, number], cur: null, merged: [s, e], phase: "before", result: res.map((r) => [...r] as [number, number]), ...o });
  const push = (line: number, explanation: string, data: InsertIntervalData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Insert [${s}, ${e}] and keep the list merged & sorted.`, snap({}));

  while (i < intervals.length && intervals[i][1] < s) {
    res.push(intervals[i]);
    push(5, `[${intervals[i][0]}, ${intervals[i][1]}] ends before ${s} — keep as-is.`, snap({ cur: i, phase: "before" }));
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= e) {
    s = Math.min(s, intervals[i][0]);
    e = Math.max(e, intervals[i][1]);
    push(9, `[${intervals[i][0]}, ${intervals[i][1]}] overlaps — merge → [${s}, ${e}].`, snap({ cur: i, merged: [s, e], phase: "merge" }));
    i++;
  }
  res.push([s, e]);
  push(11, `Add merged interval [${s}, ${e}].`, snap({ merged: [s, e], phase: "merge" }));

  while (i < intervals.length) {
    res.push(intervals[i]);
    push(13, `[${intervals[i][0]}, ${intervals[i][1]}] is after — keep.`, snap({ cur: i, phase: "after" }));
    i++;
  }

  push(14, `Result: ${res.map((r) => `[${r[0]},${r[1]}]`).join(", ")}.`, snap({ phase: "done" }));
  return steps;
}
