import type { Step } from "@/core/types";

export interface FreqSortData {
  /** frequency entries in current display order */
  entries: { char: string; freq: number }[];
  /** char just counted (count phase) */
  counting: string | null;
  sorted: boolean;
  answer: string | null;
}

export type FreqSortStep = Step<FreqSortData>;

/**
 * Count each character, then order the distinct characters by descending frequency
 * and expand each back to its full run. `line` indexes CODE.
 */
export function freqSortSteps(s: string): FreqSortStep[] {
  const steps: FreqSortStep[] = [];
  const freq = new Map<string, number>();

  const entriesFrom = () => [...freq.entries()].map(([char, f]) => ({ char, freq: f }));
  const snap = (o: Partial<FreqSortData>): FreqSortData => ({ entries: entriesFrom(), counting: null, sorted: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: FreqSortData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Count how often each character appears.", snap({}));

  for (const c of s) {
    freq.set(c, (freq.get(c) ?? 0) + 1);
    push(3, `'${c}' → ${freq.get(c)}.`, snap({ counting: c }));
  }

  const chars = [...freq.keys()];
  chars.sort((a, b) => freq.get(b)! - freq.get(a)!);
  const sortedEntries = chars.map((char) => ({ char, freq: freq.get(char)! }));
  const snapSorted = (o: Partial<FreqSortData>): FreqSortData => ({ entries: sortedEntries, counting: null, sorted: true, answer: null, ...o });
  push(5, "Sort characters by descending frequency.", snapSorted({}));

  const answer = chars.map((c) => c.repeat(freq.get(c)!)).join("");
  push(8, `Result: "${answer}".`, snapSorted({ answer }));
  return steps;
}
