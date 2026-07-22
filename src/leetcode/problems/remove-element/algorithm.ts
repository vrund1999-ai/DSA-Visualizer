import type { Highlight, Step } from "@/core/types";

export interface RemoveElementInput {
  nums: number[];
  val: number;
}

export interface RemoveElementData {
  nums: number[];
  val: number;
  i: number | null;
  k: number;
}

export type RemoveElementStep = Step<RemoveElementData>;

/**
 * Two pointers: `k` is the next slot for a keeper. The scanner `i` copies every
 * value that isn't `val` down to k, overwriting removed ones. `line` indexes CODE.
 */
export function removeElementSteps(input: RemoveElementInput): RemoveElementStep[] {
  const nums = [...input.nums];
  const val = input.val;
  const steps: RemoveElementStep[] = [];
  let k = 0;

  const snap = (o: Partial<RemoveElementData>): RemoveElementData => ({ nums: [...nums], val, i: null, k, ...o });
  const push = (line: number, explanation: string, data: RemoveElementData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { kept: k } });
  };

  const kept = (): Highlight[] => Array.from({ length: k }, (_, j) => ({ ref: j, role: "sorted" as const }));

  push(1, `Keep everything that isn't ${val}; k marks the next write slot.`, snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
      push(4, `nums[${i}] = ${nums[i]} ≠ ${val} — write it to slot ${k - 1}.`, snap({ i }), [...kept(), { ref: i, role: "current" }]);
    } else {
      push(3, `nums[${i}] = ${val} — skip it.`, snap({ i }), [...kept(), { ref: i, role: "visited" }]);
    }
  }

  push(8, `Done — the first ${k} elements are the keepers.`, snap({ i: null }), kept());
  return steps;
}
