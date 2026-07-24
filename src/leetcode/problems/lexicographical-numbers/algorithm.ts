import type { Step } from "@/core/types";

export interface LexData {
  n: number;
  res: number[];
  cur: number;
  /** "deeper" | "up" | "sibling" | null — describes the last move */
  move: string | null;
}

export type LexStep = Step<LexData>;

/**
 * Iterative preorder walk of the 10-ary trie whose nodes are the integers 1..n:
 * append a 0 to go deeper (cur*10), otherwise climb until a next sibling ≤ n is
 * available (cur+1). Emitting nodes in this order yields lexicographic order.
 * `line` indexes CODE.
 */
export function lexSteps(n: number): LexStep[] {
  const steps: LexStep[] = [];
  const res: number[] = [];
  let cur = 1;

  const snap = (o: Partial<LexData>): LexData => ({ n, res: [...res], cur, move: null, ...o });
  const push = (line: number, explanation: string, data: LexData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Walk 1..${n} like a preorder trie traversal on digits.`, snap({}));

  for (let i = 0; i < n; i++) {
    res.push(cur);
    push(4, `Visit ${cur}.`, snap({ move: null }));
    if (cur * 10 <= n) {
      cur *= 10;
      push(6, `Descend: append 0 → ${cur}.`, snap({ move: "deeper" }));
    } else {
      while (cur % 10 === 9 || cur + 1 > n) cur = Math.floor(cur / 10);
      cur += 1;
      if (i < n - 1) push(10, `No child — climb, then next sibling → ${cur}.`, snap({ move: "sibling" }));
    }
  }

  push(13, `Lexicographic order complete (${res.length} numbers).`, snap({}));
  return steps;
}
