import type { Step } from "@/core/types";

export interface UnsortedData {
  nums: number[];
  phase: "right" | "left" | "done";
  i: number | null;
  maxSeen: number;
  minSeen: number;
  right: number;
  left: number;
  answer: number | null;
}

export type UnsortedStep = Step<UnsortedData>;

/**
 * Scanning left-to-right, any element below the running max is out of place — the last such index marks
 * the window's right end. A mirror scan tracking the running min from the right marks its left end.
 * Everything between must be sorted. `line` indexes CODE.
 */
export function unsortedSteps(nums: number[]): UnsortedStep[] {
  const steps: UnsortedStep[] = [];
  const n = nums.length;
  let right = -1;
  let maxSeen = -Infinity;
  let left = n;
  let minSeen = Infinity;

  const snap = (o: Partial<UnsortedData>): UnsortedData => ({ nums, phase: "right", i: null, maxSeen, minSeen, right, left, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<UnsortedData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Left→right: find the last element that falls below the running maximum.");
  for (let i = 0; i < n; i++) {
    if (nums[i] < maxSeen) {
      right = i;
      push(4, `nums[${i}]=${nums[i]} < max ${maxSeen} → right boundary ${i}.`, { phase: "right", i });
    } else {
      maxSeen = nums[i];
      push(5, `nums[${i}]=${nums[i]} is a new running max.`, { phase: "right", i });
    }
  }

  push(7, "Right→left: find the first element above the running minimum.");
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > minSeen) {
      left = i;
      push(9, `nums[${i}]=${nums[i]} > min ${minSeen} → left boundary ${i}.`, { phase: "left", i });
    } else {
      minSeen = nums[i];
      push(10, `nums[${i}]=${nums[i]} is a new running min.`, { phase: "left", i });
    }
  }

  const answer = right <= left ? 0 : right - left + 1;
  push(12, answer === 0 ? "Array already sorted → 0." : `Shortest unsorted window is [${left}, ${right}] → length ${answer}.`, { phase: "done", answer });
  return steps;
}
