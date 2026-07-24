import type { Highlight, Step } from "@/core/types";

export interface FourSumInput {
  nums: number[];
  target: number;
}

export interface FourSumData {
  nums: number[];
  target: number;
  i: number | null;
  j: number | null;
  l: number | null;
  r: number | null;
  sum: number | null;
  quads: number[][];
}

export type FourSumStep = Step<FourSumData>;

/**
 * Sort, fix the two outer indices i and j, then two-pointer scan the remainder
 * for a pair completing the target — the 3Sum idea with one extra fixed index.
 * Skipping duplicate anchors avoids repeated quadruplets. `line` indexes CODE.
 */
export function fourSumSteps(input: FourSumInput): FourSumStep[] {
  const nums = [...input.nums].sort((a, b) => a - b);
  const { target } = input;
  const n = nums.length;
  const steps: FourSumStep[] = [];
  const quads: number[][] = [];

  const snap = (o: Partial<FourSumData>): FourSumData => ({
    nums: [...nums],
    target,
    i: null,
    j: null,
    l: null,
    r: null,
    sum: null,
    quads: quads.map((q) => [...q]),
    ...o,
  });
  const push = (line: number, explanation: string, data: FourSumData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { found: quads.length } });
  };

  push(1, "Sort, then fix two anchors and two-pointer the rest.", snap({}), []);

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let l = j + 1;
      let r = n - 1;
      while (l < r) {
        const s = nums[i] + nums[j] + nums[l] + nums[r];
        const marks: Highlight[] = [
          { ref: i, role: "pivot" },
          { ref: j, role: "pivot" },
          { ref: l, role: "current" },
          { ref: r, role: "active" },
        ];
        push(8, `${nums[i]}+${nums[j]}+${nums[l]}+${nums[r]} = ${s} (target ${target}).`, snap({ i, j, l, r, sum: s }), marks);
        if (s === target) {
          quads.push([nums[i], nums[j], nums[l], nums[r]]);
          push(9, `Sum equals target — record [${nums[i]}, ${nums[j]}, ${nums[l]}, ${nums[r]}].`, snap({ i, j, l, r, sum: s }), [
            { ref: i, role: "target" }, { ref: j, role: "target" }, { ref: l, role: "target" }, { ref: r, role: "target" },
          ]);
          l++;
          r--;
          while (l < r && nums[l] === nums[l - 1]) l++;
          while (l < r && nums[r] === nums[r + 1]) r--;
        } else if (s < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }

  push(14, `Found ${quads.length} unique quadruplet(s).`, snap({}), []);
  return steps;
}
