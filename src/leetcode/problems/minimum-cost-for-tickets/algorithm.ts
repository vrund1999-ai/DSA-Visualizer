import type { Step } from "@/core/types";

export interface TicketsData {
  days: number[];
  costs: number[];
  dp: number[];
  /** day index d currently computed */
  d: number | null;
  isTravel: boolean;
  /** the three candidate costs at a travel day */
  options: [number, number, number] | null;
  answer: number | null;
}

export type TicketsStep = Step<TicketsData>;

/**
 * dp[d] is the cheapest way to cover all travel up to day d. On a non-travel day nothing changes, so
 * dp[d] = dp[d-1]. On a travel day we take the best of buying a 1-, 7-, or 30-day pass that ends today,
 * looking back to whatever was optimal before the pass began. `line` indexes CODE.
 */
export function ticketsSteps(days: number[], costs: number[]): TicketsStep[] {
  const steps: TicketsStep[] = [];
  const travel = new Set(days);
  const last = days[days.length - 1];
  const dp = new Array(last + 1).fill(0);

  const snap = (o: Partial<TicketsData>): TicketsData => ({ days, costs, dp: [...dp], d: null, isTravel: false, options: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TicketsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `dp[d] = min cost to cover travel up to day d (last travel day ${last}).`);

  for (let d = 1; d <= last; d++) {
    if (!travel.has(d)) {
      dp[d] = dp[d - 1];
      continue;
    }
    const options: [number, number, number] = [dp[d - 1] + costs[0], dp[Math.max(0, d - 7)] + costs[1], dp[Math.max(0, d - 30)] + costs[2]];
    dp[d] = Math.min(...options);
    push(6, `Travel day ${d}: min(1-day ${options[0]}, 7-day ${options[1]}, 30-day ${options[2]}) = ${dp[d]}.`, { d, isTravel: true, options });
  }

  push(11, `Minimum total ticket cost: ${dp[last]}.`, { answer: dp[last] });
  return steps;
}
