import type { Step } from "@/core/types";

export interface NiceSubarrayData {
  nums: number[];
  l: number;
  r: number | null;
  /** OR of bits in the current window */
  mask: number;
  /** whether nums[r] conflicts (shares a bit) */
  conflict: boolean;
  best: number;
  answer: number | null;
}

export type NiceSubarrayStep = Step<NiceSubarrayData>;

/**
 * A "nice" subarray has pairwise-disjoint bits, so the running OR of its elements never reuses a bit.
 * We slide a window: if the incoming element shares any bit with the window's mask, we drop elements
 * from the left (XOR-ing their bits out) until it fits, then extend. `line` indexes CODE.
 */
export function niceSubarraySteps(nums: number[]): NiceSubarrayStep[] {
  const steps: NiceSubarrayStep[] = [];
  let mask = 0;
  let l = 0;
  let best = 0;

  const snap = (o: Partial<NiceSubarrayData>): NiceSubarrayData => ({ nums, l, r: null, mask, conflict: false, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<NiceSubarrayData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Window keeps a bitmask; nice subarrays never reuse a bit.");

  for (let r = 0; r < nums.length; r++) {
    let conflict = (mask & nums[r]) !== 0;
    if (conflict) push(3, `${nums[r]} shares a bit with mask ${mask} — shrink from the left.`, { r, conflict: true });
    while (mask & nums[r]) {
      mask ^= nums[l];
      l++;
    }
    mask |= nums[r];
    best = Math.max(best, r - l + 1);
    conflict = false;
    push(8, `Add ${nums[r]}; window [${l}..${r}] length ${r - l + 1} (best ${best}).`, { r });
  }

  push(10, `Longest nice subarray: ${best}.`, { answer: best });
  return steps;
}
