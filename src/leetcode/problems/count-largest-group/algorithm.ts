import type { Step } from "@/core/types";

export interface LargestGroupData {
  n: number;
  /** number currently placed into its digit-sum group */
  scan: number | null;
  /** groups keyed by digit sum, sorted ascending by sum */
  buckets: { sum: number; members: number[] }[];
  maxSize: number | null;
  answer: number | null;
}

export type LargestGroupStep = Step<LargestGroupData>;

const digitSum = (i: number) => `${i}`.split("").reduce((a, d) => a + +d, 0);

/**
 * Group the integers 1..n by their digit sum, then count how many groups share the largest size. `line`
 * indexes CODE.
 */
export function largestGroupSteps(n: number): LargestGroupStep[] {
  const steps: LargestGroupStep[] = [];
  const groups = new Map<number, number[]>();

  const bucketsArr = () =>
    [...groups.entries()].sort((a, b) => a[0] - b[0]).map(([sum, members]) => ({ sum, members: [...members] }));
  const snap = (o: Partial<LargestGroupData>): LargestGroupData => ({
    n,
    scan: null,
    buckets: bucketsArr(),
    maxSize: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<LargestGroupData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Group 1..${n} by digit sum.`);

  for (let i = 1; i <= n; i++) {
    const s = digitSum(i);
    if (!groups.has(s)) groups.set(s, []);
    groups.get(s)!.push(i);
    push(4, `${i} has digit sum ${s} → group ${s}.`, { scan: i });
  }

  const maxSize = Math.max(...[...groups.values()].map((g) => g.length));
  let count = 0;
  for (const g of groups.values()) if (g.length === maxSize) count++;
  push(9, `Largest group size is ${maxSize}; ${count} group(s) reach it.`, { maxSize, answer: count });
  return steps;
}
