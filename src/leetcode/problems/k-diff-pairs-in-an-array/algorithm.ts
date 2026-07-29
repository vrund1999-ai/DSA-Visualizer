import type { Step } from "@/core/types";

export interface KDiffData {
  nums: number[];
  k: number;
  count: [number, number][];
  /** value being examined */
  v: number | null;
  /** its partner v + k, if a pair is formed */
  partner: number | null;
  found: boolean;
  pairs: number;
  answer: number | null;
}

export type KDiffStep = Step<KDiffData>;

/**
 * Each distinct value is the smaller member of at most one k-diff pair, so we count values whose
 * partner v+k also exists (for k > 0), or values that appear at least twice (for k = 0). A frequency
 * map answers both in O(1) per value. `line` indexes CODE.
 */
export function kDiffSteps(nums: number[], k: number): KDiffStep[] {
  const steps: KDiffStep[] = [];
  const count = new Map<number, number>();
  for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1);
  let pairs = 0;

  const snap = (o: Partial<KDiffData>): KDiffData => ({ nums, k, count: [...count.entries()].sort((a, b) => a[0] - b[0]), v: null, partner: null, found: false, pairs, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KDiffData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Count values, then look for pairs with absolute difference ${k}.`);

  for (const [v, c] of [...count.entries()].sort((a, b) => a[0] - b[0])) {
    if (k === 0) {
      if (c >= 2) {
        pairs++;
        push(7, `${v} appears ${c}× → one k=0 pair (count ${pairs}).`, { v, found: true });
      } else {
        push(7, `${v} appears once → no pair.`, { v });
      }
    } else if (count.has(v + k)) {
      pairs++;
      push(9, `${v} and ${v + k} both exist → pair (count ${pairs}).`, { v, partner: v + k, found: true });
    } else {
      push(8, `${v} has no partner ${v + k}.`, { v });
    }
  }

  push(12, `Number of unique k-diff pairs: ${pairs}.`, { answer: pairs });
  return steps;
}
