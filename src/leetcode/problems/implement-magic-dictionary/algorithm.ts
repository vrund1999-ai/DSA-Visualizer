import type { Step } from "@/core/types";

export interface MagicData {
  words: string[];
  search: string;
  /** dictionary word currently compared */
  wordIdx: number | null;
  /** per-position mismatch flags against the search word */
  diffMask: boolean[];
  diff: number | null;
  matched: boolean;
  answer: boolean | null;
}

export type MagicStep = Step<MagicData>;

/**
 * A word matches the magic search when it can be turned into a dictionary word by changing
 * exactly one character. So for each same-length dictionary word we count position mismatches and
 * accept the moment a count of exactly one appears. `line` indexes CODE.
 */
export function magicSteps(words: string[], search: string): MagicStep[] {
  const steps: MagicStep[] = [];

  const snap = (o: Partial<MagicData>): MagicData => ({ words, search, wordIdx: null, diffMask: [], diff: null, matched: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MagicData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `search("${search}"): look for a word one character away.`);

  for (let wi = 0; wi < words.length; wi++) {
    const w = words[wi];
    if (w.length !== search.length) {
      push(4, `"${w}" has a different length → skip.`, { wordIdx: wi });
      continue;
    }
    const diffMask = [...w].map((c, i) => c !== search[i]);
    const diff = diffMask.filter(Boolean).length;
    if (diff === 1) {
      push(8, `"${w}" differs in exactly 1 position → match, return true.`, { wordIdx: wi, diffMask, diff, matched: true, answer: true });
      return steps;
    }
    push(7, `"${w}" differs in ${diff} position(s) → not a one-change match.`, { wordIdx: wi, diffMask, diff });
  }

  push(10, `No word is exactly one change away → false.`, { answer: false });
  return steps;
}
