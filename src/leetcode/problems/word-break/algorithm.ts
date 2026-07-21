import type { Highlight, Step } from "@/core/types";

export interface WordBreakInput {
  s: string;
  dict: string[];
}

export interface WordBreakData {
  chars: string[];
  dict: string[];
  dp: boolean[];
  i: number | null;
  j: number | null;
  matchWord: string | null;
}

export type WordBreakStep = Step<WordBreakData>;

/**
 * dp[i] is true when s[0..i) can be segmented into dictionary words. Position i
 * is reachable if some earlier reachable position j leaves a word s[j..i) in the
 * dictionary. `line` indexes CODE.
 */
export function wordBreakSteps(input: WordBreakInput): WordBreakStep[] {
  const { s, dict } = input;
  const chars = [...s];
  const words = new Set(dict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  const steps: WordBreakStep[] = [];

  const snap = (o: Partial<WordBreakData>): WordBreakData => ({
    chars: [...chars],
    dict: [...dict],
    dp: [...dp],
    i: null,
    j: null,
    matchWord: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: WordBreakData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  const span = (j: number, i: number, role: string): Highlight[] =>
    Array.from({ length: i - j }, (_, k) => ({ ref: `ch${j + k}`, role: role as Highlight["role"] }));

  push(3, "dp[i] = can the first i characters be segmented? dp[0] is true.", snap({}), [{ ref: "dp0", role: "sorted" }]);

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      if (dp[j] && words.has(word)) {
        dp[i] = true;
        push(7, `dp[${j}] is true and "${word}" is in the dictionary — dp[${i}] = true.`, snap({ i, j, matchWord: word }), [
          ...span(j, i, "sorted"),
          { ref: `dp${j}`, role: "compared" },
          { ref: `dp${i}`, role: "target" },
        ]);
        break;
      } else {
        push(6, `"${word}"${dp[j] ? "" : " starts from an unreachable point and"} is ${words.has(word) ? "in" : "not in"} the dictionary.`, snap({ i, j, matchWord: word }), [
          ...span(j, i, "active"),
          { ref: `dp${j}`, role: dp[j] ? "compared" : "visited" },
        ]);
      }
    }
  }

  push(9, dp[s.length] ? `"${s}" can be fully segmented.` : `"${s}" cannot be segmented.`, snap({}), [{ ref: `dp${s.length}`, role: dp[s.length] ? "target" : "swapped" }]);
  return steps;
}
