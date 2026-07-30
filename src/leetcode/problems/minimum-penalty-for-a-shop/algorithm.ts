import type { Step } from "@/core/types";

export interface ShopPenaltyData {
  customers: string;
  /** the closing hour currently evaluated (0..n) */
  hour: number | null;
  penalty: number;
  best: number;
  bestHour: number;
  answer: number | null;
}

export type ShopPenaltyStep = Step<ShopPenaltyData>;

/**
 * Minimum Penalty for a Shop: closing at hour j penalizes every open hour with no customer ('N' before j)
 * plus every closed hour with a customer ('Y' from j on). Starting from j=0 (all 'Y' penalized), each hour
 * that opens adjusts the penalty by −1 for 'Y' or +1 for 'N'. Return the earliest hour with the least
 * penalty. `line` indexes CODE.
 */
export function shopPenaltySteps(customers: string): ShopPenaltyStep[] {
  const steps: ShopPenaltyStep[] = [];
  let penalty = [...customers].filter((c) => c === "Y").length;
  let best = penalty;
  let bestHour = 0;

  const snap = (o: Partial<ShopPenaltyData>): ShopPenaltyData => ({
    customers,
    hour: null,
    penalty,
    best,
    bestHour,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ShopPenaltyData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `Closing at hour 0 penalizes all ${penalty} customer(s). Try opening later.`, { hour: 0 });

  for (let i = 0; i < customers.length; i++) {
    penalty += customers[i] === "Y" ? -1 : 1;
    if (penalty < best) {
      best = penalty;
      bestHour = i + 1;
      push(10, `Hour ${i + 1}: '${customers[i]}' → penalty ${penalty} (new best).`, { hour: i + 1 });
    } else {
      push(7, `Hour ${i + 1}: '${customers[i]}' → penalty ${penalty}.`, { hour: i + 1 });
    }
  }

  push(13, `Earliest hour with minimum penalty ${best} = hour ${bestHour}.`, { answer: bestHour });
  return steps;
}
