import type { Step } from "@/core/types";

export interface FibSubseqData {
  arr: number[];
  /** the triple (k, j, i) forming a Fibonacci step, indices into arr */
  triple: [number, number, number] | null;
  best: number;
  bestSeq: number[] | null;
  answer: number | null;
}

export type FibSubseqStep = Step<FibSubseqData>;

const MAX_STEPS = 400;

/**
 * Length of the longest subsequence where each term is the sum of the two before it. With arr strictly
 * increasing, dp[j][i] (ending in arr[j], arr[i]) extends dp[k][j] when arr[i]−arr[j] = arr[k] exists before
 * j. `line` indexes CODE.
 */
export function fibSubseqSteps(arr: number[]): FibSubseqStep[] {
  const steps: FibSubseqStep[] = [];
  const idx = new Map(arr.map((v, i) => [v, i]));
  const dp = new Map<string, number>();
  const prev = new Map<string, number>();
  let best = 0;
  let bestPair: [number, number] | null = null;

  const snap = (o: Partial<FibSubseqData>): FibSubseqData => ({
    arr,
    triple: null,
    best,
    bestSeq: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<FibSubseqData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Find the longest Fibonacci-like subsequence via pair DP.`);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const k = idx.get(arr[i] - arr[j]);
      let len = 2;
      if (k !== undefined && k < j) {
        len = (dp.get(`${k},${j}`) ?? 2) + 1;
        prev.set(`${j},${i}`, k);
        push(9, `${arr[k]} + ${arr[j]} = ${arr[i]} → extend to length ${len}.`, { triple: [k, j, i] });
      }
      dp.set(`${j},${i}`, len);
      if (len > best) {
        best = len;
        bestPair = [j, i];
      }
    }
  }

  let bestSeq: number[] | null = null;
  if (best >= 3 && bestPair) {
    let [j, i] = bestPair;
    const seq = [arr[i], arr[j]];
    while (prev.has(`${j},${i}`)) {
      const k = prev.get(`${j},${i}`)!;
      seq.push(arr[k]);
      i = j;
      j = k;
    }
    bestSeq = seq.reverse();
  }

  const answer = best >= 3 ? best : 0;
  push(12, bestSeq ? `Longest Fibonacci-like subsequence [${bestSeq.join(", ")}] has length ${answer}.` : `No Fibonacci-like subsequence of length ≥ 3.`, {
    answer,
    bestSeq,
  });
  return steps;
}
