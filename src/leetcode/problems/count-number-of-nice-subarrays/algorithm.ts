import type { Step } from "@/core/types";

export interface NiceData {
  nums: number[];
  k: number;
  idx: number | null;
  odd: number;
  /** oddPrefix -> frequency */
  count: [number, number][];
  /** how many subarrays ended here (count.get(odd-k)) */
  added: number | null;
  result: number;
  answer: number | null;
}

export type NiceStep = Step<NiceData>;

/**
 * A subarray is "nice" when it holds exactly k odd numbers, i.e. the running count of odds differs
 * by k between its ends. Tracking how often each odd-prefix value has occurred lets each element add
 * count[odd − k] new nice subarrays in O(1). `line` indexes CODE.
 */
export function niceSteps(nums: number[], k: number): NiceStep[] {
  const steps: NiceStep[] = [];
  const count = new Map<number, number>([[0, 1]]);
  let odd = 0;
  let result = 0;

  const snap = (o: Partial<NiceData>): NiceData => ({ nums, k, idx: null, odd, count: [...count.entries()].sort((a, b) => a[0] - b[0]), added: null, result, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<NiceData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Count subarrays with exactly ${k} odd numbers via odd-prefix frequencies.`);

  for (let i = 0; i < nums.length; i++) {
    odd += nums[i] & 1;
    const added = count.get(odd - k) ?? 0;
    result += added;
    push(5, `${nums[i]} → odd prefix ${odd}; ${added} earlier prefix(es) = ${odd - k} → +${added} (result ${result}).`, { idx: i, added });
    count.set(odd, (count.get(odd) ?? 0) + 1);
  }

  push(8, `Nice subarrays: ${result}.`, { answer: result });
  return steps;
}
