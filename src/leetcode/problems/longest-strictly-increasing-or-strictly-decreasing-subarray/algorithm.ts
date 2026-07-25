import type { Step } from "@/core/types";

export interface MonotonicData {
  nums: number[];
  pos: number | null;
  inc: number;
  dec: number;
  /** direction of the current step */
  dir: "up" | "down" | "equal" | null;
  best: number;
  answer: number | null;
}

export type MonotonicStep = Step<MonotonicData>;

/**
 * Track the length of the current strictly increasing run and strictly decreasing run
 * ending at i; the answer is the maximum either reaches. An equality resets both.
 * `line` indexes CODE.
 */
export function monotonicSteps(nums: number[]): MonotonicStep[] {
  const steps: MonotonicStep[] = [];
  let best = 1;
  let inc = 1;
  let dec = 1;

  const snap = (pos: number, o: Partial<MonotonicData>): MonotonicData => ({ nums: [...nums], pos, inc, dec, dir: null, best, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<MonotonicData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, "Track increasing and decreasing run lengths ending at each index.", -1);

  for (let i = 1; i < nums.length; i++) {
    let dir: "up" | "down" | "equal";
    if (nums[i] > nums[i - 1]) {
      inc++;
      dec = 1;
      dir = "up";
    } else if (nums[i] < nums[i - 1]) {
      dec++;
      inc = 1;
      dir = "down";
    } else {
      inc = 1;
      dec = 1;
      dir = "equal";
    }
    best = Math.max(best, inc, dec);
    push(10, `${nums[i]} ${dir === "up" ? ">" : dir === "down" ? "<" : "="} ${nums[i - 1]} — inc ${inc}, dec ${dec}, best ${best}.`, i, { dir });
  }

  push(12, `Longest monotonic subarray: ${best}.`, -1, { answer: best });
  return steps;
}
