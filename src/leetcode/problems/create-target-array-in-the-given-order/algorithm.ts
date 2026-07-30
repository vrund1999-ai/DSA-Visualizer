import type { Step } from "@/core/types";

export interface TargetArrayData {
  nums: number[];
  index: number[];
  src: number | null;
  target: number[];
  insertedAt: number | null;
  done: boolean;
}

export type TargetArrayStep = Step<TargetArrayData>;

/**
 * Build the target array by inserting each nums[i] at position index[i], shifting any later elements to the
 * right. `line` indexes CODE.
 */
export function targetArraySteps(nums: number[], index: number[]): TargetArrayStep[] {
  const steps: TargetArrayStep[] = [];
  const target: number[] = [];

  const snap = (o: Partial<TargetArrayData>): TargetArrayData => ({
    nums,
    index,
    src: null,
    target: [...target],
    insertedAt: null,
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<TargetArrayData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Insert each value at its index, shifting later elements right.`);

  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
    push(3, `Insert nums[${i}] = ${nums[i]} at position ${index[i]}.`, { src: i, insertedAt: index[i] });
  }

  push(7, `Target array: [${target.join(", ")}].`, { done: true });
  return steps;
}
