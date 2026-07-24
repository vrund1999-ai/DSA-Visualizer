import type { Highlight, Step } from "@/core/types";

export interface TriangleData {
  nums: number[];
  k: number | null;
  l: number | null;
  r: number | null;
  count: number;
}

export type TriangleStep = Step<TriangleData>;

/**
 * Sort, fix the largest side k, then two-pointer l/r over the rest. If
 * nums[l] + nums[r] > nums[k], every index between l and r also works with r, so
 * add r − l and shrink r; otherwise the sum is too small, so advance l. `line`
 * indexes CODE.
 */
export function triangleSteps(input: number[]): TriangleStep[] {
  const nums = [...input].sort((a, b) => a - b);
  const steps: TriangleStep[] = [];
  let count = 0;

  const snap = (o: Partial<TriangleData>): TriangleData => ({ nums: [...nums], k: null, l: null, r: null, count, ...o });
  const push = (line: number, explanation: string, data: TriangleData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { count } });
  };

  push(1, "Sort, then fix the longest side and two-pointer the other two.", snap({}), []);

  for (let k = nums.length - 1; k >= 2; k--) {
    let l = 0;
    let r = k - 1;
    while (l < r) {
      const marks: Highlight[] = [
        { ref: k, role: "pivot" },
        { ref: l, role: "current" },
        { ref: r, role: "active" },
      ];
      if (nums[l] + nums[r] > nums[k]) {
        count += r - l;
        push(7, `${nums[l]} + ${nums[r]} > ${nums[k]} — all ${r - l} pairs (l..${r - 1}, ${r}) form triangles. Count ${count}.`, snap({ k, l, r }), marks);
        r--;
      } else {
        push(9, `${nums[l]} + ${nums[r]} ≤ ${nums[k]} — too short, advance l.`, snap({ k, l, r }), marks);
        l++;
      }
    }
  }

  push(12, `Total valid triangles: ${count}.`, snap({}), []);
  return steps;
}
