import type { Step } from "@/core/types";

export interface StrChainData {
  words: string[];
  /** word -> chain length, in processing order */
  dp: [string, number][];
  /** word currently processed */
  cur: number | null;
  /** predecessor found that extended the chain */
  predecessor: string | null;
  len: number | null;
  best: number;
  answer: number | null;
}

export type StrChainStep = Step<StrChainData>;

/**
 * A word extends a chain from any predecessor formed by deleting one of its letters. Processing words
 * shortest-first guarantees predecessors are already solved, so dp[w] = 1 + best predecessor length.
 * `line` indexes CODE.
 */
export function strChainSteps(input: string[]): StrChainStep[] {
  const steps: StrChainStep[] = [];
  const words = [...input].sort((a, b) => a.length - b.length);
  const dp = new Map<string, number>();
  let best = 1;

  const snap = (o: Partial<StrChainData>): StrChainData => ({ words, dp: [...dp.entries()], cur: null, predecessor: null, len: null, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<StrChainData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort by length, then each word extends the best predecessor missing one letter.`);

  for (let idx = 0; idx < words.length; idx++) {
    const w = words[idx];
    let len = 1;
    let predecessor: string | null = null;
    for (let i = 0; i < w.length; i++) {
      const prev = w.slice(0, i) + w.slice(i + 1);
      if (dp.has(prev) && dp.get(prev)! + 1 > len) { len = dp.get(prev)! + 1; predecessor = prev; }
    }
    dp.set(w, len);
    best = Math.max(best, len);
    push(11, predecessor ? `"${w}" extends "${predecessor}" → chain length ${len} (best ${best}).` : `"${w}" starts a chain (length 1).`, { cur: idx, predecessor, len });
  }

  push(14, `Longest string chain: ${best}.`, { answer: best });
  return steps;
}
