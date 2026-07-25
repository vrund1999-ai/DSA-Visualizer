import type { Step } from "@/core/types";

export interface ContSubData {
  nums: number[];
  k: number;
  pos: number | null;
  sum: number;
  remainder: number | null;
  /** [start, end] of a found good subarray */
  found: [number, number] | null;
  /** first-occurrence map (remainder -> index) as entries */
  first: [number, number][];
  answer: boolean | null;
}

export type ContSubStep = Step<ContSubData>;

/**
 * Two prefix sums with the same remainder mod k bound a subarray divisible by k. We
 * store each remainder's earliest index and require the span to be at least 2 long.
 * `line` indexes CODE.
 */
export function contSubSteps(nums: number[], k: number): ContSubStep[] {
  const steps: ContSubStep[] = [];
  const first = new Map<number, number>([[0, -1]]);
  let sum = 0;

  const snap = (pos: number, o: Partial<ContSubData>): ContSubData => ({ nums: [...nums], k, pos, sum, remainder: null, found: null, first: [...first.entries()], answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<ContSubData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(2, `Look for a length ≥ 2 subarray whose sum is a multiple of ${k}.`, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const r = ((sum % k) + k) % k;
    if (first.has(r)) {
      const start = first.get(r)!;
      if (i - start >= 2) {
        push(7, `Remainder ${r} seen at ${start}; span [${start + 1}, ${i}] length ${i - start} → true.`, i, { remainder: r, found: [start + 1, i], answer: true });
        return steps;
      }
      push(6, `Remainder ${r} seen at ${start} but span too short.`, i, { remainder: r });
    } else {
      first.set(r, i);
      push(8, `Remainder ${r} new — remember index ${i}.`, i, { remainder: r });
    }
  }

  push(10, "No qualifying subarray → false.", -1, { answer: false });
  return steps;
}
