import type { Step } from "@/core/types";

export interface MatchingData {
  n: number;
  m: number;
  k: number;
  /** which factor is being revealed */
  stage: "choose" | "first" | "diffs" | "done";
  choose: number | null;
  first: number | null;
  diffs: number | null;
  answer: number | null;
}

export type MatchingStep = Step<MatchingData>;

const MOD = 1_000_000_007n;

function modPow(base: bigint, exp: number): bigint {
  let result = 1n;
  let b = base % MOD;
  let e = exp;
  while (e > 0) {
    if (e & 1) result = (result * b) % MOD;
    b = (b * b) % MOD;
    e >>= 1;
  }
  return result;
}

function choose(n: number, k: number): bigint {
  if (k < 0 || k > n) return 0n;
  let num = 1n;
  let den = 1n;
  for (let i = 0; i < k; i++) { num = (num * BigInt(n - i)) % MOD; den = (den * BigInt(i + 1)) % MOD; }
  return (num * modPow(den, Number(MOD - 2n))) % MOD;
}

/**
 * Build the array left to right: exactly k of the n−1 adjacent "gaps" must repeat the previous value
 * and the rest must differ. Choose which k gaps match — C(n−1, k) ways; the first element has m
 * choices; each of the remaining n−1−k differing gaps has m−1 choices. Multiply the three. `line` indexes CODE.
 */
export function matchingSteps(n: number, m: number, k: number): MatchingStep[] {
  const steps: MatchingStep[] = [];

  const snap = (o: Partial<MatchingData>): MatchingData => ({ n, m, k, stage: "choose", choose: null, first: null, diffs: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MatchingData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(0, `Count length-${n} arrays over 1..${m} with exactly ${k} equal-adjacent pairs.`);

  const c = choose(n - 1, k);
  push(3, `Choose which ${k} of the ${n - 1} gaps match: C(${n - 1}, ${k}) = ${c}.`, { stage: "choose", choose: Number(c) });

  push(5, `First element: ${m} choices.`, { stage: "first", choose: Number(c), first: m });

  const d = modPow(BigInt(m - 1), n - 1 - k);
  push(7, `Each of the ${n - 1 - k} differing gaps: (m−1) = ${m - 1} choices → ${m - 1}^${n - 1 - k} = ${d}.`, { stage: "diffs", choose: Number(c), first: m, diffs: Number(d) });

  const answer = Number((((c * BigInt(m)) % MOD) * d) % MOD);
  push(8, `Answer = C·m·(m−1)^(n−1−k) mod 1e9+7 = ${answer}.`, { stage: "done", choose: Number(c), first: m, diffs: Number(d), answer });
  return steps;
}
