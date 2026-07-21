import type { Highlight, Step } from "@/core/types";

export interface PalinNumData {
  digits: string[];
  l: number | null;
  r: number | null;
  negative: boolean;
  result: boolean | null;
}

export type PalinNumStep = Step<PalinNumData>;

/**
 * A number reads the same forwards and backwards iff its digit string is a
 * palindrome — check with two pointers closing in from the ends. Negatives fail
 * because of the leading minus sign. `line` indexes CODE.
 */
export function palinNumSteps(x: number): PalinNumStep[] {
  const steps: PalinNumStep[] = [];
  const negative = x < 0;
  const digits = String(Math.abs(x)).split("");
  let result: boolean | null = null;

  const snap = (o: Partial<PalinNumData>): PalinNumData => ({
    digits: [...digits],
    l: null,
    r: null,
    negative,
    result,
    ...o,
  });
  const push = (line: number, explanation: string, data: PalinNumData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  if (negative) {
    result = false;
    push(1, `${x} is negative — the leading '−' makes it not a palindrome.`, snap({ result: false }), []);
    return steps;
  }

  let l = 0;
  let r = digits.length - 1;
  push(3, "Compare digits from both ends inward.", snap({ l, r }), [
    { ref: l, role: "current" },
    { ref: r, role: "current" },
  ]);

  while (l < r) {
    if (digits[l] !== digits[r]) {
      result = false;
      push(5, `Digit ${digits[l]} ≠ ${digits[r]} — not a palindrome.`, snap({ l, r, result: false }), [
        { ref: l, role: "swapped" },
        { ref: r, role: "swapped" },
      ]);
      return steps;
    }
    push(6, `Digits ${digits[l]} = ${digits[r]} match — move inward.`, snap({ l, r }), [
      { ref: l, role: "sorted" },
      { ref: r, role: "sorted" },
    ]);
    l++;
    r--;
  }

  result = true;
  push(8, "All mirrored digits matched — it's a palindrome.", snap({ l: null, r: null, result: true }), digits.map((_, k) => ({ ref: k, role: "sorted" }) as Highlight));
  return steps;
}
