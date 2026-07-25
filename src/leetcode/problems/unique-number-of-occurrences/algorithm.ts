import type { Step } from "@/core/types";

export interface UniqueOccData {
  arr: number[];
  /** count map as entries */
  counts: [number, number][];
  /** distinct counts collected so far */
  seenCounts: number[];
  /** the count value currently checked */
  checking: number | null;
  duplicate: boolean;
  answer: boolean | null;
}

export type UniqueOccStep = Step<UniqueOccData>;

/**
 * Tally each value's occurrences, then verify the multiset of counts has no
 * duplicates: two different values may not share the same frequency. `line` indexes
 * CODE.
 */
export function uniqueOccSteps(arr: number[]): UniqueOccStep[] {
  const steps: UniqueOccStep[] = [];
  const count = new Map<number, number>();
  for (const x of arr) count.set(x, (count.get(x) ?? 0) + 1);
  const seen = new Set<number>();
  const seenList: number[] = [];

  const snap = (o: Partial<UniqueOccData>): UniqueOccData => ({ arr: [...arr], counts: [...count.entries()], seenCounts: [...seenList], checking: null, duplicate: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: UniqueOccData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(4, "Count each value, then check the counts are all distinct.", snap({}));

  for (const [val, c] of count) {
    if (seen.has(c)) {
      push(6, `Count ${c} (of value ${val}) already used → false.`, snap({ checking: c, duplicate: true, answer: false }));
      return steps;
    }
    seen.add(c);
    seenList.push(c);
    push(7, `Value ${val} occurs ${c}× — count ${c} is new.`, snap({ checking: c }));
  }

  push(9, "All occurrence counts are unique → true.", snap({ answer: true }));
  return steps;
}
