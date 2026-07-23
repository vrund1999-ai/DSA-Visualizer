import type { Highlight, Step } from "@/core/types";

export interface DisappearedData {
  nums: number[];
  i: number | null;
  markedIndex: number | null;
  phase: "mark" | "collect" | "done";
  result: number[];
}

export type DisappearedStep = Step<DisappearedData>;

/**
 * Use the array itself as a hash: for each value v, negate the entry at index
 * |v|−1 to mark "v is present". Afterward, any index still holding a positive
 * value corresponds to a missing number. `line` indexes CODE.
 */
export function disappearedSteps(input: number[]): DisappearedStep[] {
  const nums = [...input];
  const steps: DisappearedStep[] = [];
  const result: number[] = [];

  const snap = (o: Partial<DisappearedData>): DisappearedData => ({
    nums: [...nums],
    i: null,
    markedIndex: null,
    phase: "mark",
    result: [...result],
    ...o,
  });
  const push = (line: number, explanation: string, data: DisappearedData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Mark presence by negating the slot each value points to.", snap({}), []);

  for (let k = 0; k < nums.length; k++) {
    const idx = Math.abs(nums[k]) - 1;
    if (nums[idx] > 0) {
      nums[idx] *= -1;
      push(3, `Value ${Math.abs(nums[k])} — negate slot ${idx} to mark it present.`, snap({ i: k, markedIndex: idx }), [
        { ref: k, role: "current" },
        { ref: idx, role: "swapped" },
      ]);
    } else {
      push(3, `Value ${Math.abs(nums[k])} — slot ${idx} already marked.`, snap({ i: k, markedIndex: idx }), [
        { ref: k, role: "current" },
        { ref: idx, role: "visited" },
      ]);
    }
  }

  push(6, "Any slot still positive means that number never appeared.", snap({ phase: "collect" }), []);
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] > 0) {
      result.push(k + 1);
      push(7, `Slot ${k} is positive — ${k + 1} is missing.`, snap({ i: k, phase: "collect" }), [{ ref: k, role: "target" }]);
    }
  }

  push(8, `Missing numbers: [${result.join(", ")}].`, snap({ i: null, phase: "done" }), []);
  return steps;
}
