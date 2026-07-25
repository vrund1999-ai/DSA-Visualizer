import type { Step } from "@/core/types";

export interface PalinSubData {
  s: string;
  /** current expansion window [l, r] */
  l: number | null;
  r: number | null;
  /** whether this window is a palindrome (matched) */
  matched: boolean;
  count: number;
  answer: number | null;
}

export type PalinSubStep = Step<PalinSubData>;

/**
 * Every palindrome has a center — a single character (odd length) or a gap between two
 * (even length). Expanding outward from each of the 2n−1 centers while the ends match
 * counts each palindromic substring exactly once. `line` indexes CODE.
 */
export function palinSubSteps(s: string): PalinSubStep[] {
  const steps: PalinSubStep[] = [];
  let count = 0;

  const snap = (o: Partial<PalinSubData>): PalinSubData => ({ s, l: null, r: null, matched: false, count, answer: null, ...o });
  const push = (line: number, explanation: string, data: PalinSubData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Expand around every center; count palindromic windows.", snap({}));

  const expand = (l: number, r: number, kind: string) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++;
      push(4, `${kind}: "${s.slice(l, r + 1)}" is a palindrome (count ${count}).`, snap({ l, r, matched: true }));
      l--;
      r++;
    }
    if (l >= 0 && r < s.length) {
      push(3, `${kind}: '${s[l]}' ≠ '${s[r]}' — stop expanding.`, snap({ l, r, matched: false }));
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i, "odd center");
    expand(i, i + 1, "even center");
  }

  push(12, `Total palindromic substrings: ${count}.`, snap({ answer: count }));
  return steps;
}
