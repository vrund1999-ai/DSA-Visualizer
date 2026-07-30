import type { Step } from "@/core/types";

export interface LetterCaseData {
  s: string;
  /** current partial string being built */
  cur: string;
  /** index being decided */
  i: number | null;
  results: string[];
  justAdded: string | null;
  answer: string[] | null;
}

export type LetterCaseStep = Step<LetterCaseData>;

/**
 * Each letter independently contributes two branches — lowercase or uppercase — while digits pass through
 * unchanged. A depth-first walk over these per-character choices enumerates every combination, recording
 * one at each leaf. `line` indexes CODE.
 */
export function letterCaseSteps(s: string): LetterCaseStep[] {
  const steps: LetterCaseStep[] = [];
  const results: string[] = [];

  const snap = (o: Partial<LetterCaseData>): LetterCaseData => ({ s, cur: "", i: null, results: [...results], justAdded: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LetterCaseData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  function bt(i: number, cur: string) {
    if (i === s.length) {
      results.push(cur);
      push(4, `Reached the end → record "${cur}".`, { cur, i, justAdded: cur });
      return;
    }
    const ch = s[i];
    if (/[a-zA-Z]/.test(ch)) {
      push(8, `'${ch}' is a letter — branch into lowercase and uppercase.`, { cur, i });
      bt(i + 1, cur + ch.toLowerCase());
      bt(i + 1, cur + ch.toUpperCase());
    } else {
      push(12, `'${ch}' is a digit — carry it unchanged.`, { cur, i });
      bt(i + 1, cur + ch);
    }
  }

  push(15, `Enumerate all case variations of "${s}".`);
  bt(0, "");
  push(16, `${results.length} permutation(s) generated.`, { answer: [...results] });
  return steps;
}
