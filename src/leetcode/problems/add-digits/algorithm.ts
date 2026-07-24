import type { Step } from "@/core/types";

export interface AddDigitsData {
  /** each reduction: the number and the digits summed to make the next */
  chain: { value: number; digits: number[]; sum: number }[];
  current: number;
  answer: number | null;
}

export type AddDigitsStep = Step<AddDigitsData>;

/**
 * Repeatedly replace the number by the sum of its digits until a single digit
 * remains (the digital root). `line` indexes CODE.
 */
export function addDigitsSteps(num: number): AddDigitsStep[] {
  const steps: AddDigitsStep[] = [];
  const chain: { value: number; digits: number[]; sum: number }[] = [];

  const snap = (current: number, o: Partial<AddDigitsData>): AddDigitsData => ({ chain: chain.map((c) => ({ ...c, digits: [...c.digits] })), current, answer: null, ...o });
  const push = (line: number, current: number, explanation: string, o: Partial<AddDigitsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(current, o), highlights: [] });
  };

  let n = num;
  push(1, n, `Reduce ${n} by summing its digits until one digit remains.`);

  while (n >= 10) {
    const digits = String(n).split("").map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    chain.push({ value: n, digits, sum });
    push(5, sum, `${digits.join(" + ")} = ${sum}.`);
    n = sum;
  }

  push(7, n, `Digital root: ${n}.`, { answer: n });
  return steps;
}
