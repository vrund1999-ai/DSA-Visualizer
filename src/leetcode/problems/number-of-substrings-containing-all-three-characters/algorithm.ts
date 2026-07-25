import type { Step } from "@/core/types";

export interface ThreeCharsData {
  s: string;
  pos: number | null;
  last: { a: number; b: number; c: number };
  /** number of valid substrings ending at pos */
  added: number;
  count: number;
  answer: number | null;
}

export type ThreeCharsStep = Step<ThreeCharsData>;

/**
 * For each right endpoint i, any start index up to min(last a, b, c) yields a substring
 * that still contains all three letters. Summing (that min + 1) over all i counts every
 * qualifying substring in O(n). `line` indexes CODE.
 */
export function threeCharsSteps(s: string): ThreeCharsStep[] {
  const steps: ThreeCharsStep[] = [];
  const last = { a: -1, b: -1, c: -1 };
  let count = 0;

  const snap = (pos: number, o: Partial<ThreeCharsData>): ThreeCharsData => ({ s, pos, last: { ...last }, added: 0, count, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<ThreeCharsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(2, "Track the last index of a, b, c; count substrings ending at each i.", -1);

  for (let i = 0; i < s.length; i++) {
    last[s[i] as "a" | "b" | "c"] = i;
    const m = Math.min(last.a, last.b, last.c);
    const added = m + 1;
    count += added;
    push(6, `i=${i} ('${s[i]}'): min last = ${m} → +${added} substring(s).`, i, { added });
  }

  push(8, `Total substrings with all three: ${count}.`, -1, { answer: count });
  return steps;
}
