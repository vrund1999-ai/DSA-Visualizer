import type { Step } from "@/core/types";

export interface GoodPairsData {
  nums: number[];
  pos: number | null;
  /** count map entries */
  seen: [number, number][];
  /** pairs added this step */
  added: number;
  pairs: number;
  answer: number | null;
}

export type GoodPairsStep = Step<GoodPairsData>;

/**
 * When scanning to index i, every earlier occurrence of nums[i] forms a good pair with
 * it, so a running count of each value's occurrences gives the added pairs in O(1).
 * `line` indexes CODE.
 */
export function goodPairsSteps(nums: number[]): GoodPairsStep[] {
  const steps: GoodPairsStep[] = [];
  const seen = new Map<number, number>();
  let pairs = 0;

  const snap = (pos: number, o: Partial<GoodPairsData>): GoodPairsData => ({ nums: [...nums], pos, seen: [...seen.entries()], added: 0, pairs, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<GoodPairsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(2, "Count each value; a repeat adds one pair per earlier occurrence.", -1);

  for (let i = 0; i < nums.length; i++) {
    const c = seen.get(nums[i]) ?? 0;
    pairs += c;
    seen.set(nums[i], c + 1);
    push(5, `${nums[i]} seen ${c}× before → +${c} pair(s), total ${pairs}.`, i, { added: c });
  }

  push(8, `Good pairs: ${pairs}.`, -1, { answer: pairs });
  return steps;
}
