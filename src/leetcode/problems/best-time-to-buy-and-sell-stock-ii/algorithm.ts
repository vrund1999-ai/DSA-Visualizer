import type { Highlight, Step } from "@/core/types";

export interface StockIIData {
  prices: number[];
  i: number | null;
  profit: number;
}

export type StockIIStep = Step<StockIIData>;

/**
 * With unlimited transactions, the best strategy is to capture every upward
 * step: summing each positive day-to-day difference equals buying before every
 * rise and selling at its peak. `line` indexes CODE.
 */
export function stockIISteps(prices: number[]): StockIIStep[] {
  const steps: StockIIStep[] = [];
  let profit = 0;

  const snap = (o: Partial<StockIIData>): StockIIData => ({ prices: [...prices], i: null, profit, ...o });
  const push = (line: number, explanation: string, data: StockIIData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { profit } });
  };

  push(1, "Collect every upward move (buy low, sell at each local peak).", snap({}), []);

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      const gain = prices[i] - prices[i - 1];
      profit += gain;
      push(4, `${prices[i]} > ${prices[i - 1]} — capture +${gain}. Profit ${profit}.`, snap({ i }), [
        { ref: i - 1, role: "target" },
        { ref: i, role: "sorted" },
      ]);
    } else {
      push(3, `${prices[i]} ≤ ${prices[i - 1]} — no gain, skip.`, snap({ i }), [{ ref: i, role: "visited" }]);
    }
  }

  push(5, `Maximum profit with unlimited trades: ${profit}.`, snap({ i: null }), []);
  return steps;
}
