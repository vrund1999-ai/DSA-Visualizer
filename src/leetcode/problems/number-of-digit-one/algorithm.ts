import type { Step } from "@/core/types";

export interface DigitOneData {
  n: number;
  /** current place value (1, 10, 100, …) */
  place: number | null;
  high: number;
  cur: number;
  low: number;
  /** '1's contributed by this place */
  added: number;
  count: number;
  answer: number | null;
}

export type DigitOneStep = Step<DigitOneData>;

/**
 * Count 1s one digit-position at a time. Splitting n into high | cur | low around a position,
 * the number of 1s appearing there depends only on cur: 0 → high·place, 1 → high·place+low+1,
 * ≥2 → (high+1)·place. Summing over all positions counts every 1 in 1..n. `line` indexes CODE.
 */
export function digitOneSteps(n: number): DigitOneStep[] {
  const steps: DigitOneStep[] = [];
  let count = 0;

  const snap = (o: Partial<DigitOneData>): DigitOneData => ({ n, place: null, high: 0, cur: 0, low: 0, added: 0, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DigitOneData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Count the digit 1 across all of 1..${n}, one place value at a time.`);

  for (let place = 1; place <= n; place *= 10) {
    const high = Math.floor(n / (place * 10));
    const cur = Math.floor(n / place) % 10;
    const low = n % place;
    let added: number;
    let line: number;
    if (cur === 0) { added = high * place; line = 6; }
    else if (cur === 1) { added = high * place + low + 1; line = 7; }
    else { added = (high + 1) * place; line = 8; }
    count += added;
    push(line, `place ${place}: high=${high}, cur=${cur}, low=${low} → +${added} ones (count ${count}).`, { place, high, cur, low, added });
  }

  push(10, `Total number of digit 1: ${count}.`, { answer: count });
  return steps;
}
