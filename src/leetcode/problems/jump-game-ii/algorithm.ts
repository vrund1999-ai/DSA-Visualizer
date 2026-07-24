import type { Highlight, Step } from "@/core/types";

export interface JumpIIData {
  nums: number[];
  i: number | null;
  curEnd: number;
  farthest: number;
  jumps: number;
}

export type JumpIIStep = Step<JumpIIData>;

/**
 * Greedy BFS by layers: as we scan, `farthest` tracks the furthest index
 * reachable within the current jump. When the scan reaches the current jump's
 * boundary, we must jump — bumping the count and extending the boundary to
 * `farthest`. `line` indexes CODE.
 */
export function jumpIISteps(nums: number[]): JumpIIStep[] {
  const steps: JumpIIStep[] = [];
  let jumps = 0;
  let curEnd = 0;
  let farthest = 0;

  const snap = (o: Partial<JumpIIData>): JumpIIData => ({ nums: [...nums], i: null, curEnd, farthest, jumps, ...o });
  const push = (line: number, explanation: string, data: JumpIIData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { jumps } });
  };

  push(1, "Greedily extend the reach; jump when the current boundary is hit.", snap({}), []);

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    const reach: Highlight[] = [];
    for (let k = 0; k <= Math.min(farthest, nums.length - 1); k++) reach.push({ ref: k, role: "active" });
    push(3, `At ${i}: reach extends to ${Math.min(farthest, nums.length - 1)}.`, snap({ i }), [...reach, { ref: i, role: "current" }]);
    if (i === curEnd) {
      jumps++;
      curEnd = farthest;
      push(5, `Hit the boundary at ${i} — jump #${jumps}; new boundary ${Math.min(curEnd, nums.length - 1)}.`, snap({ i }), [{ ref: i, role: "swapped" }, { ref: Math.min(curEnd, nums.length - 1), role: "target" }]);
    }
  }

  push(8, `Minimum jumps to reach the end: ${jumps}.`, snap({ i: null }), []);
  return steps;
}
