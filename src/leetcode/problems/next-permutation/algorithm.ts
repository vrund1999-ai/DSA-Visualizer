import type { Highlight, Step } from "@/core/types";

export interface NextPermData {
  nums: number[];
  pivot: number | null;
  i: number | null;
  j: number | null;
}

export type NextPermStep = Step<NextPermData>;

/**
 * Next lexicographic permutation: find the rightmost ascending pair (pivot),
 * swap the pivot with the smallest suffix value still larger than it, then
 * reverse the (descending) suffix to make it the smallest arrangement. `line`
 * indexes CODE.
 */
export function nextPermSteps(input: number[]): NextPermStep[] {
  const nums = [...input];
  const steps: NextPermStep[] = [];
  const n = nums.length;

  const snap = (o: Partial<NextPermData>): NextPermData => ({
    nums: [...nums],
    pivot: null,
    i: null,
    j: null,
    ...o,
  });
  const push = (line: number, explanation: string, highlights: Highlight[], o: Partial<NextPermData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights });
  };

  let i = n - 2;
  push(1, "Scan from the right for the first value smaller than its successor (the pivot).", []);
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    push(2, `nums[${i}] = ${nums[i]} ≥ nums[${i + 1}] = ${nums[i + 1]} — keep scanning left.`, [
      { ref: i, role: "current" },
      { ref: i + 1, role: "compared" },
    ], { i });
    i--;
  }

  if (i >= 0) {
    push(3, `Pivot is nums[${i}] = ${nums[i]}.`, [{ ref: i, role: "pivot" }], { pivot: i });
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      push(5, `nums[${j}] = ${nums[j]} ≤ pivot ${nums[i]} — move left for a bigger value.`, [
        { ref: i, role: "pivot" },
        { ref: j, role: "current" },
      ], { pivot: i, j });
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
    push(6, `Swap pivot with nums[${j}] — now nums[${i}] = ${nums[i]}.`, [
      { ref: i, role: "swapped" },
      { ref: j, role: "swapped" },
    ], { pivot: i });
  } else {
    push(3, "No pivot — the array is the largest permutation; it wraps to the smallest.", []);
  }

  // Reverse the suffix after i.
  let l = i + 1;
  let r = n - 1;
  push(8, `Reverse the suffix starting at index ${i + 1} to make it ascending.`, [], {});
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    push(8, `Reverse: swap positions ${l} and ${r}.`, [
      { ref: l, role: "active" },
      { ref: r, role: "active" },
    ]);
    l++;
    r--;
  }

  push(9, "Done — this is the next permutation.", nums.map((_, k) => ({ ref: k, role: "sorted" }) as Highlight));
  return steps;
}
