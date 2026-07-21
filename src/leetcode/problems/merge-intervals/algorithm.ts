import type { Highlight, Step } from "@/core/types";

export interface Interval {
  start: number;
  end: number;
}

export interface MergeData {
  intervals: Interval[];
  merged: Interval[];
  i: number | null;
  /** Index into `merged` that was just touched. */
  activeMerged: number | null;
  min: number;
  max: number;
}

export type MergeStep = Step<MergeData>;

/**
 * Sort by start, then sweep: each interval either extends the last merged range
 * (if it overlaps) or starts a new one. Sorting guarantees we only ever compare
 * against the most recent merged interval. `line` indexes CODE.
 */
export function mergeIntervalsSteps(input: [number, number][]): MergeStep[] {
  const intervals: Interval[] = input
    .map(([start, end]) => ({ start, end }))
    .sort((a, b) => a.start - b.start);
  const steps: MergeStep[] = [];
  const merged: Interval[] = [];
  const min = Math.min(...intervals.map((iv) => iv.start), 0);
  const max = Math.max(...intervals.map((iv) => iv.end), 1);

  const snap = (o: Partial<MergeData>): MergeData => ({
    intervals: intervals.map((iv) => ({ ...iv })),
    merged: merged.map((iv) => ({ ...iv })),
    i: null,
    activeMerged: null,
    min,
    max,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: MergeData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { merged: merged.length } });
  };

  push(1, "Sort intervals by start so overlaps are always adjacent.", snap({}), []);

  for (let i = 0; i < intervals.length; i++) {
    const { start, end } = intervals[i];
    const last = merged[merged.length - 1];
    if (last && start <= last.end) {
      const before = last.end;
      last.end = Math.max(last.end, end);
      push(
        6,
        `[${start}, ${end}] overlaps the last merged range (starts ≤ ${before}) — extend it to [${last.start}, ${last.end}].`,
        snap({ i, activeMerged: merged.length - 1 }),
        [{ ref: i, role: "compared" }],
      );
    } else {
      merged.push({ start, end });
      push(
        8,
        `[${start}, ${end}] doesn't overlap — start a new merged range.`,
        snap({ i, activeMerged: merged.length - 1 }),
        [{ ref: i, role: "current" }],
      );
    }
  }

  push(11, `Done — merged into ${merged.length} non-overlapping interval(s).`, snap({ i: null }), []);
  return steps;
}
