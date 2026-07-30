import type { Step } from "@/core/types";

export interface KPalinData {
  s: string;
  k: number;
  freq: { ch: string; count: number; odd: boolean }[];
  oddCount: number | null;
  answer: boolean | null;
}

export type KPalinStep = Step<KPalinData>;

/**
 * You can build exactly k palindromes from all of s iff there are enough characters (k ≤ |s|) and the number
 * of characters with odd frequency is ≤ k — each odd-count character needs to sit at some palindrome's
 * center. `line` indexes CODE.
 */
export function kPalinSteps(s: string, k: number): KPalinStep[] {
  const steps: KPalinStep[] = [];
  const freq = new Map<string, number>();

  const freqArr = () =>
    [...freq.entries()].map(([ch, count]) => ({ ch, count, odd: count % 2 === 1 }));
  const snap = (o: Partial<KPalinData>): KPalinData => ({
    s,
    k,
    freq: freqArr(),
    oddCount: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<KPalinData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (s.length < k) {
    push(1, `|s| = ${s.length} < k = ${k}: not enough characters → false.`, { answer: false });
    return steps;
  }

  for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
  push(3, `Tallied character frequencies of "${s}".`);

  const oddCount = [...freq.values()].filter((v) => v % 2 === 1).length;
  const answer = oddCount <= k;
  push(7, `${oddCount} character(s) have odd counts; ${oddCount} ${answer ? "≤" : ">"} ${k} → ${answer}.`, {
    oddCount,
    answer,
  });
  return steps;
}
