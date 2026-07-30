import type { Step } from "@/core/types";

export interface CloseData {
  word1: string;
  word2: string;
  freq1: { ch: string; count: number }[];
  freq2: { ch: string; count: number }[];
  setEqual: boolean | null;
  freqEqual: boolean | null;
  answer: boolean | null;
}

export type CloseStep = Step<CloseData>;

const countMap = (w: string) => {
  const m = new Map<string, number>();
  for (const c of w) m.set(c, (m.get(c) ?? 0) + 1);
  return m;
};

/**
 * Two strings are "close" iff they use exactly the same set of characters and share the same multiset of
 * frequencies (operation 1 swaps characters; operation 2 permutes their counts). `line` indexes CODE.
 */
export function closeSteps(word1: string, word2: string): CloseStep[] {
  const steps: CloseStep[] = [];
  const f1 = countMap(word1);
  const f2 = countMap(word2);
  const arr = (m: Map<string, number>) =>
    [...m.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([ch, count]) => ({ ch, count }));

  const snap = (o: Partial<CloseData>): CloseData => ({
    word1,
    word2,
    freq1: arr(f1),
    freq2: arr(f2),
    setEqual: null,
    freqEqual: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<CloseData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Tally character frequencies of both words.`);

  const keys1 = [...f1.keys()].sort().join();
  const keys2 = [...f2.keys()].sort().join();
  const setEqual = keys1 === keys2;
  if (!setEqual) {
    push(5, `Character sets differ ({${keys1}} vs {${keys2}}) → not close.`, { setEqual, answer: false });
    return steps;
  }
  push(5, `Both words use the same set of characters.`, { setEqual });

  const v1 = [...f1.values()].sort((a, b) => a - b).join();
  const v2 = [...f2.values()].sort((a, b) => a - b).join();
  const freqEqual = v1 === v2;
  push(9, `Sorted frequency multisets [${v1}] vs [${v2}] → ${freqEqual ? "close" : "not close"}.`, {
    setEqual,
    freqEqual,
    answer: freqEqual,
  });
  return steps;
}
