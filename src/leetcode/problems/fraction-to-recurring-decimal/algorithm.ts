import type { Step } from "@/core/types";

export interface FractionData {
  num: number;
  den: number;
  intPart: string;
  /** fractional digits produced so far */
  frac: string;
  /** remainder currently being divided */
  rem: number | null;
  /** remainder -> position where it first produced a digit */
  seen: [number, number][];
  /** true when a repeat was detected */
  cycle: boolean;
  answer: string | null;
}

export type FractionStep = Step<FractionData>;

/**
 * Long division produces one fractional digit per step from remainder×10. A remainder fully determines
 * everything that follows, so the first time one repeats the digits between then and now form the
 * repeating block, wrapped in parentheses. `line` indexes CODE.
 */
export function fractionSteps(num: number, den: number): FractionStep[] {
  const steps: FractionStep[] = [];
  const seen = new Map<number, number>();
  let frac = "";

  const snap = (o: Partial<FractionData>): FractionData => ({ num, den, intPart: "", frac, rem: null, seen: [...seen.entries()], cycle: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FractionData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (num % den === 0) {
    push(1, `${num} ÷ ${den} divides evenly → ${num / den}.`, { intPart: String(num / den), answer: String(num / den) });
    return steps;
  }

  const sign = num < 0 !== den < 0 ? "-" : "";
  const a = Math.abs(num);
  const b = Math.abs(den);
  const intPart = sign + Math.floor(a / b) + ".";
  let rem = a % b;
  push(5, `Integer part: ${intPart} Now divide the remainder ${rem}.`, { intPart, rem });

  while (rem !== 0) {
    if (seen.has(rem)) {
      const p = seen.get(rem)!;
      frac = frac.slice(0, p) + "(" + frac.slice(p) + ")";
      push(11, `Remainder ${rem} already seen at position ${p} → wrap the repeating block.`, { intPart, rem, cycle: true });
      break;
    }
    seen.set(rem, frac.length);
    rem *= 10;
    const digit = Math.floor(rem / b);
    frac += digit;
    rem %= b;
    push(16, `${(rem + digit * b)} ÷ ${b} → digit ${digit}, remainder ${rem}.`, { intPart, rem });
  }

  const answer = intPart + frac;
  push(19, `Result: ${answer}.`, { intPart, answer });
  return steps;
}
