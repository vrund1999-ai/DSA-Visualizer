import type { Step } from "@/core/types";

export interface RangeAndData {
  origLeft: number;
  origRight: number;
  left: number;
  right: number;
  shift: number;
  answer: number | null;
}

export type RangeAndStep = Step<RangeAndData>;

/**
 * Bitwise AND of Numbers Range: the AND of every number in [left, right] keeps only the common high bit
 * prefix — any bit that differs across the range gets cleared because some number toggles it. Shift both
 * ends right until equal, then shift that common prefix back. `line` indexes CODE.
 */
export function rangeAndSteps(origLeft: number, origRight: number): RangeAndStep[] {
  const steps: RangeAndStep[] = [];
  let left = origLeft;
  let right = origRight;
  let shift = 0;

  const snap = (o: Partial<RangeAndData>): RangeAndData => ({
    origLeft,
    origRight,
    left,
    right,
    shift,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<RangeAndData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `AND of [${origLeft}, ${origRight}] = their common bit prefix.`);

  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
    push(6, `Shift right: left=${left}, right=${right}, shift=${shift}.`);
  }

  const answer = left << shift;
  push(8, `Common prefix ${left} << ${shift} = ${answer}.`, { answer });
  return steps;
}
