import type { Step } from "@/core/types";

export interface TwoLetterPalinData {
  counts: { word: string; count: number }[];
  /** word being processed */
  active: string | null;
  length: number;
  center: boolean;
  answer: number | null;
}

export type TwoLetterPalinStep = Step<TwoLetterPalinData>;

/**
 * Build the longest palindrome from 2-letter words. A word "xy" (x≠y) pairs with its reverse "yx", adding 4
 * to the length per matched pair; a word "xx" pairs with itself (⌊c/2⌋ pairs × 4) and, if any is left over,
 * one can sit in the palindrome's center (+2, once). `line` indexes CODE.
 */
export function twoLetterPalinSteps(words: string[]): TwoLetterPalinStep[] {
  const steps: TwoLetterPalinStep[] = [];
  const count = new Map<string, number>();
  for (const w of words) count.set(w, (count.get(w) ?? 0) + 1);

  const countsArr = () => [...count.entries()].map(([word, c]) => ({ word, count: c }));
  let length = 0;
  let center = false;

  const snap = (o: Partial<TwoLetterPalinData>): TwoLetterPalinData => ({
    counts: countsArr(),
    active: null,
    length,
    center,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<TwoLetterPalinData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `Count each 2-letter word, then pair words with their reverses.`);

  for (const [w, c] of count) {
    const rev = w[1] + w[0];
    if (w[0] === w[1]) {
      const add = Math.floor(c / 2) * 4;
      length += add;
      if (c % 2) center = true;
      push(9, `"${w}" (same letters): ${Math.floor(c / 2)} self-pair(s) → +${add}${c % 2 ? "; one reserved for center" : ""}.`, { active: w });
    } else if (w[0] < w[1]) {
      const pairs = Math.min(c, count.get(rev) ?? 0);
      length += pairs * 4;
      push(11, `"${w}" ⇄ "${rev}": ${pairs} pair(s) → +${pairs * 4}.`, { active: w });
    }
  }

  const answer = length + (center ? 2 : 0);
  push(14, `Longest palindrome length = ${answer}${center ? " (includes a center word)" : ""}.`, { answer });
  return steps;
}
