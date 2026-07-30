import type { Step } from "@/core/types";

export interface ApplyOpsData {
  nums: number[];
  phase: "merge" | "shift" | "done";
  i: number | null;
  j: number | null;
  answer: number[] | null;
}

export type ApplyOpsStep = Step<ApplyOpsData>;

/**
 * First pass: scan left to right, and whenever two adjacent values are equal, double the left one and
 * zero the right. Second pass: stably shift all non-zero values to the front, padding the rest with
 * zeros. `line` indexes CODE.
 */
export function applyOpsSteps(input: number[]): ApplyOpsStep[] {
  const steps: ApplyOpsStep[] = [];
  const nums = [...input];
  const n = nums.length;

  const snap = (o: Partial<ApplyOpsData>): ApplyOpsData => ({ nums: [...nums], phase: "merge", i: null, j: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ApplyOpsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "First pass: merge equal adjacent values (double left, zero right).");
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
      push(5, `nums[${i}] == nums[${i + 1}]: double to ${nums[i]}, zero the next.`, { phase: "merge", i });
    } else {
      push(3, `nums[${i}] ≠ nums[${i + 1}]: no merge.`, { phase: "merge", i });
    }
  }

  push(8, "Second pass: shift all non-zeros to the front.", { phase: "shift" });
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      const v = nums[i];
      nums[i] = 0;
      nums[j] = v;
      push(10, `Move ${v} to position ${j}.`, { phase: "shift", i, j });
      j++;
    }
  }
  // remaining are already 0
  push(12, `Result: [${nums.join(", ")}].`, { phase: "done", answer: [...nums] });
  return steps;
}
