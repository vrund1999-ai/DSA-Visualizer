import type { Step } from "@/core/types";

export interface MaxVowelsData {
  s: string;
  k: number;
  /** window [start, start + k - 1] */
  start: number;
  cur: number;
  best: number;
  answer: number | null;
}

export type MaxVowelsStep = Step<MaxVowelsData>;

const isV = (c: string) => "aeiou".includes(c);

/**
 * A fixed-size window of length k slides across the string; as it moves one step, the entering right
 * character adds to the vowel count and the exiting left one subtracts. Tracking the running count
 * avoids re-scanning each window. `line` indexes CODE.
 */
export function maxVowelsSteps(s: string, k: number): MaxVowelsStep[] {
  const steps: MaxVowelsStep[] = [];
  let cur = 0;
  for (let i = 0; i < k; i++) if (isV(s[i])) cur++;
  let best = cur;

  const snap = (o: Partial<MaxVowelsData>): MaxVowelsData => ({ s, k, start: 0, cur, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxVowelsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(5, `First window [0..${k - 1}] has ${cur} vowel(s).`, { start: 0 });

  for (let i = k; i < s.length; i++) {
    if (isV(s[i])) cur++;
    if (isV(s[i - k])) cur--;
    best = Math.max(best, cur);
    push(9, `Slide to [${i - k + 1}..${i}]: ${cur} vowel(s) (best ${best}).`, { start: i - k + 1 });
  }

  push(11, `Maximum vowels in any length-${k} window: ${best}.`, { answer: best });
  return steps;
}
