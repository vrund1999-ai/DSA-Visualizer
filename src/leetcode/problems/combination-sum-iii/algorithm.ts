import type { Step } from "@/core/types";

export interface ComboData {
  k: number;
  n: number;
  /** the digit path currently built */
  combo: number[];
  remain: number;
  /** digit just chosen or removed */
  digit: number | null;
  action: "add" | "found" | "backtrack" | "prune" | null;
  results: number[][];
  answer: number[][] | null;
}

export type ComboStep = Step<ComboData>;

/**
 * We build strictly-increasing digit paths from 1..9 (so each combination is unique), pruning as soon
 * as a digit exceeds the remaining sum. A path of exactly k digits summing to n is recorded. `line` indexes CODE.
 */
export function comboSteps(k: number, n: number): ComboStep[] {
  const steps: ComboStep[] = [];
  const results: number[][] = [];

  const snap = (combo: number[], remain: number, o: Partial<ComboData>): ComboData => ({ k, n, combo: [...combo], remain, digit: null, action: null, results: results.map((r) => [...r]), answer: null, ...o });
  const push = (line: number, explanation: string, combo: number[], remain: number, o: Partial<ComboData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(combo, remain, o), highlights: [] });
  };

  push(2, `Build ${k}-digit increasing combinations of 1..9 summing to ${n}.`, [], n);

  const dfs = (start: number, combo: number[], remain: number) => {
    if (combo.length === k) {
      if (remain === 0) {
        results.push([...combo]);
        push(4, `[${combo.join(", ")}] sums to ${n} → record it.`, combo, remain, { action: "found" });
      }
      return;
    }
    for (let d = start; d <= 9; d++) {
      if (d > remain) {
        push(8, `${d} > remaining ${remain} → prune the rest.`, combo, remain, { digit: d, action: "prune" });
        break;
      }
      combo.push(d);
      push(9, `Add ${d}; remaining ${remain - d}.`, combo, remain - d, { digit: d, action: "add" });
      dfs(d + 1, combo, remain - d);
      combo.pop();
      push(11, `Backtrack ${d}.`, combo, remain, { digit: d, action: "backtrack" });
    }
  };

  dfs(1, [], n);
  push(15, `Found ${results.length} combination(s).`, [], n, { answer: results.map((r) => [...r]) });
  return steps;
}
