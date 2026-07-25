import type { Step } from "@/core/types";

export type Phase = "xor" | "bit" | "split" | "done";

export interface SingleIIIData {
  nums: number[];
  idx: number | null;
  phase: Phase;
  xorAll: number;
  bit: number;
  a: number;
  b: number;
  /** which group the current number went to during the split phase */
  group: "a" | "b" | null;
  answer: [number, number] | null;
}

export type SingleIIIStep = Step<SingleIIIData>;

/**
 * XOR-ing everything cancels the paired numbers, leaving a^b for the two singletons. Any set
 * bit of a^b is a position where a and b differ, so it partitions all numbers into two groups
 * — each singleton lands alone in its group, and XOR-ing each group recovers it. `line` indexes CODE.
 */
export function singleIIISteps(nums: number[]): SingleIIIStep[] {
  const steps: SingleIIIStep[] = [];
  let xorAll = 0;
  let bit = 0;
  let a = 0;
  let b = 0;

  const snap = (o: Partial<SingleIIIData>): SingleIIIData => ({ nums, idx: null, phase: "xor", xorAll, bit, a, b, group: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SingleIIIData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "XOR every element; pairs cancel, leaving a ^ b for the two singletons.");

  for (let i = 0; i < nums.length; i++) {
    xorAll ^= nums[i];
    push(2, `XOR in ${nums[i]} → running xor = ${xorAll}.`, { idx: i, phase: "xor" });
  }

  bit = xorAll & -xorAll;
  push(3, `Lowest set bit of ${xorAll} is ${bit} — a and b differ here.`, { phase: "bit" });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & bit) {
      a ^= nums[i];
      push(6, `${nums[i]} has the bit → XOR into group A (a = ${a}).`, { idx: i, phase: "split", group: "a" });
    } else {
      b ^= nums[i];
      push(7, `${nums[i]} lacks the bit → XOR into group B (b = ${b}).`, { idx: i, phase: "split", group: "b" });
    }
  }

  push(9, `The two singletons are ${a} and ${b}.`, { phase: "done", answer: [a, b] });
  return steps;
}
