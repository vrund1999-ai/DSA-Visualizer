import type { Highlight, Step } from "@/core/types";

export interface SummaryRangesData {
  nums: number[];
  startIdx: number | null;
  endIdx: number | null;
  result: string[];
}

export type SummaryRangesStep = Step<SummaryRangesData>;

/**
 * Sweep once, extending a run while consecutive values keep increasing by 1. Each
 * maximal run becomes "a" or "a->b". `line` indexes CODE.
 */
export function summaryRangesSteps(nums: number[]): SummaryRangesStep[] {
  const steps: SummaryRangesStep[] = [];
  const result: string[] = [];

  const snap = (o: Partial<SummaryRangesData>): SummaryRangesData => ({
    nums: [...nums],
    startIdx: null,
    endIdx: null,
    result: [...result],
    ...o,
  });
  const push = (line: number, explanation: string, data: SummaryRangesData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Group consecutive runs into range strings.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const start = i;
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
      push(5, `${nums[i]} continues the run from ${nums[start]}.`, snap({ startIdx: start, endIdx: i }), rangeHl(start, i));
    }
    const str = nums[start] === nums[i] ? `${nums[start]}` : `${nums[start]}->${nums[i]}`;
    result.push(str);
    push(6, `Record range "${str}".`, snap({ startIdx: start, endIdx: i }), rangeHl(start, i, "target"));
  }

  push(9, `Ranges: [${result.map((r) => `"${r}"`).join(", ")}].`, snap({}), []);
  return steps;
}

function rangeHl(start: number, end: number, role: "active" | "target" = "active"): Highlight[] {
  const hl: Highlight[] = [];
  for (let k = start; k <= end; k++) hl.push({ ref: k, role });
  return hl;
}
