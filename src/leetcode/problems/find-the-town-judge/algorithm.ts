import type { Step } from "@/core/types";

export interface JudgeData {
  n: number;
  trust: number[][];
  /** net[p] = (trusted by) − (trusts) for each person 1..n */
  net: number[];
  /** trust edge index being processed */
  edgeIdx: number | null;
  /** person being checked */
  checking: number | null;
  answer: number | null;
}

export type JudgeStep = Step<JudgeData>;

/**
 * The town judge is trusted by everyone else (in-degree n−1) and trusts no one (out-degree 0), so
 * their net score of (trusted-by − trusts) equals n−1. Tallying ±1 per trust edge and scanning for
 * that value finds them. `line` indexes CODE.
 */
export function judgeSteps(n: number, trust: number[][]): JudgeStep[] {
  const steps: JudgeStep[] = [];
  const net = new Array(n + 1).fill(0);

  const snap = (o: Partial<JudgeData>): JudgeData => ({ n, trust, net: [...net], edgeIdx: null, checking: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<JudgeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Net score = (trusted by) − (trusts). The judge scores n − 1 = ${n - 1}.`);

  for (let e = 0; e < trust.length; e++) {
    const [a, b] = trust[e];
    net[a]--;
    net[b]++;
    push(4, `${a} → ${b}: net[${a}] = ${net[a]}, net[${b}] = ${net[b]}.`, { edgeIdx: e });
  }

  for (let p = 1; p <= n; p++) {
    if (net[p] === n - 1) {
      push(7, `Person ${p} has net ${net[p]} = ${n - 1} → the judge.`, { checking: p, answer: p });
      return steps;
    }
    push(6, `Person ${p} has net ${net[p]} ≠ ${n - 1}.`, { checking: p });
  }

  push(8, "No one qualifies as judge → -1.", { answer: -1 });
  return steps;
}
