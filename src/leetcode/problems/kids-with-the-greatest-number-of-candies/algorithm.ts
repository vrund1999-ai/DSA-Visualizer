import type { Step } from "@/core/types";

export interface CandiesData {
  candies: number[];
  extra: number;
  max: number;
  idx: number | null;
  /** c + extra for the current kid */
  total: number | null;
  result: boolean[];
  answer: boolean[] | null;
}

export type CandiesStep = Step<CandiesData>;

/**
 * With the extra candies always given to the same kid, that kid can tie the current leader iff
 * their own count plus the extras reaches the group maximum. So we compute the max once and test
 * each kid independently. `line` indexes CODE.
 */
export function candiesSteps(candies: number[], extra: number): CandiesStep[] {
  const steps: CandiesStep[] = [];
  const max = Math.max(...candies);
  const result: boolean[] = [];

  const snap = (o: Partial<CandiesData>): CandiesData => ({ candies, extra, max, idx: null, total: null, result: [...result], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CandiesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Most candies any kid has is ${max}; each kid gets all ${extra} extras.`);

  for (let i = 0; i < candies.length; i++) {
    const total = candies[i] + extra;
    result.push(total >= max);
    push(4, `Kid ${i}: ${candies[i]} + ${extra} = ${total} ${total >= max ? "≥" : "<"} ${max} → ${total >= max}.`, { idx: i, total });
  }

  push(6, `Result: [${result.join(", ")}].`, { answer: [...result] });
  return steps;
}
