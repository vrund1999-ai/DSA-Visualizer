import type { Step } from "@/core/types";

export interface PowerOfThreeData {
  n: number;
  /** the chain of values as we divide by 3 */
  chain: number[];
  current: number;
  /** true when the current value is not divisible by 3 */
  stuck: boolean;
  answer: boolean | null;
}

export type PowerOfThreeStep = Step<PowerOfThreeData>;

/**
 * Repeatedly divide by 3 while divisible. If the leftover is exactly 1, the original
 * number was a pure power of three. `line` indexes CODE.
 */
export function powerOfThreeSteps(n: number): PowerOfThreeStep[] {
  const steps: PowerOfThreeStep[] = [];
  const chain: number[] = [n];

  const snap = (o: Partial<PowerOfThreeData>): PowerOfThreeData => ({ n, chain: [...chain], current: chain[chain.length - 1], stuck: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: PowerOfThreeData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (n < 1) {
    push(1, `${n} < 1 — not a power of three.`, snap({ answer: false }));
    return steps;
  }

  push(2, `Strip factors of 3 from ${n}.`, snap({}));

  let cur = n;
  while (cur % 3 === 0) {
    cur /= 3;
    chain.push(cur);
    push(3, `Divide by 3 → ${cur}.`, snap({}));
  }

  const answer = cur === 1;
  push(5, cur === 1 ? "Reduced to 1 → power of three." : `Stuck at ${cur} (not divisible by 3) → not a power of three.`, snap({ stuck: cur !== 1, answer }));
  return steps;
}
