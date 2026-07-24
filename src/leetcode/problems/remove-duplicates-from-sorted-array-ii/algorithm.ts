import type { Step } from "@/core/types";

export interface RemoveDupData {
  nums: number[];
  read: number;
  write: number;
  /** true if the just-read element was kept */
  kept: boolean | null;
  length: number | null;
}

export type RemoveDupStep = Step<RemoveDupData>;

/**
 * Two pointers over the sorted array: a read pointer scans every element, a write
 * pointer only advances when keeping the element is allowed (fewer than two copies
 * already written, checked via nums[write-2]). `line` indexes CODE.
 */
export function removeDupSteps(input: number[]): RemoveDupStep[] {
  const steps: RemoveDupStep[] = [];
  const nums = [...input];
  let write = 0;

  const snap = (read: number, o: Partial<RemoveDupData>): RemoveDupData => ({ nums: [...nums], read, write, kept: null, length: null, ...o });
  const push = (line: number, read: number, explanation: string, o: Partial<RemoveDupData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(read, o), highlights: [] });
  };

  push(1, -1, "Keep at most two copies of each value using a write pointer.");

  for (let read = 0; read < nums.length; read++) {
    const n = input[read];
    if (write < 2 || nums[write - 2] !== n) {
      nums[write] = n;
      push(4, read, `Keep ${n} at slot ${write} (≤ 2 copies so far).`, { kept: true });
      write++;
    } else {
      push(6, read, `Skip ${n} — already two copies kept.`, { kept: false });
    }
  }

  push(8, -1, `New length: ${write}. First ${write} elements are the answer.`, { length: write });
  return steps;
}
