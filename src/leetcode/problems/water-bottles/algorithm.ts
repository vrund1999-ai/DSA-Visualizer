import type { Step } from "@/core/types";

export interface BottlesData {
  numExchange: number;
  drunk: number;
  empty: number;
  /** fresh bottles obtained this round */
  fresh: number | null;
  round: number;
  answer: number | null;
}

export type BottlesStep = Step<BottlesData>;

/**
 * Drink all full bottles, then repeatedly trade empties for new full ones while there are enough to
 * exchange. Each round adds floor(empty / numExchange) drinks and leaves the remainder plus the new
 * empties. `line` indexes CODE.
 */
export function bottlesSteps(numBottles: number, numExchange: number): BottlesStep[] {
  const steps: BottlesStep[] = [];
  let drunk = numBottles;
  let empty = numBottles;
  let round = 0;

  const snap = (o: Partial<BottlesData>): BottlesData => ({ numExchange, drunk, empty, fresh: null, round, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BottlesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Drink the ${numBottles} full bottles; now ${empty} empties, exchange rate ${numExchange}:1.`);

  while (empty >= numExchange) {
    round++;
    const fresh = Math.floor(empty / numExchange);
    drunk += fresh;
    empty = (empty % numExchange) + fresh;
    push(6, `Round ${round}: trade for ${fresh} bottle(s), drink them (total ${drunk}); ${empty} empties left.`, { fresh, round });
  }

  push(8, `Not enough empties to trade. Total drunk: ${drunk}.`, { answer: drunk });
  return steps;
}
