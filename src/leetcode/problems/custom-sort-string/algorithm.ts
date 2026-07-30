import type { Step } from "@/core/types";

export interface CustomSortData {
  order: string;
  s: string;
  count: [string, number][];
  /** char in `order` currently being emitted */
  cur: string | null;
  res: string;
  answer: string | null;
}

export type CustomSortStep = Step<CustomSortData>;

/**
 * Sorting means grouping identical characters, so count each character of s, then emit them in the
 * priority given by `order` (characters absent from order appended afterward in any order). `line`
 * indexes CODE.
 */
export function customSortSteps(order: string, s: string): CustomSortStep[] {
  const steps: CustomSortStep[] = [];
  const count = new Map<string, number>();
  for (const c of s) count.set(c, (count.get(c) || 0) + 1);
  let res = "";

  const snap = (o: Partial<CustomSortData>): CustomSortData => ({ order, s, count: [...count.entries()], cur: null, res, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CustomSortData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Count characters in "${s}", then emit them following the order "${order}".`);

  for (const c of order) {
    const n = count.get(c) || 0;
    if (n > 0) {
      res += c.repeat(n);
      count.set(c, 0);
      push(6, `Emit ${n} copy/copies of '${c}' (priority) → "${res}".`, { cur: c });
    }
  }

  for (const [c, n] of count) {
    if (n > 0) {
      res += c.repeat(n);
      count.set(c, 0);
      push(8, `Append leftover ${n} '${c}' → "${res}".`, { cur: c });
    }
  }

  push(9, `Sorted string: "${res}".`, { answer: res });
  return steps;
}
