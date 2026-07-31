import type { Step } from "@/core/types";

export interface BrokenCalcData {
  startValue: number;
  target: number;
  /** current value (working backwards from target) */
  current: number;
  ops: number;
  /** the last reverse operation applied */
  lastOp: "halve" | "increment" | "subtract" | null;
  answer: number | null;
}

export type BrokenCalcStep = Step<BrokenCalcData>;

/**
 * Broken Calculator: forward you may double or subtract 1. Working backwards from target is greedy — an even
 * target must have come from a halving, an odd one from a +1 (undoing a −1). Once target drops to or below
 * start, the rest are single −1s. `line` indexes CODE.
 */
export function brokenCalcSteps(startValue: number, target: number): BrokenCalcStep[] {
  const steps: BrokenCalcStep[] = [];
  let current = target;
  let ops = 0;

  const snap = (o: Partial<BrokenCalcData>): BrokenCalcData => ({
    startValue,
    target,
    current,
    ops,
    lastOp: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<BrokenCalcData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Work backwards from ${target} to ${startValue}.`);

  while (current > startValue) {
    ops++;
    if (current % 2 === 0) {
      current /= 2;
      push(5, `${current * 2} is even → halve to ${current} (undo a double). ops ${ops}.`, { lastOp: "halve" });
    } else {
      current++;
      push(6, `${current - 1} is odd → +1 to ${current} (undo a −1). ops ${ops}.`, { lastOp: "increment" });
    }
  }

  const answer = ops + (startValue - current);
  push(8, `Add ${startValue - current} subtraction(s) to reach ${startValue} → total ${answer}.`, {
    lastOp: "subtract",
    answer,
  });
  return steps;
}
