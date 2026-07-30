import type { Step } from "@/core/types";

export interface SuggestData {
  products: string[];
  searchWord: string;
  /** number of characters typed so far */
  typed: number;
  prefix: string;
  /** products currently matching the prefix (top 3) */
  hits: string[];
  answer: string[][] | null;
}

export type SuggestStep = Step<SuggestData>;

/**
 * Sorting the catalog once makes "the three lexicographically smallest matches" just the first three
 * products that start with the current prefix. As each character is typed the prefix grows and the
 * matching set can only shrink. `line` indexes CODE.
 */
export function suggestSteps(input: string[], searchWord: string): SuggestStep[] {
  const steps: SuggestStep[] = [];
  const products = [...input].sort();
  const res: string[][] = [];

  const snap = (o: Partial<SuggestData>): SuggestData => ({ products, searchWord, typed: 0, prefix: "", hits: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SuggestData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort products: ${products.join(", ")}.`);

  let prefix = "";
  for (let i = 0; i < searchWord.length; i++) {
    prefix += searchWord[i];
    const hits: string[] = [];
    for (const p of products) {
      if (p.startsWith(prefix)) hits.push(p);
      if (hits.length === 3) break;
    }
    res.push(hits);
    push(11, `Prefix "${prefix}": ${hits.length ? hits.join(", ") : "no matches"}.`, { typed: i + 1, prefix, hits });
  }

  push(13, "Return the top-3 suggestions after each keystroke.", { answer: res });
  return steps;
}
