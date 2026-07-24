import type { Step } from "@/core/types";

export interface StockSpanData {
  prices: number[];
  /** computed span per already-processed day */
  spans: (number | null)[];
  /** index of the day currently being processed */
  day: number | null;
  /** stack entries [price, span] */
  stack: [number, number][];
  /** stack entry index just popped/absorbed this step */
  absorbing: boolean;
}

export type StockSpanStep = Step<StockSpanData>;

/**
 * Stock span = number of consecutive days (ending today) whose price ≤ today's. A
 * monotonic stack of [price, span] lets each day absorb the spans of all not-greater
 * days behind it in O(1) amortized. `line` indexes CODE.
 */
export function stockSpanSteps(prices: number[]): StockSpanStep[] {
  const steps: StockSpanStep[] = [];
  const spans: (number | null)[] = prices.map(() => null);
  const stack: [number, number][] = [];

  const snap = (o: Partial<StockSpanData>): StockSpanData => ({ prices: [...prices], spans: [...spans], day: null, stack: stack.map((e) => [...e] as [number, number]), absorbing: false, ...o });
  const push = (line: number, explanation: string, data: StockSpanData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Maintain a stack of [price, span] to answer each day in O(1) amortized.", snap({}));

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    let span = 1;
    push(3, `Day ${i}: price ${price}, span starts at 1.`, snap({ day: i }));
    while (stack.length && stack[stack.length - 1][0] <= price) {
      const [, s] = stack.pop()!;
      span += s;
      push(6, `Pop ${"≤"} price (span ${s}) → running span ${span}.`, snap({ day: i, absorbing: true }));
    }
    stack.push([price, span]);
    spans[i] = span;
    push(9, `Day ${i} span = ${span}.`, snap({ day: i }));
  }

  push(9, `All spans: [${spans.join(", ")}].`, snap({}));
  return steps;
}
