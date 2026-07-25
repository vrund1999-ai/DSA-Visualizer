import type { Step } from "@/core/types";

export interface LargestOddData {
  num: string;
  scan: number | null;
  /** end index (inclusive) of the chosen prefix, once found */
  cut: number | null;
  answer: string | null;
}

export type LargestOddStep = Step<LargestOddData>;

/**
 * A number is odd iff its last digit is odd, and any prefix is itself a substring number.
 * So the largest odd substring is the longest prefix ending in an odd digit — scan from the
 * right for the first odd digit and keep everything up to it. `line` indexes CODE.
 */
export function largestOddSteps(num: string): LargestOddStep[] {
  const steps: LargestOddStep[] = [];

  const snap = (o: Partial<LargestOddData>): LargestOddData => ({ num, scan: null, cut: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LargestOddData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Scan from the right for the first odd digit — the prefix up to it is the answer.");

  for (let i = num.length - 1; i >= 0; i--) {
    const digit = num.charCodeAt(i) - 48;
    const odd = digit % 2 === 1;
    push(2, `Digit ${num[i]} at ${i} is ${odd ? "odd" : "even"}.`, { scan: i });
    if (odd) {
      const answer = num.slice(0, i + 1);
      push(3, `Odd digit found → keep prefix [0..${i}] = "${answer}".`, { scan: i, cut: i, answer });
      return steps;
    }
  }

  push(5, "No odd digit exists → answer is the empty string.", { answer: "" });
  return steps;
}
