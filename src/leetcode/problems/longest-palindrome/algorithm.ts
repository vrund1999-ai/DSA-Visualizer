import type { Step } from "@/core/types";

export interface CountEntry {
  char: string;
  n: number;
  usable: number;
  odd: boolean;
}

export interface LongestPalindromeData {
  entries: CountEntry[];
  activeChar: string | null;
  len: number;
  hasOdd: boolean;
  answer: number | null;
}

export type LongestPalindromeStep = Step<LongestPalindromeData>;

/**
 * A palindrome pairs characters symmetrically, so each character contributes its
 * count rounded down to an even number. If any character has an odd count, one
 * leftover can sit in the exact center, adding 1. `line` indexes CODE.
 */
export function longestPalindromeSteps(s: string): LongestPalindromeStep[] {
  const steps: LongestPalindromeStep[] = [];
  const count = new Map<string, number>();
  for (const c of s) count.set(c, (count.get(c) ?? 0) + 1);

  let len = 0;
  let hasOdd = false;
  const chars = [...count.keys()];

  const entries = (): CountEntry[] =>
    chars.map((char) => {
      const n = count.get(char)!;
      return { char, n, usable: n - (n % 2), odd: n % 2 === 1 };
    });

  const snap = (line: number, explanation: string, activeChar: string | null, answer: number | null = null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { entries: entries(), activeChar, len, hasOdd, answer },
      highlights: [],
    });
  };

  snap(2, "Count each character; palindromes use characters in symmetric pairs.", null);

  for (const char of chars) {
    const n = count.get(char)!;
    len += n - (n % 2);
    if (n % 2) hasOdd = true;
    snap(5, `'${char}' × ${n} — contributes ${n - (n % 2)} paired chars${n % 2 ? " (+1 odd leftover)" : ""}. Length ${len}.`, char);
  }

  const answer = len + (hasOdd ? 1 : 0);
  snap(8, hasOdd ? `Add one odd character to the center → longest palindrome length ${answer}.` : `No odd counts — longest palindrome length ${answer}.`, null, answer);
  return steps;
}
