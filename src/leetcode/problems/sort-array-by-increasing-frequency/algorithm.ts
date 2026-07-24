import type { Step } from "@/core/types";

export interface SortByFreqData {
  order: number[];
  /** frequency of each value */
  freq: Record<number, number>;
  /** value being counted (count phase) */
  counting: number | null;
  sorted: boolean;
}

export type SortByFreqStep = Step<SortByFreqData>;

/**
 * Count each value's frequency, then sort so the least frequent values come first;
 * ties are broken by larger value first. `line` indexes CODE.
 */
export function sortByFreqSteps(input: number[]): SortByFreqStep[] {
  const steps: SortByFreqStep[] = [];
  const order = [...input];
  const freq: Record<number, number> = {};

  const snap = (o: Partial<SortByFreqData>): SortByFreqData => ({ order: [...order], freq: { ...freq }, counting: null, sorted: false, ...o });
  const push = (line: number, explanation: string, data: SortByFreqData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Count each value's frequency.", snap({}));

  for (const x of input) {
    freq[x] = (freq[x] ?? 0) + 1;
    push(3, `${x} → ${freq[x]}.`, snap({ counting: x }));
  }

  order.sort((a, b) => freq[a] - freq[b] || b - a);
  push(6, "Sort by increasing frequency; ties by larger value first.", snap({ sorted: true }));

  return steps;
}
