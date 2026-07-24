import type { Step } from "@/core/types";

export interface TopKWordsData {
  words: string[];
  k: number;
  /** frequency entries in current display order */
  entries: { word: string; freq: number }[];
  /** word just counted (count phase) */
  counting: string | null;
  sorted: boolean;
  answer: string[] | null;
}

export type TopKWordsStep = Step<TopKWordsData>;

/**
 * Tally word frequencies, then order the distinct words by frequency descending with
 * alphabetical order as the tie-break, and take the first k. `line` indexes CODE.
 */
export function topKWordsSteps(words: string[], k: number): TopKWordsStep[] {
  const steps: TopKWordsStep[] = [];
  const freq = new Map<string, number>();

  const entriesFrom = () => [...freq.entries()].map(([word, f]) => ({ word, freq: f }));
  const snap = (o: Partial<TopKWordsData>): TopKWordsData => ({ words: [...words], k, entries: entriesFrom(), counting: null, sorted: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: TopKWordsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Count how often each word occurs.", snap({}));

  for (const w of words) {
    freq.set(w, (freq.get(w) ?? 0) + 1);
    push(3, `"${w}" → ${freq.get(w)}.`, snap({ counting: w }));
  }

  const unique = [...freq.keys()];
  unique.sort((a, b) => freq.get(b)! - freq.get(a)! || a.localeCompare(b));
  const sortedEntries = unique.map((word) => ({ word, freq: freq.get(word)! }));
  const snapSorted = (o: Partial<TopKWordsData>): TopKWordsData => ({ words: [...words], k, entries: sortedEntries, counting: null, sorted: true, answer: null, ...o });
  push(7, "Sort by frequency (desc), breaking ties alphabetically.", snapSorted({}));

  const answer = unique.slice(0, k);
  steps.push({ id: steps.length, line: 8, explanation: `Top ${k}: ${answer.map((w) => `"${w}"`).join(", ")}.`, data: snapSorted({ answer }), highlights: [] });
  return steps;
}
