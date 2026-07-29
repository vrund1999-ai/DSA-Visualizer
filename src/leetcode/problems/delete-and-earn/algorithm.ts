import type { Step } from "@/core/types";

export interface DeleteEarnData {
  nums: number[];
  points: number[];
  /** value v currently processed */
  v: number | null;
  take: number;
  skip: number;
  answer: number | null;
}

export type DeleteEarnStep = Step<DeleteEarnData>;

/**
 * Taking a value deletes all copies of v−1 and v+1, so it never pays to take adjacent values. Summing
 * each value's total points and running a house-robber DP over the value axis (take v = skip previous +
 * points[v]) maximizes the earnings. `line` indexes CODE.
 */
export function deleteEarnSteps(nums: number[]): DeleteEarnStep[] {
  const steps: DeleteEarnStep[] = [];
  const max = Math.max(...nums);
  const points = new Array(max + 1).fill(0);
  for (const n of nums) points[n] += n;
  let take = 0;
  let skip = 0;

  const snap = (o: Partial<DeleteEarnData>): DeleteEarnData => ({ nums, points, v: null, take, skip, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DeleteEarnData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `points[v] = total value from all copies of v. Then rob non-adjacent values.`);

  for (let v = 0; v <= max; v++) {
    const newTake = skip + points[v];
    const newSkip = Math.max(skip, take);
    push(8, `v=${v}: take = skip(${skip}) + points[${v}](${points[v]}) = ${newTake}; skip = max = ${newSkip}.`, { v, take: newTake, skip: newSkip });
    skip = newSkip;
    take = newTake;
  }

  const answer = Math.max(take, skip);
  push(10, `Maximum points: max(${take}, ${skip}) = ${answer}.`, { answer });
  return steps;
}
