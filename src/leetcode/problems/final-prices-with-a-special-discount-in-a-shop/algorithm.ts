import type { Step } from "@/core/types";

export interface FinalPricesData {
  prices: number[];
  res: number[];
  scan: number | null;
  stack: number[];
  /** indices discounted on this step */
  resolved: number[];
  done: boolean;
}

export type FinalPricesStep = Step<FinalPricesData>;

/**
 * Each item's discount equals the price of the next item to its right that costs the same or less. A
 * monotonic (descending) stack of unresolved indices resolves each one as soon as a cheaper-or-equal price
 * appears. `line` indexes CODE.
 */
export function finalPricesSteps(prices: number[]): FinalPricesStep[] {
  const steps: FinalPricesStep[] = [];
  const res = [...prices];
  const stack: number[] = [];

  const snap = (o: Partial<FinalPricesData>): FinalPricesData => ({
    prices,
    res: [...res],
    scan: null,
    stack: [...stack],
    resolved: [],
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<FinalPricesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Apply each item's discount = next price ≤ it, using a monotonic stack.`);

  for (let i = 0; i < prices.length; i++) {
    const resolved: number[] = [];
    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      const j = stack.pop()!;
      res[j] = prices[j] - prices[i];
      resolved.push(j);
    }
    stack.push(i);
    push(9, resolved.length ? `prices[${i}] = ${prices[i]} discounts item(s) ${resolved.join(", ")}.` : `prices[${i}] = ${prices[i]} pushed; nothing to discount yet.`, {
      scan: i,
      resolved,
    });
  }

  push(11, `Final prices: [${res.join(", ")}].`, { done: true });
  return steps;
}
