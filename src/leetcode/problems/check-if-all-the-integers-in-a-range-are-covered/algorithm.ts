import type { Step } from "@/core/types";

export interface CoveredData {
  ranges: [number, number][];
  left: number;
  right: number;
  /** integer x currently being checked */
  x: number | null;
  /** index of the range that covers x, if any */
  coveringRange: number | null;
  answer: boolean | null;
}

export type CoveredStep = Step<CoveredData>;

/**
 * Check each integer in [left, right] against the ranges: it must fall inside at
 * least one. The first uncovered integer proves the answer is false. `line` indexes
 * CODE.
 */
export function coveredSteps(ranges: [number, number][], left: number, right: number): CoveredStep[] {
  const steps: CoveredStep[] = [];

  const snap = (o: Partial<CoveredData>): CoveredData => ({ ranges: ranges.map((r) => [...r] as [number, number]), left, right, x: null, coveringRange: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: CoveredData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Every integer in [${left}, ${right}] must be inside some range.`, snap({}));

  for (let x = left; x <= right; x++) {
    let coveringRange: number | null = null;
    for (let r = 0; r < ranges.length; r++) {
      if (ranges[r][0] <= x && x <= ranges[r][1]) {
        coveringRange = r;
        break;
      }
    }
    if (coveringRange === null) {
      push(6, `${x} is not covered by any range → false.`, snap({ x, answer: false }));
      return steps;
    }
    push(4, `${x} is covered by [${ranges[coveringRange][0]}, ${ranges[coveringRange][1]}].`, snap({ x, coveringRange }));
  }

  push(8, "Every integer is covered → true.", snap({ answer: true }));
  return steps;
}
