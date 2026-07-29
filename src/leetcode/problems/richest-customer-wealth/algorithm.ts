import type { Step } from "@/core/types";

export interface WealthData {
  accounts: number[][];
  /** customer (row) index being summed */
  row: number | null;
  wealth: number | null;
  best: number;
  bestRow: number;
  answer: number | null;
}

export type WealthStep = Step<WealthData>;

/**
 * Each customer's wealth is the sum of their bank balances (a row), so summing every row and keeping
 * the largest gives the richest customer's wealth. `line` indexes CODE.
 */
export function wealthSteps(accounts: number[][]): WealthStep[] {
  const steps: WealthStep[] = [];
  let best = 0;
  let bestRow = 0;

  const snap = (o: Partial<WealthData>): WealthData => ({ accounts, row: null, wealth: null, best, bestRow, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<WealthData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Sum each customer's row of bank balances; keep the maximum.");

  for (let r = 0; r < accounts.length; r++) {
    const wealth = accounts[r].reduce((a, b) => a + b, 0);
    if (wealth > best) { best = wealth; bestRow = r; }
    push(5, `Customer ${r}: wealth ${wealth} (best ${best}).`, { row: r, wealth });
  }

  push(7, `Richest customer's wealth: ${best}.`, { answer: best });
  return steps;
}
