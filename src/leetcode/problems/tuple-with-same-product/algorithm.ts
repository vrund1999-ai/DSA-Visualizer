import type { Step } from "@/core/types";

export interface TupleData {
  nums: number[];
  i: number | null;
  j: number | null;
  product: number | null;
  /** product -> number of earlier pairs with that product */
  counts: [number, number][];
  /** pairs already seen for the current product, before incrementing */
  matched: number;
  tuples: number;
  answer: number | null;
}

export type TupleStep = Step<TupleData>;

/**
 * Every unordered pair {a,b} with the same product a·b = c·d forms tuples with each earlier
 * pair of the same product. Two pairs yield 8 ordered tuples (a,b,c,d), so we count pairs per
 * product and, for each new pair, add 8× the pairs already seen for that product. `line` indexes CODE.
 */
export function tupleSteps(nums: number[]): TupleStep[] {
  const steps: TupleStep[] = [];
  const count = new Map<number, number>();
  let tuples = 0;

  const snap = (o: Partial<TupleData>): TupleData => ({ nums, i: null, j: null, product: null, counts: [...count.entries()], matched: 0, tuples, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TupleData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Count how many pairs share each product; each earlier match adds 8 tuples.");

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const p = nums[i] * nums[j];
      const c = count.get(p) ?? 0;
      tuples += c * 8;
      count.set(p, c + 1);
      push(8, `Pair (${nums[i]}, ${nums[j]}) → product ${p}; ${c} earlier pair(s) add ${c * 8} tuples (total ${tuples}).`, { i, j, product: p, matched: c });
    }
  }

  push(10, `Total tuples: ${tuples}.`, { answer: tuples });
  return steps;
}
