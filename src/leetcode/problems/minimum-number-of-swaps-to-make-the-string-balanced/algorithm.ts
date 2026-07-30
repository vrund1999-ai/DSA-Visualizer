import type { Step } from "@/core/types";

export interface SwapBalanceData {
  s: string;
  i: number | null;
  balance: number;
  unmatched: number;
  answer: number | null;
}

export type SwapBalanceStep = Step<SwapBalanceData>;

/**
 * Scanning left to right, each ']' either closes an open '[' or is stray (no open bracket available). One
 * swap fixes two stray closers by moving an over-supplied '[' into place, so the answer is ⌈unmatched/2⌉.
 * `line` indexes CODE.
 */
export function swapBalanceSteps(s: string): SwapBalanceStep[] {
  const steps: SwapBalanceStep[] = [];
  let balance = 0;
  let unmatched = 0;

  const snap = (o: Partial<SwapBalanceData>): SwapBalanceData => ({ s, i: null, balance, unmatched, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SwapBalanceData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Track open brackets; count closing brackets that can't be matched.");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      balance++;
      push(5, `'[' at ${i}: balance ${balance}.`, { i });
    } else if (balance > 0) {
      balance--;
      push(7, `']' at ${i}: matches an open '[', balance ${balance}.`, { i });
    } else {
      unmatched++;
      push(9, `']' at ${i}: stray (no open bracket), unmatched ${unmatched}.`, { i });
    }
  }

  const answer = Math.ceil(unmatched / 2);
  push(12, `${unmatched} stray ']' → ⌈${unmatched}/2⌉ = ${answer} swap(s).`, { answer });
  return steps;
}
