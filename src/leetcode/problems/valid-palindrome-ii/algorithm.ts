import type { Step } from "@/core/types";

export interface ValidPalinData {
  s: string;
  l: number | null;
  r: number | null;
  /** phase: main two-pointer scan, or a sub-check after one deletion */
  phase: "scan" | "skipLeft" | "skipRight";
  /** index deleted during a sub-check */
  deleted: number | null;
  mismatch: boolean;
  answer: boolean | null;
}

export type ValidPalinStep = Step<ValidPalinData>;

const isPalin = (s: string, l: number, r: number) => {
  while (l < r) { if (s[l] !== s[r]) return false; l++; r--; }
  return true;
};

/**
 * Two pointers close in from both ends; matching characters confirm the palindrome so far. The first
 * mismatch is the only place a deletion could help, so we test whether skipping the left or the right
 * character leaves a palindrome. `line` indexes CODE.
 */
export function validPalinSteps(s: string): ValidPalinStep[] {
  const steps: ValidPalinStep[] = [];

  const snap = (o: Partial<ValidPalinData>): ValidPalinData => ({ s, l: null, r: null, phase: "scan", deleted: null, mismatch: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ValidPalinData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Two pointers from both ends; at most one character may be deleted.");

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      push(3, `Mismatch '${s[l]}' ≠ '${s[r]}' → try deleting one side.`, { l, r, mismatch: true });
      const skipLeft = isPalin(s, l + 1, r);
      push(4, `Skip left '${s[l]}': [${l + 1}..${r}] is ${skipLeft ? "a palindrome" : "not a palindrome"}.`, { l: l + 1, r, phase: "skipLeft", deleted: l });
      const skipRight = isPalin(s, l, r - 1);
      push(5, `Skip right '${s[r]}': [${l}..${r - 1}] is ${skipRight ? "a palindrome" : "not a palindrome"}.`, { l, r: r - 1, phase: "skipRight", deleted: r });
      const answer = skipLeft || skipRight;
      push(answer ? 4 : 5, answer ? "One deletion makes it a palindrome → true." : "Neither deletion works → false.", { l, r, answer });
      return steps;
    }
    push(6, `'${s[l]}' = '${s[r]}' ✓ → move inward.`, { l, r });
    l++;
    r--;
  }

  push(8, "Already a palindrome (no deletion needed) → true.", { answer: true });
  return steps;
}
