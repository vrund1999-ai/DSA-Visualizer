import type { Step } from "@/core/types";

export interface ConcatWordsData {
  s: string;
  words: string[];
  wordLen: number;
  total: number;
  /** window start being tested */
  start: number | null;
  /** number of words matched so far at this start */
  matchedWords: number;
  valid: boolean;
  results: number[];
}

export type ConcatWordsStep = Step<ConcatWordsData>;

/**
 * Every word has the same length, so a valid window is exactly total = w·|words|
 * characters split into consecutive word-length chunks whose multiset equals `words`.
 * Slide the window one character at a time and check each. `line` indexes CODE.
 */
export function concatWordsSteps(s: string, words: string[]): ConcatWordsStep[] {
  const steps: ConcatWordsStep[] = [];
  const w = words[0].length;
  const total = w * words.length;
  const need = new Map<string, number>();
  for (const word of words) need.set(word, (need.get(word) ?? 0) + 1);
  const results: number[] = [];

  const snap = (o: Partial<ConcatWordsData>): ConcatWordsData => ({ s, words: [...words], wordLen: w, total, start: null, matchedWords: 0, valid: false, results: [...results], ...o });
  const push = (line: number, explanation: string, data: ConcatWordsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Find windows of ${total} chars = ${words.length} words of length ${w}.`, snap({}));

  for (let i = 0; i + total <= s.length; i++) {
    const seen = new Map<string, number>();
    let j = 0;
    for (; j < words.length; j++) {
      const word = s.substr(i + j * w, w);
      if (!need.has(word)) break;
      seen.set(word, (seen.get(word) ?? 0) + 1);
      if (seen.get(word)! > need.get(word)!) break;
    }
    const valid = j === words.length;
    if (valid) results.push(i);
    push(valid ? 13 : 9, `Window at ${i}: matched ${j}/${words.length} word(s)${valid ? " — valid!" : ""}.`, snap({ start: i, matchedWords: j, valid }));
  }

  push(15, `Starting indices: [${results.join(", ")}].`, snap({}));
  return steps;
}
