import type { Step } from "@/core/types";

export interface HillValleyData {
  nums: number[];
  idx: number | null;
  /** last distinct value to the left */
  prev: number | null;
  kind: "hill" | "valley" | "flat" | "plateau" | null;
  count: number;
  answer: number | null;
}

export type HillValleyStep = Step<HillValleyData>;

/**
 * A hill or valley is a position that's strictly greater (or smaller) than the nearest different
 * values on both sides. Tracking the previous *distinct* value and skipping plateaus lets us classify
 * each index in one pass. `line` indexes CODE.
 */
export function hillValleySteps(nums: number[]): HillValleyStep[] {
  const steps: HillValleyStep[] = [];
  let count = 0;
  let prev = nums[0];

  const snap = (o: Partial<HillValleyData>): HillValleyData => ({ nums, idx: null, prev, kind: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<HillValleyData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Compare each index to its nearest different neighbors; skip plateaus.");

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      push(3, `nums[${i}] = ${nums[i]} equals its right neighbor → plateau, skip.`, { idx: i, kind: "plateau" });
      continue;
    }
    const left = prev;
    const right = nums[i + 1];
    let kind: HillValleyData["kind"] = "flat";
    if (nums[i] > left && nums[i] > right) kind = "hill";
    else if (nums[i] < left && nums[i] < right) kind = "valley";
    if (kind === "hill" || kind === "valley") count++;
    push(7, `nums[${i}] = ${nums[i]} vs left ${left}, right ${right} → ${kind} (count ${count}).`, { idx: i, kind });
    prev = nums[i];
  }

  push(10, `Total hills and valleys: ${count}.`, { answer: count });
  return steps;
}
