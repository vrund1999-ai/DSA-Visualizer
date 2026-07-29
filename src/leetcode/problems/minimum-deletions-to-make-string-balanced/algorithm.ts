import type { Step } from "@/core/types";

export interface BalanceData {
  s: string;
  i: number | null;
  del: number;
  b: number;
  answer: number | null;
}

export type BalanceStep = Step<BalanceData>;

/**
 * "Balanced" means every 'b' precedes every 'a' it keeps — no "ba" out of order. Scanning left to
 * right, a 'b' is free (it can stay left), while each 'a' either survives by deleting one earlier 'b'
 * or is deleted itself; we take the cheaper option, bounded by the running 'b' count. `line` indexes CODE.
 */
export function balanceSteps(s: string): BalanceStep[] {
  const steps: BalanceStep[] = [];
  let del = 0;
  let b = 0;

  const snap = (o: Partial<BalanceData>): BalanceData => ({ s, i: null, del, b, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BalanceData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Scan left to right, tracking deletions and the running 'b' count.");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      b++;
      push(5, `'b' at ${i}: costs nothing yet (b count = ${b}).`, { i });
    } else {
      del = Math.min(del + 1, b);
      push(9, `'a' at ${i}: min(delete it = ${del === b ? del : del}, drop ${b} prior b) → del = ${del}.`, { i });
    }
  }

  push(12, `Minimum deletions: ${del}.`, { answer: del });
  return steps;
}
