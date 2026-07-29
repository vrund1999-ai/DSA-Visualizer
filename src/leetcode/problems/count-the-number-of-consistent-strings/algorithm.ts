import type { Step } from "@/core/types";

export interface ConsistentData {
  allowed: string;
  words: string[];
  wordIdx: number | null;
  /** index of the first bad character, or -1 */
  badChar: number | null;
  consistent: boolean | null;
  count: number;
  answer: number | null;
}

export type ConsistentStep = Step<ConsistentData>;

/**
 * A word is consistent when every one of its characters lies in the allowed set. Putting the allowed
 * characters in a set makes each membership test O(1), so we scan each word and fail fast on the first
 * disallowed character. `line` indexes CODE.
 */
export function consistentSteps(allowed: string, words: string[]): ConsistentStep[] {
  const steps: ConsistentStep[] = [];
  const ok = new Set(allowed);
  let count = 0;

  const snap = (o: Partial<ConsistentData>): ConsistentData => ({ allowed, words, wordIdx: null, badChar: null, consistent: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ConsistentData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Allowed = {${allowed.split("").join(", ")}}. A word is consistent if all its chars are allowed.`);

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    let badChar = -1;
    for (let c = 0; c < w.length; c++) if (!ok.has(w[c])) { badChar = c; break; }
    const consistent = badChar === -1;
    if (consistent) count++;
    push(consistent ? 7 : 6, consistent ? `"${w}" — all allowed → consistent (count ${count}).` : `"${w}" — '${w[badChar]}' not allowed → skip.`, { wordIdx: i, badChar, consistent });
  }

  push(9, `Consistent strings: ${count}.`, { answer: count });
  return steps;
}
