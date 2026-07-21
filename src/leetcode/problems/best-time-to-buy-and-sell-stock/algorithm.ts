import type { Highlight, Step } from "@/core/types";

/** Snapshot the renderer draws for the current step. */
export interface StockData {
  prices: number[];
  /** Day currently being examined. */
  i: number | null;
  /** Cheapest day seen so far (best buy candidate). */
  minIndex: number | null;
  minPrice: number;
  maxProfit: number;
  /** The best buy/sell pair found so far. */
  best: { buy: number; sell: number } | null;
}

export type StockStep = Step<StockData>;

/**
 * One-pass solution: track the lowest price seen so far; at each day the best
 * profit is that day's price minus the running minimum. `line` indexes CODE.
 */
export function stockSteps(prices: number[]): StockStep[] {
  const steps: StockStep[] = [];
  let minPrice = Infinity;
  let minIndex = -1;
  let maxProfit = 0;
  let bestBuy = -1;
  let bestSell = -1;

  const snap = (o: Partial<StockData>): StockData => ({
    prices: [...prices],
    i: null,
    minIndex: minIndex < 0 ? null : minIndex,
    minPrice: Number.isFinite(minPrice) ? minPrice : 0,
    maxProfit,
    best: bestSell >= 0 ? { buy: bestBuy, sell: bestSell } : null,
    ...o,
  });

  const push = (
    line: number,
    explanation: string,
    data: StockData,
    highlights: Highlight[],
  ) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data,
      highlights,
      metrics: { maxProfit },
    });
  };

  push(
    1,
    "Track the lowest price seen so far and the best profit achievable by selling later.",
    snap({}),
    [],
  );

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    const base: Highlight[] = minIndex >= 0 ? [{ ref: minIndex, role: "target" }] : [];
    push(
      4,
      `Day ${i}: price ${price}. Compare with the lowest price so far (${
        Number.isFinite(minPrice) ? minPrice : "∞"
      }).`,
      snap({ i }),
      [...base, { ref: i, role: "current" }],
    );

    if (price < minPrice) {
      minPrice = price;
      minIndex = i;
      push(5, `${price} is a new minimum — the best day to buy so far.`, snap({ i }), [
        { ref: i, role: "target" },
      ]);
    } else {
      const profit = price - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
        bestBuy = minIndex;
        bestSell = i;
        push(
          7,
          `Selling on day ${i} for ${price} beats the record: ${price} − ${minPrice} = ${profit}.`,
          snap({ i }),
          [
            { ref: minIndex, role: "target" },
            { ref: i, role: "sorted" },
          ],
        );
      } else {
        push(
          6,
          `Profit ${price} − ${minPrice} = ${profit} doesn't beat the best (${maxProfit}).`,
          snap({ i }),
          [
            { ref: minIndex, role: "target" },
            { ref: i, role: "current" },
          ],
        );
      }
    }
  }

  const finalHl: Highlight[] =
    bestSell >= 0
      ? [
          { ref: bestBuy, role: "target" },
          { ref: bestSell, role: "sorted" },
        ]
      : [];
  push(
    10,
    `Best profit is ${maxProfit}${
      bestSell >= 0 ? ` — buy on day ${bestBuy}, sell on day ${bestSell}.` : " (no profitable trade)."
    }`,
    snap({ i: null }),
    finalHl,
  );

  return steps;
}
