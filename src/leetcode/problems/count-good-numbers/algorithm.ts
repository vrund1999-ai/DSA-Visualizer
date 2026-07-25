import type { Step } from "@/core/types";

export interface GoodNumbersData {
  n: number;
  evens: number;
  odds: number;
  /** which base is being raised */
  base: number | null;
  /** binary-exponentiation trace rows */
  trace: { bit: number; result: string }[];
  result: string;
  answer: string | null;
}

export type GoodNumbersStep = Step<GoodNumbersData>;

const MOD = 1000000007n;

function powerTrace(base: bigint, exp: bigint): { trace: { bit: number; result: string }[]; value: bigint } {
  const trace: { bit: number; result: string }[] = [];
  let r = 1n;
  base %= MOD;
  while (exp > 0n) {
    const bit = Number(exp & 1n);
    if (bit) r = (r * base) % MOD;
    trace.push({ bit, result: r.toString() });
    base = (base * base) % MOD;
    exp >>= 1n;
  }
  return { trace, value: r };
}

/**
 * A good number of length n has 5 choices at each even index (even digits) and 4 at
 * each odd index (prime digits), so the count is 5^evens · 4^odds mod 1e9+7. Each
 * power is computed by fast (binary) exponentiation. `line` indexes CODE.
 */
export function goodNumbersSteps(n: number): GoodNumbersStep[] {
  const steps: GoodNumbersStep[] = [];
  const evens = Math.ceil(n / 2);
  const odds = Math.floor(n / 2);

  const snap = (o: Partial<GoodNumbersData>): GoodNumbersData => ({ n, evens, odds, base: null, trace: [], result: "1", answer: null, ...o });
  const push = (line: number, explanation: string, data: GoodNumbersData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, `Length ${n}: ${evens} even index(es) × 5 choices, ${odds} odd × 4.`, snap({}));

  const p5 = powerTrace(5n, BigInt(evens));
  push(4, `5^${evens} mod MOD = ${p5.value}.`, snap({ base: 5, trace: p5.trace, result: p5.value.toString() }));

  const p4 = powerTrace(4n, BigInt(odds));
  push(4, `4^${odds} mod MOD = ${p4.value}.`, snap({ base: 4, trace: p4.trace, result: p4.value.toString() }));

  const answer = ((p5.value * p4.value) % MOD).toString();
  push(4, `Answer: ${p5.value} × ${p4.value} mod MOD = ${answer}.`, snap({ answer }));
  return steps;
}
