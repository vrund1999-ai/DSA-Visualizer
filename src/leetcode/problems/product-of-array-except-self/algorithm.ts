import type { Highlight, Step } from "@/core/types";

export interface ProductData {
  nums: number[];
  res: number[];
  i: number | null;
  phase: "prefix" | "suffix" | "done";
  running: number;
}

export type ProductStep = Step<ProductData>;

/**
 * Two passes, no division. First pass fills res[i] with the product of
 * everything to the LEFT of i; second pass multiplies in the product of
 * everything to the RIGHT. `line` indexes CODE.
 */
export function productSteps(nums: number[]): ProductStep[] {
  const steps: ProductStep[] = [];
  const res = new Array(nums.length).fill(1);

  const snap = (o: Partial<ProductData>): ProductData => ({
    nums: [...nums],
    // Normalize -0 (from multiplying by a negative) to 0 for clean output.
    res: res.map((v) => (v === 0 ? 0 : v)),
    i: null,
    phase: "prefix",
    running: 1,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: ProductData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(2, "First pass: fill each slot with the product of everything to its left.", snap({ phase: "prefix" }), []);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    push(4, `res[${i}] = product of the left so far = ${prefix}.`, snap({ i, phase: "prefix", running: prefix }), [
      { ref: `n${i}`, role: "current" },
      { ref: `r${i}`, role: "swapped" },
    ]);
    prefix *= nums[i];
  }

  push(7, "Second pass (right to left): multiply in the product of everything to the right.", snap({ phase: "suffix", running: 1 }), []);
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    push(9, `res[${i}] ×= right product ${suffix} → ${res[i]}.`, snap({ i, phase: "suffix", running: suffix }), [
      { ref: `n${i}`, role: "current" },
      { ref: `r${i}`, role: "target" },
    ]);
    suffix *= nums[i];
  }

  push(12, "Done — each slot holds the product of all other elements.", snap({ i: null, phase: "done" }), nums.map((_, k) => ({ ref: `r${k}`, role: "target" }) as Highlight));
  return steps;
}
