import type { Step } from "@/core/types";

export interface NumTreesData {
  n: number;
  dp: number[];
  /** node count currently being computed */
  nodes: number | null;
  /** root choice within nodes */
  root: number | null;
  answer: number | null;
}

export type NumTreesStep = Step<NumTreesData>;

/**
 * Choosing each value as the root splits the remaining nodes into an ordered left group (root−1 nodes)
 * and right group (nodes−root), whose tree counts multiply. Summing over every root gives dp[nodes], the
 * nth Catalan number. `line` indexes CODE.
 */
export function numTreesSteps(n: number): NumTreesStep[] {
  const steps: NumTreesStep[] = [];
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  if (n >= 1) dp[1] = 1;

  const snap = (o: Partial<NumTreesData>): NumTreesData => ({ n, dp: [...dp], nodes: null, root: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<NumTreesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "dp[k] = number of BSTs with k nodes; dp[0]=dp[1]=1.");

  for (let nodes = 2; nodes <= n; nodes++) {
    for (let root = 1; root <= nodes; root++) {
      dp[nodes] += dp[root - 1] * dp[nodes - root];
      push(7, `${nodes} nodes, root ${root}: left dp[${root - 1}]=${dp[root - 1]} × right dp[${nodes - root}]=${dp[nodes - root]} → running ${dp[nodes]}.`, { nodes, root });
    }
  }

  push(8, `Number of unique BSTs with ${n} nodes: ${dp[n]}.`, { answer: dp[n] });
  return steps;
}
