import type { Step } from "@/core/types";

export interface NiceSubstrData {
  s: string;
  segment: [number, number] | null;
  splitIndex: number | null;
  best: string;
  bestWindow: [number, number] | null;
  answer: string | null;
}

export type NiceSubstrStep = Step<NiceSubstrData>;

const MAX_STEPS = 400;

/**
 * Longest Nice Substring: a substring is "nice" if every letter appears in both cases. A character missing
 * its counterpart can't belong to any nice substring, so it splits the range — recurse on the pieces and
 * take the longer (leftmost on ties). `line` indexes CODE.
 */
export function niceSubstrSteps(s: string): NiceSubstrStep[] {
  const steps: NiceSubstrStep[] = [];
  let best = "";
  let bestWindow: [number, number] | null = null;

  const snap = (o: Partial<NiceSubstrData>): NiceSubstrData => ({
    s,
    segment: null,
    splitIndex: null,
    best,
    bestWindow,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<NiceSubstrData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const solve = (lo: number, hi: number): string => {
    if (hi - lo < 2) return "";
    const seg = s.slice(lo, hi);
    const set = new Set(seg);
    for (let i = lo; i < hi; i++) {
      const c = s[i];
      if (set.has(c.toUpperCase()) && set.has(c.toLowerCase())) continue;
      push(8, `In "${seg}", '${c}' lacks its counterpart → split here.`, { segment: [lo, hi], splitIndex: i });
      const left = solve(lo, i);
      const right = solve(i + 1, hi);
      return right.length > left.length ? right : left;
    }
    if (seg.length > best.length) {
      best = seg;
      bestWindow = [lo, hi];
    }
    push(13, `"${seg}" — every letter has both cases → nice (length ${seg.length}).`, { segment: [lo, hi] });
    return seg;
  };

  push(1, `Split on any character missing its opposite case.`);
  const answer = solve(0, s.length);
  push(0, answer ? `Longest nice substring = "${answer}".` : `No nice substring → "".`, { answer });
  return steps;
}
