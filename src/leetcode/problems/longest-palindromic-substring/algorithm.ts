import type { Highlight, Step } from "@/core/types";

export interface PalindromeData {
  chars: string[];
  l: number | null;
  r: number | null;
  bestStart: number;
  bestEnd: number;
}

export type PalindromeStep = Step<PalindromeData>;

/**
 * Expand around center: a palindrome mirrors around its middle, so from each of
 * the 2n−1 possible centers we widen outward while the characters match. The
 * widest span wins. `line` indexes CODE.
 */
export function palindromeSteps(s: string): PalindromeStep[] {
  const chars = [...s];
  const steps: PalindromeStep[] = [];
  let bestStart = 0;
  let bestEnd = 0;

  const best = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = bestStart; k <= bestEnd && chars.length > 0; k++) hl.push({ ref: k, role: "target" });
    return hl;
  };
  const snap = (o: Partial<PalindromeData>): PalindromeData => ({
    chars: [...chars],
    l: null,
    r: null,
    bestStart,
    bestEnd,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: PalindromeData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { bestLen: bestEnd - bestStart + 1 } });
  };

  const expand = (l0: number, r0: number, kind: string) => {
    let l = l0;
    let r = r0;
    while (l >= 0 && r < chars.length && chars[l] === chars[r]) {
      const window: Highlight[] = [];
      for (let k = l; k <= r; k++) window.push({ ref: k, role: "active" });
      push(7, `${kind} center: s[${l}]='${chars[l]}' = s[${r}]='${chars[r]}' — expand.`, snap({ l, r }), [...best(), ...window]);
      l--;
      r++;
    }
    // [l+1, r-1] is the palindrome; l..r broke the match.
    const start = l + 1;
    const end = r - 1;
    if (end - start > bestEnd - bestStart) {
      bestStart = start;
      bestEnd = end;
      push(11, `New longest palindrome "${chars.slice(start, end + 1).join("")}" [${start}..${end}].`, snap({ l, r }), best());
    }
  };

  if (chars.length === 0) {
    push(14, "Empty string — empty palindrome.", snap({}), []);
    return steps;
  }

  push(1, "From every center, expand outward while the two sides mirror.", snap({}), best());
  for (let i = 0; i < chars.length; i++) {
    expand(i, i, "Odd");
    expand(i, i + 1, "Even");
  }

  push(14, `Longest palindromic substring is "${chars.slice(bestStart, bestEnd + 1).join("")}".`, snap({}), best());
  return steps;
}
