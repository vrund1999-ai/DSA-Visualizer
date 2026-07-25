import type { Step } from "@/core/types";

export interface CooldownData {
  prices: number[];
  day: number | null;
  hold: number;
  sold: number;
  rest: number;
  answer: number | null;
}

export type CooldownStep = Step<CooldownData>;

const fmt = (v: number) => (v === -Infinity ? "−∞" : `${v}`);

/**
 * Three states capture the cooldown rule: `hold` (currently owning a share), `sold` (sold exactly
 * today, forcing a rest tomorrow), and `rest` (idle and free to buy). Each day updates them from the
 * previous day's values — crucially buying comes from `rest`, never straight after a sale. `line` indexes CODE.
 */
export function cooldownSteps(prices: number[]): CooldownStep[] {
  const steps: CooldownStep[] = [];
  let hold = -Infinity;
  let sold = 0;
  let rest = 0;

  const snap = (o: Partial<CooldownData>): CooldownData => ({ prices, day: null, hold, sold, rest, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CooldownData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Roll three states: hold, sold (rest tomorrow), rest (free to buy).");

  for (let day = 0; day < prices.length; day++) {
    const p = prices[day];
    const prevSold = sold;
    sold = hold + p;
    hold = Math.max(hold, rest - p);
    rest = Math.max(rest, prevSold);
    push(8, `Day ${day} (price ${p}): hold=${fmt(hold)}, sold=${fmt(sold)}, rest=${fmt(rest)}.`, { day });
  }

  const answer = Math.max(sold, rest);
  push(10, `Best profit (ending idle or just sold): ${answer}.`, { answer });
  return steps;
}
