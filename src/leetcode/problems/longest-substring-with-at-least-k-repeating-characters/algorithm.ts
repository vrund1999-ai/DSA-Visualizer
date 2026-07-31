import type { Step } from "@/core/types";

export interface LongestSubstrData {
  s: string;
  k: number;
  /** the segment [lo, hi) currently examined */
  segment: [number, number] | null;
  /** the rare character being split on */
  splitChar: string | null;
  best: number;
  bestWindow: [number, number] | null;
  answer: number | null;
}

export type LongestSubstrStep = Step<LongestSubstrData>;

const MAX_STEPS = 400;

/**
 * Longest Substring with At Least K Repeating Characters: any character occurring fewer than k times can
 * never be inside the answer, so it splits the string. Recurse on the pieces between such characters; a
 * segment where every character already appears ≥ k times is a candidate. `line` indexes CODE.
 */
export function longestSubstrSteps(s: string, k: number): LongestSubstrStep[] {
  const steps: LongestSubstrStep[] = [];
  let best = 0;
  let bestWindow: [number, number] | null = null;

  const snap = (o: Partial<LongestSubstrData>): LongestSubstrData => ({
    s,
    k,
    segment: null,
    splitChar: null,
    best,
    bestWindow,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<LongestSubstrData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const solve = (lo: number, hi: number): number => {
    if (hi - lo < k) return 0;
    const freq: Record<string, number> = {};
    for (let i = lo; i < hi; i++) freq[s[i]] = (freq[s[i]] ?? 0) + 1;
    for (let m = lo; m < hi; m++) {
      if (freq[s[m]] < k) {
        push(7, `In "${s.slice(lo, hi)}", '${s[m]}' appears < ${k} times → split.`, { segment: [lo, hi], splitChar: s[m] });
        let sub = 0;
        let start = lo;
        for (let i = lo; i < hi; i++) {
          if (freq[s[i]] < k) {
            sub = Math.max(sub, solve(start, i));
            start = i + 1;
          }
        }
        return Math.max(sub, solve(start, hi));
      }
    }
    if (hi - lo > best) {
      best = hi - lo;
      bestWindow = [lo, hi];
    }
    push(17, `"${s.slice(lo, hi)}" — every char appears ≥ ${k} times → length ${hi - lo}.`, { segment: [lo, hi] });
    return hi - lo;
  };

  push(1, `Split on characters that appear fewer than ${k} times.`);
  const answer = solve(0, s.length);
  push(19, `Longest valid substring length = ${answer}.`, { answer });
  return steps;
}
