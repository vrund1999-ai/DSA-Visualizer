import type { Step } from "@/core/types";

export interface PowerValueData {
  lo: number;
  hi: number;
  k: number;
  /** value -> power (Collatz steps), filled progressively */
  power: Record<number, number>;
  /** current order of values shown */
  order: number[];
  /** value currently being measured */
  measuring: number | null;
  /** whether `order` is the final sorted order */
  sorted: boolean;
  answer: number | null;
}

export type PowerValueStep = Step<PowerValueData>;

const collatzPower = (x: number): number => {
  let steps = 0;
  while (x !== 1) {
    x = x % 2 === 0 ? x / 2 : 3 * x + 1;
    steps++;
  }
  return steps;
};

/**
 * Compute each integer's "power" (Collatz steps to reach 1), then sort the range by
 * (power asc, value asc) and pick the kth. `line` indexes CODE.
 */
export function powerValueSteps(lo: number, hi: number, k: number): PowerValueStep[] {
  const steps: PowerValueStep[] = [];
  const power: Record<number, number> = {};
  const order: number[] = [];
  for (let x = lo; x <= hi; x++) order.push(x);

  const snap = (o: Partial<PowerValueData>): PowerValueData => ({ lo, hi, k, power: { ...power }, order: [...order], measuring: null, sorted: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: PowerValueData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(10, `Compute the power of every integer in [${lo}, ${hi}].`, snap({}));

  for (const x of order) {
    power[x] = collatzPower(x);
    push(7, `power(${x}) = ${power[x]} Collatz step(s).`, snap({ measuring: x }));
  }

  order.sort((a, b) => power[a] - power[b] || a - b);
  push(12, "Sort by power ascending, breaking ties by value.", snap({ sorted: true }));

  push(13, `The ${k}th value is ${order[k - 1]}.`, snap({ sorted: true, answer: order[k - 1] }));
  return steps;
}
