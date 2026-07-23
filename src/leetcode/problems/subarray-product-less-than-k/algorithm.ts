import type { Highlight, Step } from "@/core/types";

export interface SubProductInput {
  nums: number[];
  k: number;
}

export interface SubProductData {
  nums: number[];
  k: number;
  left: number;
  right: number | null;
  prod: number;
  count: number;
}

export type SubProductStep = Step<SubProductData>;

/**
 * Sliding window: extend `right`, multiplying into the product. While the product
 * is ≥ k, shrink from the left. Every valid window ending at `right` contributes
 * (right − left + 1) new subarrays. `line` indexes CODE.
 */
export function subProductSteps(input: SubProductInput): SubProductStep[] {
  const { nums, k } = input;
  const steps: SubProductStep[] = [];
  let prod = 1;
  let left = 0;
  let count = 0;

  const win = (right: number, extra: Highlight[] = []): Highlight[] => {
    const hl: Highlight[] = [];
    for (let j = left; j <= right; j++) hl.push({ ref: j, role: "active" });
    return [...hl, ...extra];
  };
  const snap = (o: Partial<SubProductData>): SubProductData => ({ nums: [...nums], k, left, right: null, prod, count, ...o });
  const push = (line: number, explanation: string, data: SubProductData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { count } });
  };

  if (k <= 1) {
    push(1, `k = ${k} ≤ 1 — no subarray can have product < k, return 0.`, snap({}), []);
    return steps;
  }

  push(2, `Count subarrays with product < ${k}.`, snap({}), []);

  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];
    push(4, `Extend to ${nums[right]}: product = ${prod}.`, snap({ right }), win(right - 1).concat({ ref: right, role: "current" }));
    while (prod >= k && left <= right) {
      prod /= nums[left];
      left++;
      push(5, `Product ${prod * nums[left - 1]} ≥ ${k} — drop ${nums[left - 1]} from the left (product ${prod}).`, snap({ right }), win(right).concat({ ref: left - 1, role: "swapped" }));
    }
    count += right - left + 1;
    push(6, `Window [${left}..${right}] adds ${right - left + 1} subarrays. Total ${count}.`, snap({ right }), win(right, [{ ref: right, role: "target" }]));
  }

  push(8, `Total subarrays with product < ${k}: ${count}.`, snap({ right: null }), []);
  return steps;
}
