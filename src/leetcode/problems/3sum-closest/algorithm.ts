import type { Highlight, Step } from "@/core/types";

export interface ThreeSumClosestInput {
  nums: number[];
  target: number;
}

export interface ThreeSumClosestData {
  nums: number[];
  target: number;
  i: number | null;
  l: number | null;
  r: number | null;
  sum: number | null;
  best: number;
}

export type ThreeSumClosestStep = Step<ThreeSumClosestData>;

/**
 * Sort, fix an anchor, then two-pointer the rest; move the pointers toward the
 * target and keep whichever triple sum is nearest. `line` indexes CODE.
 */
export function threeSumClosestSteps(input: ThreeSumClosestInput): ThreeSumClosestStep[] {
  const nums = [...input.nums].sort((a, b) => a - b);
  const { target } = input;
  const steps: ThreeSumClosestStep[] = [];
  let best = nums[0] + nums[1] + nums[2];

  const snap = (o: Partial<ThreeSumClosestData>): ThreeSumClosestData => ({ nums: [...nums], target, i: null, l: null, r: null, sum: null, best, ...o });
  const push = (line: number, explanation: string, data: ThreeSumClosestData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best } });
  };

  push(2, `Sort, then find the triple sum closest to ${target}.`, snap({}), []);

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      const marks: Highlight[] = [
        { ref: i, role: "pivot" },
        { ref: l, role: "current" },
        { ref: r, role: "active" },
      ];
      const improved = Math.abs(s - target) < Math.abs(best - target);
      if (improved) best = s;
      push(8, `${nums[i]}+${nums[l]}+${nums[r]} = ${s}${improved ? ` — closer (best ${best})` : ""}.`, snap({ i, l, r, sum: s }), marks);
      if (s === target) {
        push(9, `Exactly ${target} — can't get closer.`, snap({ i, l, r, sum: s }), marks);
        return steps;
      }
      if (s < target) l++;
      else r--;
    }
  }

  push(13, `Closest achievable sum is ${best}.`, snap({}), []);
  return steps;
}
