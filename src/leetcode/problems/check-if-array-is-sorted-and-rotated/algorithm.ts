import type { Highlight, Step } from "@/core/types";

export interface CheckRotatedData {
  nums: number[];
  i: number | null;
  breaks: number;
  result: boolean | null;
}

export type CheckRotatedStep = Step<CheckRotatedData>;

/**
 * A sorted-then-rotated array wraps around with at most one place where an
 * element exceeds its (circular) successor. Count those drops; ≤ 1 means it's a
 * rotation of a sorted array. `line` indexes CODE.
 */
export function checkRotatedSteps(nums: number[]): CheckRotatedStep[] {
  const steps: CheckRotatedStep[] = [];
  const n = nums.length;
  let breaks = 0;

  const snap = (o: Partial<CheckRotatedData>): CheckRotatedData => ({ nums: [...nums], i: null, breaks, result: null, ...o });
  const push = (line: number, explanation: string, data: CheckRotatedData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { breaks } });
  };

  push(2, "Count circular positions where an element exceeds the next.", snap({}), []);

  for (let i = 0; i < n; i++) {
    const next = (i + 1) % n;
    if (nums[i] > nums[next]) {
      breaks++;
      push(4, `nums[${i}]=${nums[i]} > nums[${next}]=${nums[next]} — a drop (${breaks} total).`, snap({ i }), [
        { ref: i, role: "swapped" },
        { ref: next, role: "compared" },
      ]);
    } else {
      push(4, `nums[${i}]=${nums[i]} ≤ nums[${next}]=${nums[next]} — ok.`, snap({ i }), [{ ref: i, role: "sorted" }]);
    }
  }

  const result = breaks <= 1;
  push(5, result ? `${breaks} drop(s) ≤ 1 — it's a sorted, rotated array.` : `${breaks} drops > 1 — not sorted+rotated.`, snap({ i: null, result }), []);
  return steps;
}
