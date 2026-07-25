import type { Step } from "@/core/types";

export interface StockFeeData {
  prices: number[];
  fee: number;
  day: number | null;
  cash: number;
  hold: number;
  /** true if `cash` improved this step (a sell) */
  sold: boolean;
  /** true if `hold` improved this step (a buy) */
  bought: boolean;
  answer: number | null;
}

export type StockFeeStep = Step<StockFeeData>;

/**
 * Two rolling states: `cash` (best profit not holding a share) and `hold` (best while
 * holding). Each day we can sell (cash = hold + price − fee) or buy (hold = cash −
 * price); both keep their previous value if better. `line` indexes CODE.
 */
export function stockFeeSteps(prices: number[], fee: number): StockFeeStep[] {
  const steps: StockFeeStep[] = [];
  let cash = 0;
  let hold = -prices[0];

  const snap = (o: Partial<StockFeeData>): StockFeeData => ({ prices: [...prices], fee, day: null, cash, hold, sold: false, bought: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: StockFeeData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Start: cash 0, hold −${prices[0]} (bought day 0). Fee ${fee}.`, snap({ day: 0 }));

  for (let i = 1; i < prices.length; i++) {
    const newCash = Math.max(cash, hold + prices[i] - fee);
    const sold = newCash > cash;
    cash = newCash;
    const newHold = Math.max(hold, cash - prices[i]);
    const bought = newHold > hold;
    hold = newHold;
    push(7, `Day ${i} (price ${prices[i]}): cash ${cash}${sold ? " (sold)" : ""}, hold ${hold}${bought ? " (bought)" : ""}.`, snap({ day: i, sold, bought }));
  }

  push(9, `Maximum profit: ${cash}.`, snap({ answer: cash }));
  return steps;
}
