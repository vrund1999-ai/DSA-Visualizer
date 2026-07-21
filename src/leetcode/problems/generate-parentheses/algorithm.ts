import type { Step } from "@/core/types";

export interface GenParenData {
  n: number;
  cur: string;
  open: number;
  close: number;
  results: string[];
}

export type GenParenStep = Step<GenParenData>;

/**
 * Backtracking with two invariants that keep every partial string valid: only
 * add '(' while open < n, and only add ')' while close < open. A full-length
 * string is a valid combination. `line` indexes CODE.
 */
export function genParenSteps(n: number): GenParenStep[] {
  const steps: GenParenStep[] = [];
  const results: string[] = [];

  const push = (line: number, explanation: string, cur: string, open: number, close: number) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { n, cur, open, close, results: [...results] },
      highlights: [],
      metrics: { found: results.length },
    });
  };

  const bt = (cur: string, open: number, close: number) => {
    if (cur.length === 2 * n) {
      results.push(cur);
      push(3, `"${cur}" is complete and balanced — record it.`, cur, open, close);
      return;
    }
    if (open < n) {
      push(4, `Add '(' → "${cur}(" (open ${open + 1}/${n}).`, cur + "(", open + 1, close);
      bt(cur + "(", open + 1, close);
    }
    if (close < open) {
      push(5, `Add ')' → "${cur})" (close ${close + 1}).`, cur + ")", open, close + 1);
      bt(cur + ")", open, close + 1);
    }
  };

  push(1, `Build all valid arrangements of ${n} pair(s) of parentheses.`, "", 0, 0);
  bt("", 0, 0);
  push(8, `Found ${results.length} valid combination(s).`, "", 0, 0);
  return steps;
}
