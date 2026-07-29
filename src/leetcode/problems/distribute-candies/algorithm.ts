import type { Step } from "@/core/types";

export interface CandiesData {
  candyType: number[];
  idx: number | null;
  /** distinct types seen so far */
  types: number[];
  limit: number;
  answer: number | null;
}

export type CandiesStep = Step<CandiesData>;

/**
 * She may eat only half the candies, but wants the most distinct flavors. She can taste one of every
 * unique type up to that half-limit, so the answer is min(number of distinct types, n / 2). `line` indexes CODE.
 */
export function candiesSteps(candyType: number[]): CandiesStep[] {
  const steps: CandiesStep[] = [];
  const types = new Set<number>();
  const limit = candyType.length / 2;

  const snap = (o: Partial<CandiesData>): CandiesData => ({ candyType, idx: null, types: [...types], limit, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CandiesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `She can eat ${limit} candies (half of ${candyType.length}). Collect the distinct types.`);

  for (let i = 0; i < candyType.length; i++) {
    const isNew = !types.has(candyType[i]);
    types.add(candyType[i]);
    push(1, `Candy ${candyType[i]}${isNew ? " → new type" : " (already seen)"}. Distinct types: ${types.size}.`, { idx: i });
  }

  const answer = Math.min(types.size, limit);
  push(4, `min(${types.size} types, ${limit} limit) = ${answer}.`, { answer });
  return steps;
}
