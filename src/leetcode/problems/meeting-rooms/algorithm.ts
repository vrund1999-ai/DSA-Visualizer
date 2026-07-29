import type { Step } from "@/core/types";

export interface MeetingData {
  intervals: number[][];
  /** the pair being compared: [prevIndex, curIndex] */
  compare: [number, number] | null;
  conflict: [number, number] | null;
  answer: boolean | null;
}

export type MeetingStep = Step<MeetingData>;

/**
 * After sorting by start time, meetings conflict only if an interval begins before its predecessor
 * ends. One left-to-right pass over adjacent pairs decides it. `line` indexes CODE.
 */
export function meetingSteps(input: number[][]): MeetingStep[] {
  const steps: MeetingStep[] = [];
  const intervals = input.map((x) => [...x]).sort((a, b) => a[0] - b[0]);

  const snap = (o: Partial<MeetingData>): MeetingData => ({ intervals, compare: null, conflict: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MeetingData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort meetings by start time: ${intervals.map((x) => `[${x}]`).join(", ")}.`);

  for (let i = 1; i < intervals.length; i++) {
    const prevEnd = intervals[i - 1][1];
    const curStart = intervals[i][0];
    push(4, `Compare end ${prevEnd} of [${intervals[i - 1]}] with start ${curStart} of [${intervals[i]}].`, { compare: [i - 1, i] });
    if (curStart < prevEnd) {
      push(6, `${curStart} < ${prevEnd}: meetings overlap → cannot attend all.`, { compare: [i - 1, i], conflict: [i - 1, i], answer: false });
      return steps;
    }
  }

  push(8, "No overlaps — all meetings can be attended.", { answer: true });
  return steps;
}
