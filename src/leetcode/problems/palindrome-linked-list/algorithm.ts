import type { Step } from "@/core/types";

export interface PalindromeListData {
  values: number[];
  l: number | null;
  r: number | null;
  result: boolean | null;
}

export type PalindromeListStep = Step<PalindromeListData>;

/**
 * Copy the list values into an array, then two pointers close in from both ends;
 * a palindrome mirrors, so every compared pair must be equal. `line` indexes CODE.
 */
export function palindromeListSteps(values: number[]): PalindromeListStep[] {
  const steps: PalindromeListStep[] = [];
  let result: boolean | null = null;

  const snap = (o: Partial<PalindromeListData>): PalindromeListData => ({ values: [...values], l: null, r: null, result, ...o });
  const push = (line: number, explanation: string, data: PalindromeListData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Copy node values into an array, then check it like a palindrome.", snap({}));

  let l = 0;
  let r = values.length - 1;
  while (l < r) {
    if (values[l] !== values[r]) {
      result = false;
      push(5, `vals[${l}] = ${values[l]} ≠ vals[${r}] = ${values[r]} — not a palindrome.`, snap({ l, r, result: false }));
      return steps;
    }
    push(5, `vals[${l}] = ${values[l]} = vals[${r}] — matches, move inward.`, snap({ l, r }));
    l++;
    r--;
  }

  result = true;
  push(8, "All mirrored values matched — the list is a palindrome.", snap({ result: true }));
  return steps;
}
