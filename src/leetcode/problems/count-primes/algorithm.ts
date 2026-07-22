import type { Step } from "@/core/types";

export type CellState = "unknown" | "prime" | "composite" | "current" | "striking";

export interface CountPrimesData {
  n: number;
  states: CellState[];
  count: number;
  p: number | null;
}

export type CountPrimesStep = Step<CountPrimesData>;

/**
 * Sieve of Eratosthenes: every number starts as a prime candidate; for each prime
 * p, strike out its multiples starting at p² (smaller multiples already struck by
 * smaller primes). Whatever survives is prime. `line` indexes CODE.
 */
export function countPrimesSteps(n: number): CountPrimesStep[] {
  const steps: CountPrimesStep[] = [];
  const isPrime = new Array(Math.max(n, 0)).fill(true);
  let count = 0;

  const states = (over: Record<number, CellState> = {}, p: number | null = null): CellState[] => {
    const out: CellState[] = [];
    for (let i = 0; i < n; i++) {
      if (over[i]) out.push(over[i]);
      else if (i < 2) out.push("composite");
      else if (!isPrime[i]) out.push("composite");
      else out.push(i === p ? "current" : "prime");
    }
    return out;
  };
  const push = (line: number, explanation: string, over: Record<number, CellState>, p: number | null) => {
    steps.push({ id: steps.length, line, explanation, data: { n, states: states(over, p), count, p }, highlights: [], metrics: { primes: count } });
  };

  push(1, "Every number ≥ 2 starts as a prime candidate.", {}, null);

  for (let p = 2; p < n; p++) {
    if (!isPrime[p]) {
      push(4, `${p} was already struck out — skip.`, {}, null);
      continue;
    }
    count++;
    push(5, `${p} survived — it's prime (count ${count}). Strike its multiples from ${p * p}.`, { [p]: "current" }, p);
    for (let m = p * p; m < n; m += p) {
      isPrime[m] = false;
      push(7, `Strike ${m} = ${p} × ${m / p}.`, { [p]: "current", [m]: "striking" }, p);
    }
  }

  push(9, `There are ${count} primes below ${n}.`, {}, null);
  return steps;
}
