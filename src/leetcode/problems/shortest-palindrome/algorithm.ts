import type { Step } from "@/core/types";

export interface ShortestPalinData {
  s: string;
  combined: string;
  lps: number[];
  /** index i currently being computed in the prefix function */
  cur: number | null;
  /** length of the longest palindromic prefix so far */
  k: number | null;
  answer: string | null;
}

export type ShortestPalinStep = Step<ShortestPalinData>;

/**
 * The longest palindromic prefix of s equals the longest prefix of s that is also a
 * suffix of reverse(s). Building the KMP prefix function of s + '#' + reverse(s)
 * yields that length k in its last entry; prepend the reversed remaining suffix.
 * `line` indexes CODE.
 */
export function shortestPalinSteps(s: string): ShortestPalinStep[] {
  const steps: ShortestPalinStep[] = [];
  const rev = [...s].reverse().join("");
  const combined = s + "#" + rev;
  const lps = new Array(combined.length).fill(0);

  const snap = (o: Partial<ShortestPalinData>): ShortestPalinData => ({ s, combined, lps: [...lps], cur: null, k: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: ShortestPalinData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(4, `Build the KMP prefix function of "${combined}".`, snap({}));

  for (let i = 1; i < combined.length; i++) {
    let j = lps[i - 1];
    while (j && combined[i] !== combined[j]) j = lps[j - 1];
    if (combined[i] === combined[j]) j++;
    lps[i] = j;
    push(9, `lps[${i}] = ${j} (prefix "${combined.slice(0, j)}").`, snap({ cur: i }));
  }

  const k = lps[lps.length - 1];
  const answer = rev.slice(0, s.length - k) + s;
  push(12, `Longest palindromic prefix length ${k}; prepend "${rev.slice(0, s.length - k)}".`, snap({ k, answer }));
  return steps;
}
