import type { Step } from "@/core/types";

export interface TruncateData {
  s: string;
  k: number;
  pos: number | null;
  /** number of complete words seen (spaces counted) */
  count: number;
  /** cut index, if reached */
  cut: number | null;
  answer: string | null;
}

export type TruncateStep = Step<TruncateData>;

/**
 * Scan the sentence counting spaces (each marks the end of a word). When the count
 * reaches k, everything before that space is the first k words. `line` indexes CODE.
 */
export function truncateSteps(s: string, k: number): TruncateStep[] {
  const steps: TruncateStep[] = [];
  let count = 0;

  const snap = (pos: number, o: Partial<TruncateData>): TruncateData => ({ s, k, pos, count, cut: null, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<TruncateData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, `Keep the first ${k} word(s).`, -1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      count++;
      push(3, `Space at ${i} — ${count} word(s) complete.`, i);
      if (count === k) {
        push(4, `Reached ${k} words — cut before index ${i}.`, i, { cut: i, answer: s.slice(0, i) });
        return steps;
      }
    }
  }

  push(6, `Sentence has fewer than ${k} words — keep all of it.`, -1, { answer: s });
  return steps;
}
