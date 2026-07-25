import type { Step } from "@/core/types";

export interface StockIIIData {
  prices: number[];
  day: number | null;
  buy1: number;
  sell1: number;
  buy2: number;
  sell2: number;
  answer: number | null;
}

export type StockIIIStep = Step<StockIIIData>;

const fmt = (v: number) => (v === -Infinity ? "−∞" : `${v}`);

/**
 * Track four best-so-far states as prices stream by: buy1 (holding the first stock), sell1
 * (after selling it), buy2 (holding the second, funded by sell1's profit), and sell2 (after
 * the second sale). Each depends only on the previous state, so one pass yields the best
 * profit from at most two transactions. `line` indexes CODE.
 */
export function stockIIISteps(prices: number[]): StockIIIStep[] {
  const steps: StockIIIStep[] = [];
  let buy1 = -Infinity;
  let sell1 = 0;
  let buy2 = -Infinity;
  let sell2 = 0;

  const snap = (o: Partial<StockIIIData>): StockIIIData => ({ prices, day: null, buy1, sell1, buy2, sell2, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<StockIIIData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Four rolling states track the best profit through each stage of two trades.");

  for (let day = 0; day < prices.length; day++) {
    const p = prices[day];
    buy1 = Math.max(buy1, -p);
    sell1 = Math.max(sell1, buy1 + p);
    buy2 = Math.max(buy2, sell1 - p);
    sell2 = Math.max(sell2, buy2 + p);
    push(7, `Day ${day} (price ${p}): buy1=${fmt(buy1)}, sell1=${sell1}, buy2=${fmt(buy2)}, sell2=${sell2}.`, { day });
  }

  push(9, `Best profit with ≤2 transactions: ${sell2}.`, { answer: sell2 });
  return steps;
}
