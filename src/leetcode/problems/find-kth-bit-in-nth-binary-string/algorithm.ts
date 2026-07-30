import type { Step } from "@/core/types";

export interface KthBitData {
  n: number;
  k: number;
  s: string;
  level: number;
  /** index where the appended (invert+reverse) part begins */
  appendedFrom: number | null;
  answer: string | null;
}

export type KthBitStep = Step<KthBitData>;

/**
 * S1 = "0"; each Sᵢ = Sᵢ₋₁ + "1" + reverse(invert(Sᵢ₋₁)). Build up to Sₙ and read the k-th bit (1-indexed).
 * `line` indexes CODE.
 */
export function kthBitSteps(n: number, k: number): KthBitStep[] {
  const steps: KthBitStep[] = [];
  let s = "0";

  const snap = (o: Partial<KthBitData>): KthBitData => ({ n, k, s, level: 1, appendedFrom: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KthBitData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `S1 = "0"; build up to S${n}.`, { level: 1 });

  for (let i = 2; i <= n; i++) {
    const from = s.length;
    const inv = [...s].reverse().map((c) => (c === "0" ? "1" : "0")).join("");
    s = s + "1" + inv;
    push(7, `S${i} = S${i - 1} + "1" + reverse/invert → "${s}".`, { level: i, appendedFrom: from });
  }

  push(9, `The ${k}-th bit of S${n} is '${s[k - 1]}'.`, { level: n, answer: s[k - 1] });
  return steps;
}
