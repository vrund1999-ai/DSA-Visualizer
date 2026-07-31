import type { Step } from "@/core/types";

export interface VowelSubstrData {
  word: string;
  /** current substring [i, j] */
  i: number | null;
  j: number | null;
  /** distinct vowels currently seen in [i, j] */
  seen: string[];
  count: number;
  answer: number | null;
}

export type VowelSubstrStep = Step<VowelSubstrData>;

const MAX_STEPS = 400;
const isV = (c: string) => "aeiou".includes(c);

/**
 * Count Vowel Substrings: a valid substring consists only of vowels and contains all five (a, e, i, o, u).
 * For each start, extend while the characters stay vowels, tracking the distinct set; count whenever all
 * five are present. `line` indexes CODE.
 */
export function vowelSubstrSteps(word: string): VowelSubstrStep[] {
  const steps: VowelSubstrStep[] = [];
  let count = 0;

  const snap = (o: Partial<VowelSubstrData>): VowelSubstrData => ({
    word,
    i: null,
    j: null,
    seen: [],
    count,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<VowelSubstrData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Count vowel-only substrings containing all of a, e, i, o, u.`);

  for (let i = 0; i < word.length; i++) {
    const seen = new Set<string>();
    for (let j = i; j < word.length; j++) {
      if (!isV(word[j])) break;
      seen.add(word[j]);
      if (seen.size === 5) {
        count++;
        push(8, `"${word.slice(i, j + 1)}" has all 5 vowels → count ${count}.`, { i, j, seen: [...seen] });
      }
    }
  }

  push(11, `Vowel substrings = ${count}.`, { answer: count });
  return steps;
}
