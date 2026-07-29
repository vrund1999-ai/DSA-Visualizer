import type { Step } from "@/core/types";

export interface CommonCharsData {
  words: string[];
  /** running per-letter minimum count (index 0 = 'a') */
  min: number[];
  /** word index being intersected */
  wordIdx: number | null;
  result: string[];
  answer: string[] | null;
}

export type CommonCharsStep = Step<CommonCharsData>;

const count = (w: string) => {
  const c = new Array(26).fill(0);
  for (const ch of w) c[ch.charCodeAt(0) - 97]++;
  return c;
};

/**
 * A character is common to every word as many times as its smallest per-word count. So we start from
 * the first word's letter counts and take the element-wise minimum against each other word; the
 * surviving counts spell the answer. `line` indexes CODE.
 */
export function commonCharsSteps(words: string[]): CommonCharsStep[] {
  const steps: CommonCharsStep[] = [];
  const min = count(words[0]);

  const snap = (o: Partial<CommonCharsData>): CommonCharsData => ({ words, min: [...min], wordIdx: null, result: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CommonCharsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Start from "${words[0]}"'s letter counts; intersect with each other word.`, { wordIdx: 0 });

  for (let w = 1; w < words.length; w++) {
    const c = count(words[w]);
    for (let i = 0; i < 26; i++) min[i] = Math.min(min[i], c[i]);
    push(5, `Intersect with "${words[w]}" → keep the per-letter minimum.`, { wordIdx: w });
  }

  const result: string[] = [];
  for (let i = 0; i < 26; i++) for (let k = 0; k < min[i]; k++) result.push(String.fromCharCode(97 + i));
  push(11, `Common characters: [${result.join(", ")}].`, { result, answer: [...result] });
  return steps;
}
