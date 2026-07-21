import type { Highlight, Step } from "@/core/types";

export interface JumpData {
  nums: number[];
  i: number | null;
  reach: number;
  result: boolean | null;
}

export type JumpStep = Step<JumpData>;

/**
 * Greedy: track the furthest index reachable so far. If the scan ever passes
 * that frontier, the end is unreachable; otherwise each index extends the reach.
 * `line` indexes CODE.
 */
export function jumpSteps(nums: number[]): JumpStep[] {
  const steps: JumpStep[] = [];
  let reach = 0;

  const inReach = (upTo: number): Highlight[] =>
    Array.from({ length: Math.min(upTo, nums.length - 1) + 1 }, (_, k) => ({ ref: k, role: "active" as const }));
  const snap = (o: Partial<JumpData>): JumpData => ({ nums: [...nums], i: null, reach, result: null, ...o });
  const push = (line: number, explanation: string, data: JumpData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { reach } });
  };

  push(1, "Track the furthest index reachable so far.", snap({}), inReach(0));

  for (let i = 0; i < nums.length; i++) {
    if (i > reach) {
      push(3, `Index ${i} is beyond reach ${reach} — the end is unreachable.`, snap({ i, result: false }), [
        ...inReach(reach),
        { ref: i, role: "swapped" },
      ]);
      return steps;
    }
    reach = Math.max(reach, i + nums[i]);
    push(4, `From ${i} (jump ${nums[i]}) reach extends to ${Math.min(reach, nums.length - 1)}.`, snap({ i }), [
      ...inReach(reach),
      { ref: i, role: "current" },
    ]);
  }

  push(6, "Every index stayed within reach — the last index is reachable.", snap({ i: null, result: true }), inReach(reach));
  return steps;
}
