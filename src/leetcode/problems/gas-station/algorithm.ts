import type { Highlight, Step } from "@/core/types";

export interface GasStationInput {
  gas: number[];
  cost: number[];
}

export interface GasData {
  net: number[];
  i: number | null;
  start: number;
  tank: number;
  total: number;
  answer: number | null;
}

export type GasStep = Step<GasData>;

/**
 * Greedy one-pass: the trip is possible iff the total gas ≥ total cost. Whenever
 * the running tank dips below zero, no station up to i could have been the start,
 * so the next station becomes the new candidate. `line` indexes CODE.
 */
export function gasSteps(input: GasStationInput): GasStep[] {
  const { gas, cost } = input;
  const net = gas.map((g, i) => g - cost[i]);
  const steps: GasStep[] = [];
  let total = 0;
  let tank = 0;
  let start = 0;
  let answer: number | null = null;

  const snap = (o: Partial<GasData>): GasData => ({ net: [...net], i: null, start, tank, total, answer, ...o });
  const push = (line: number, explanation: string, data: GasData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { tank } });
  };

  push(1, "Track a running tank; restart the candidate start whenever it goes negative.", snap({}), []);

  for (let i = 0; i < net.length; i++) {
    total += net[i];
    tank += net[i];
    push(4, `Station ${i}: net ${net[i] >= 0 ? "+" : ""}${net[i]}. Tank = ${tank}.`, snap({ i }), [
      { ref: i, role: tank < 0 ? "swapped" : "current" },
    ]);
    if (tank < 0) {
      start = i + 1;
      tank = 0;
      push(6, `Tank went negative — no start ≤ ${i} works. Try starting at ${start}.`, snap({ i }), [
        { ref: i, role: "swapped" },
      ]);
    }
  }

  answer = total >= 0 ? start : -1;
  push(9, total >= 0 ? `Total net ${total} ≥ 0 — start at station ${start}.` : `Total net ${total} < 0 — impossible, return -1.`, snap({ answer, i: null }), answer >= 0 ? [{ ref: answer, role: "target" }] : []);
  return steps;
}
