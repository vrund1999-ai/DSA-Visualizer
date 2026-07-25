import type { Step } from "@/core/types";

export interface ValidParenData {
  s: string;
  pos: number | null;
  /** possible range of unmatched '(' counts */
  lo: number;
  hi: number;
  answer: boolean | null;
}

export type ValidParenStep = Step<ValidParenData>;

/**
 * Track a range [lo, hi] of how many '(' could currently be open. '(' raises both,
 * ')' lowers both, '*' widens the range (it could be '(', ')', or empty). If hi ever
 * goes negative there are too many ')'; the string is valid iff lo can reach 0. `line`
 * indexes CODE.
 */
export function validParenSteps(s: string): ValidParenStep[] {
  const steps: ValidParenStep[] = [];
  let lo = 0;
  let hi = 0;

  const snap = (pos: number, o: Partial<ValidParenData>): ValidParenData => ({ s, pos, lo, hi, answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<ValidParenData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, -1, "Track the range [lo, hi] of possible open-paren counts.");

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(") {
      lo++;
      hi++;
    } else if (c === ")") {
      lo--;
      hi--;
    } else {
      lo--;
      hi++;
    }
    push(c === "(" ? 3 : c === ")" ? 4 : 5, i, `'${c}' → range becomes [${Math.max(lo, 0)}, ${hi}].`);
    if (hi < 0) {
      push(6, i, `hi < 0 — an unmatched ')' → false.`, { answer: false });
      return steps;
    }
    if (lo < 0) lo = 0;
  }

  push(9, -1, `lo ${lo === 0 ? "reaches" : "cannot reach"} 0 → ${lo === 0}.`, { answer: lo === 0 });
  return steps;
}
