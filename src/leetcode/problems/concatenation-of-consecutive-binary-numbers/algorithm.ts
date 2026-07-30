import type { Step } from "@/core/types";

export interface ConcatBinaryData {
  n: number;
  i: number | null;
  /** the concatenated binary string so far (exact, for display) */
  binary: string;
  /** index in `binary` where the latest number's bits begin */
  appendedFrom: number | null;
  value: number;
  answer: number | null;
}

export type ConcatBinaryStep = Step<ConcatBinaryData>;

const MOD = 1_000_000_007;

/**
 * Concatenate the binary representations of 1..n and read the result modulo 1e9+7. Each number i shifts the
 * running value left by i's bit-length (multiply by 2^len) and adds i. `line` indexes CODE.
 */
export function concatBinarySteps(n: number): ConcatBinaryStep[] {
  const steps: ConcatBinaryStep[] = [];
  let result = 0;
  let binary = "";

  const snap = (o: Partial<ConcatBinaryData>): ConcatBinaryData => ({
    n,
    i: null,
    binary,
    appendedFrom: null,
    value: result,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ConcatBinaryData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Concatenate binary of 1..${n}, reading modulo 1e9+7.`);

  for (let i = 1; i <= n; i++) {
    const bits = i.toString(2);
    const from = binary.length;
    binary += bits;
    result = (result * 2 ** bits.length + i) % MOD;
    push(6, `Append ${i} = ${bits}₂ → "${binary}" (value ${result}).`, { i, appendedFrom: from });
  }

  push(8, `Concatenated value mod 1e9+7 = ${result}.`, { answer: result });
  return steps;
}
