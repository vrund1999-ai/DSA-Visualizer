import type { Step } from "@/core/types";

export interface EqualFreqData {
  /** distinct letters in fixed order */
  letters: string[];
  /** current counts aligned to `letters` (reflects the trial removal) */
  counts: number[];
  /** letter index currently being trial-removed */
  trying: number | null;
  /** distinct non-zero counts after the trial removal */
  distinct: number[];
  success: boolean | null;
  answer: boolean | null;
}

export type EqualFreqStep = Step<EqualFreqData>;

/**
 * We can equalize by deleting exactly one character, so we try removing one occurrence of each
 * distinct letter and check whether the remaining non-zero counts are all equal (a set of size
 * ≤ 1). If any single removal works the answer is true. `line` indexes CODE.
 */
export function equalFreqSteps(word: string): EqualFreqStep[] {
  const steps: EqualFreqStep[] = [];
  const letters = [...new Set(word.split(""))];
  const base = letters.map((l) => word.split("").filter((c) => c === l).length);

  const snap = (counts: number[], o: Partial<EqualFreqData>): EqualFreqData => ({ letters, counts: [...counts], trying: null, distinct: [], success: null, answer: null, ...o });
  const push = (line: number, explanation: string, counts: number[], o: Partial<EqualFreqData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(counts, o), highlights: [] });
  };

  push(1, "Try removing one occurrence of each distinct letter; check the rest are equal.", base);

  for (let i = 0; i < letters.length; i++) {
    const counts = [...base];
    counts[i]--;
    const distinct = [...new Set(counts.filter((v) => v > 0))];
    const success = distinct.length <= 1;
    push(5, `Remove one '${letters[i]}' → non-zero counts {${distinct.join(", ") || "∅"}}; ${success ? "all equal" : "not equal"}.`, counts, { trying: i, distinct, success });
    if (success) {
      push(6, `Removing '${letters[i]}' equalizes all frequencies → true.`, counts, { trying: i, distinct, success: true, answer: true });
      return steps;
    }
  }

  push(9, "No single removal equalizes the frequencies → false.", base, { answer: false });
  return steps;
}
