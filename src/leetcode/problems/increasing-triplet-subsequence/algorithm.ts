import type { Step } from "@/core/types";

export interface TripletData {
  nums: number[];
  pos: number | null;
  first: number;
  second: number;
  answer: boolean | null;
}

export type TripletStep = Step<TripletData>;

const INF = Number.POSITIVE_INFINITY;

/**
 * Track the smallest value seen (`first`) and the smallest value that has some smaller
 * value before it (`second`). Any element exceeding both completes an increasing
 * triple. `line` indexes CODE.
 */
export function tripletSteps(nums: number[]): TripletStep[] {
  const steps: TripletStep[] = [];
  let first = INF;
  let second = INF;

  const snap = (pos: number, o: Partial<TripletData>): TripletData => ({ nums: [...nums], pos, first, second, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<TripletData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, "Track the two smallest 'chain' values; a third larger one wins.", -1);

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n <= first) {
      first = n;
      push(3, `${n} ≤ first — new smallest (first = ${n}).`, i);
    } else if (n <= second) {
      second = n;
      push(4, `${n} > first but ≤ second — second = ${n}.`, i);
    } else {
      push(5, `${n} > first (${first}) and second (${second}) — triple found!`, i, { answer: true });
      return steps;
    }
  }

  push(7, "No increasing triple exists → false.", -1, { answer: false });
  return steps;
}
