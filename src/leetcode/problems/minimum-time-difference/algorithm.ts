import type { Step } from "@/core/types";

export interface TimeDiffData {
  times: string[];
  /** sorted minutes-of-day */
  mins: number[];
  /** pair of sorted indices being compared */
  pair: [number, number] | null;
  /** diff for the current pair */
  diff: number | null;
  best: number;
  /** the closest pair once found */
  bestPair: [number, number] | null;
  answer: number | null;
}

export type TimeDiffStep = Step<TimeDiffData>;

const fmt = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

/**
 * Times live on a 24-hour circle, so after sorting the minute values the closest pair is either two
 * neighbors or the wrap-around from the last back to the first across midnight. `line` indexes CODE.
 */
export function timeDiffSteps(times: string[]): TimeDiffStep[] {
  const steps: TimeDiffStep[] = [];
  const mins = times.map((t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  });
  mins.sort((a, b) => a - b);
  let best = Infinity;
  let bestPair: [number, number] | null = null;

  const snap = (o: Partial<TimeDiffData>): TimeDiffData => ({ times, mins, pair: null, diff: null, best, bestPair, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TimeDiffData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(5, `Sort times: ${mins.map(fmt).join(", ")}.`);

  for (let i = 1; i < mins.length; i++) {
    const diff = mins[i] - mins[i - 1];
    if (diff < best) {
      best = diff;
      bestPair = [i - 1, i];
    }
    push(8, `${fmt(mins[i - 1])} → ${fmt(mins[i])}: ${diff} min (best ${best}).`, { pair: [i - 1, i], diff });
  }

  const wrap = 1440 - mins[mins.length - 1] + mins[0];
  if (wrap < best) {
    best = wrap;
    bestPair = [mins.length - 1, 0];
  }
  push(11, `Wrap-around ${fmt(mins[mins.length - 1])} → ${fmt(mins[0])}: ${wrap} min (best ${best}).`, { pair: [mins.length - 1, 0], diff: wrap });

  push(12, `Minimum time difference: ${best} minute(s).`, { answer: best });
  return steps;
}
