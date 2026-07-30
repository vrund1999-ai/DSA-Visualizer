import type { Step } from "@/core/types";

export interface PowersThreeData {
  n: number;
  /** base-3 digits collected so far (least significant first) */
  digits: number[];
  /** current value being divided */
  cur: number;
  /** power index of the digit just produced */
  power: number | null;
  answer: boolean | null;
}

export type PowersThreeStep = Step<PowersThreeData>;

/**
 * A number is a sum of distinct powers of 3 exactly when its base-3 representation uses only the digits 0
 * and 1 — a digit of 2 would need the same power twice. Repeatedly take n mod 3 to read each digit.
 * `line` indexes CODE.
 */
export function powersThreeSteps(n: number): PowersThreeStep[] {
  const steps: PowersThreeStep[] = [];
  const digits: number[] = [];

  const snap = (o: Partial<PowersThreeData>): PowersThreeData => ({ n, digits: [...digits], cur: 0, power: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PowersThreeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  let cur = n;
  let power = 0;
  push(1, `Read ${n} in base 3; a digit of 2 means it can't be a sum of distinct powers of 3.`, { cur });

  while (cur > 0) {
    const d = cur % 3;
    digits.push(d);
    if (d === 2) {
      push(2, `Digit at 3^${power} is 2 → not a sum of distinct powers of 3.`, { cur, power, answer: false });
      return steps;
    }
    push(3, `Digit at 3^${power} is ${d}. Continue with ${Math.floor(cur / 3)}.`, { cur, power });
    cur = Math.floor(cur / 3);
    power++;
  }

  push(5, "Every base-3 digit is 0 or 1 → yes.", { cur, answer: true });
  return steps;
}
