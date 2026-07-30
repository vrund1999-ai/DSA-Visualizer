import type { Step } from "@/core/types";

export interface DistinctData {
  nums: number[];
  /** current index scanned from the right */
  scan: number | null;
  /** indices confirmed distinct (the growing suffix) */
  distinctFrom: number;
  /** index where the first repeat (from the right) was found */
  dupIndex: number | null;
  ops: number | null;
}

export type DistinctStep = Step<DistinctData>;

/**
 * Each operation deletes the first 3 elements. Scanning from the right, the first repeated value at index i
 * means the whole prefix 0..i must be wiped, costing ⌈(i+1)/3⌉ operations; if no repeat exists the array is
 * already distinct (0). `line` indexes CODE.
 */
export function distinctSteps(nums: number[]): DistinctStep[] {
  const steps: DistinctStep[] = [];
  const seen = new Set<number>();

  const snap = (o: Partial<DistinctData>): DistinctData => ({
    nums,
    scan: null,
    distinctFrom: nums.length,
    dupIndex: null,
    ops: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<DistinctData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Scan from the right; the first repeat fixes how much prefix must go.`);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (seen.has(nums[i])) {
      const ops = Math.ceil((i + 1) / 3);
      push(5, `nums[${i}] = ${nums[i]} repeats → wipe prefix 0..${i} (${i + 1} elem) = ${ops} op(s).`, {
        scan: i,
        distinctFrom: i + 1,
        dupIndex: i,
        ops,
      });
      return steps;
    }
    seen.add(nums[i]);
    push(6, `nums[${i}] = ${nums[i]} is new; distinct suffix now starts at ${i}.`, { scan: i, distinctFrom: i });
  }

  push(8, `No repeats — array is already distinct, 0 operations.`, { distinctFrom: 0, ops: 0 });
  return steps;
}
