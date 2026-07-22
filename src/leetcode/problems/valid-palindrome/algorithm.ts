import type { Highlight, Step } from "@/core/types";

export interface ValidPalindromeData {
  clean: string[];
  l: number | null;
  r: number | null;
  result: boolean | null;
}

export type ValidPalindromeStep = Step<ValidPalindromeData>;

/**
 * Normalize to lowercase alphanumerics, then two pointers close in from both
 * ends; a palindrome mirrors, so every matched pair must be equal. `line`
 * indexes CODE.
 */
export function validPalindromeSteps(s: string): ValidPalindromeStep[] {
  const clean = [...s.toLowerCase()].filter((c) => /[a-z0-9]/.test(c));
  const steps: ValidPalindromeStep[] = [];
  let result: boolean | null = null;

  const snap = (o: Partial<ValidPalindromeData>): ValidPalindromeData => ({
    clean: [...clean],
    l: null,
    r: null,
    result,
    ...o,
  });
  const push = (line: number, explanation: string, data: ValidPalindromeData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(2, `Keep only alphanumerics, lowercased: "${clean.join("")}".`, snap({}), []);

  let l = 0;
  let r = clean.length - 1;
  while (l < r) {
    if (clean[l] !== clean[r]) {
      result = false;
      push(5, `'${clean[l]}' ≠ '${clean[r]}' — not a palindrome.`, snap({ l, r, result: false }), [
        { ref: l, role: "swapped" },
        { ref: r, role: "swapped" },
      ]);
      return steps;
    }
    push(5, `'${clean[l]}' = '${clean[r]}' — matches, move inward.`, snap({ l, r }), [
      { ref: l, role: "sorted" },
      { ref: r, role: "sorted" },
    ]);
    l++;
    r--;
  }

  result = true;
  push(8, "All mirrored characters matched — it's a valid palindrome.", snap({ result: true }), clean.map((_, k) => ({ ref: k, role: "sorted" }) as Highlight));
  return steps;
}
