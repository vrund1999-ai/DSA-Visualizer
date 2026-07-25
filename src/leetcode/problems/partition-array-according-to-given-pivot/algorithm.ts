import type { Step } from "@/core/types";

export interface PivotArrayData {
  nums: number[];
  pivot: number;
  cur: number | null;
  less: number[];
  equal: number[];
  greater: number[];
  /** which bucket the current element went to */
  bucket: "less" | "equal" | "greater" | null;
  done: boolean;
}

export type PivotArrayStep = Step<PivotArrayData>;

/**
 * A single stable pass routes each value into one of three buckets — less than,
 * equal to, or greater than the pivot — then concatenation gives the answer while
 * preserving relative order within each group. `line` indexes CODE.
 */
export function pivotArraySteps(nums: number[], pivot: number): PivotArrayStep[] {
  const steps: PivotArrayStep[] = [];
  const less: number[] = [];
  const equal: number[] = [];
  const greater: number[] = [];

  const snap = (o: Partial<PivotArrayData>): PivotArrayData => ({ nums: [...nums], pivot, cur: null, less: [...less], equal: [...equal], greater: [...greater], bucket: null, done: false, ...o });
  const push = (line: number, explanation: string, data: PivotArrayData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Route each value relative to pivot ${pivot}.`, snap({}));

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (x < pivot) {
      less.push(x);
      push(3, `${x} < ${pivot} → less.`, snap({ cur: i, bucket: "less" }));
    } else if (x === pivot) {
      equal.push(x);
      push(4, `${x} = ${pivot} → equal.`, snap({ cur: i, bucket: "equal" }));
    } else {
      greater.push(x);
      push(5, `${x} > ${pivot} → greater.`, snap({ cur: i, bucket: "greater" }));
    }
  }

  push(7, `Result: [${[...less, ...equal, ...greater].join(", ")}].`, snap({ done: true }));
  return steps;
}
