import type { Step } from "@/core/types";

export interface WordBreakIIData {
  s: string;
  dict: string[];
  /** [start, end) slice being tested */
  slice: [number, number] | null;
  /** is that slice a dictionary word? */
  isWord: boolean | null;
  /** sentences found so far */
  results: string[];
  found: boolean;
}

export type WordBreakIIStep = Step<WordBreakIIData>;

/**
 * Backtracking with memoization: from each start index, try every prefix; if it is a
 * dictionary word, recurse on the remainder and prepend the word to each returned
 * sentence. `line` indexes CODE. (This walk shows the recursion without memo hits for
 * clarity.)
 */
export function wordBreakIISteps(s: string, wordDict: string[]): WordBreakIIStep[] {
  const steps: WordBreakIIStep[] = [];
  const words = new Set(wordDict);
  const results: string[] = [];

  const snap = (o: Partial<WordBreakIIData>): WordBreakIIData => ({ s, dict: [...wordDict], slice: null, isWord: null, results: [...results], found: false, ...o });
  const push = (line: number, explanation: string, data: WordBreakIIData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Break "${s}" into space-separated dictionary words, all ways.`, snap({}));

  const solve = (start: number): string[] => {
    if (start === s.length) return [""];
    const res: string[] = [];
    for (let end = start + 1; end <= s.length; end++) {
      const w = s.slice(start, end);
      const isWord = words.has(w);
      push(9, `Test "${w}" — ${isWord ? "in dictionary" : "not a word"}.`, snap({ slice: [start, end], isWord }));
      if (isWord) {
        for (const rest of solve(end)) {
          const sentence = rest ? w + " " + rest : w;
          if (start === 0) {
            results.push(sentence);
            push(11, `Complete sentence: "${sentence}".`, snap({ slice: [start, end], isWord: true, found: true }));
          }
          res.push(sentence);
        }
      }
    }
    return res;
  };
  solve(0);

  push(16, `Found ${results.length} sentence(s).`, snap({}));
  return steps;
}
