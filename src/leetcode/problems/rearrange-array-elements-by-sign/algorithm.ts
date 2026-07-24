import type { Step } from "@/core/types";

export interface RearrangeData {
  nums: number[];
  res: (number | null)[];
  /** index of nums being read */
  reading: number | null;
  /** index of res just written */
  wrote: number | null;
  done: boolean;
}

export type RearrangeStep = Step<RearrangeData>;

/**
 * With equal positives and negatives, positives belong at even indices and negatives
 * at odd indices. Two write cursors (starting at 0 and 1, stepping by 2) place each
 * value while preserving relative order within each sign. `line` indexes CODE.
 */
export function rearrangeSteps(nums: number[]): RearrangeStep[] {
  const steps: RearrangeStep[] = [];
  const res: (number | null)[] = new Array(nums.length).fill(null);
  let pos = 0;
  let neg = 1;

  const snap = (o: Partial<RearrangeData>): RearrangeData => ({ nums: [...nums], res: [...res], reading: null, wrote: null, done: false, ...o });
  const push = (line: number, explanation: string, data: RearrangeData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Positives go to even slots, negatives to odd slots.", snap({}));

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (x > 0) {
      res[pos] = x;
      push(4, `${x} > 0 → even slot ${pos}.`, snap({ reading: i, wrote: pos }));
      pos += 2;
    } else {
      res[neg] = x;
      push(5, `${x} < 0 → odd slot ${neg}.`, snap({ reading: i, wrote: neg }));
      neg += 2;
    }
  }

  push(7, `Result: [${res.join(", ")}].`, snap({ done: true }));
  return steps;
}
