import type { Step } from "@/core/types";

export interface Max69Data {
  digits: string[];
  scan: number | null;
  /** index of the digit flipped from 6 to 9 */
  flipped: number | null;
  answer: number | null;
}

export type Max69Step = Step<Max69Data>;

/**
 * Maximum 69 Number: changing the most-significant 6 into a 9 raises the number the most, and one change is
 * always at least as good as none. `line` indexes CODE.
 */
export function max69Steps(num: number): Max69Step[] {
  const steps: Max69Step[] = [];
  const digits = `${num}`.split("");

  const snap = (o: Partial<Max69Data>): Max69Data => ({ digits: [...digits], scan: null, flipped: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<Max69Data> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Flip the left-most 6 to a 9 to maximize ${num}.`);

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "6") {
      digits[i] = "9";
      push(4, `First 6 is at position ${i} → change to 9.`, { scan: i, flipped: i, answer: Number(digits.join("")) });
      return steps;
    }
    push(3, `Digit ${digits[i]} at position ${i} is not a 6.`, { scan: i });
  }

  push(8, `No 6 to change; number stays ${num}.`, { answer: num });
  return steps;
}
