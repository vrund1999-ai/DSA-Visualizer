import type { Step } from "@/core/types";

export interface ClosestPrimeData {
  left: number;
  right: number;
  nums: number[];
  primeFlags: boolean[];
  /** the adjacent prime pair currently compared (values) */
  pair: [number, number] | null;
  best: [number, number] | null;
  bestGap: number;
  answer: [number, number] | null;
}

export type ClosestPrimeStep = Step<ClosestPrimeData>;

/**
 * Find the closest pair of primes within [left, right]. A sieve marks primes up to right; then scanning the
 * primes in range, the adjacent pair with the smallest gap wins (the first such pair on ties). `line`
 * indexes CODE.
 */
export function closestPrimeSteps(left: number, right: number): ClosestPrimeStep[] {
  const steps: ClosestPrimeStep[] = [];
  const sieve = new Array(right + 1).fill(true);
  if (right >= 0) sieve[0] = false;
  if (right >= 1) sieve[1] = false;
  for (let i = 2; i * i <= right; i++) if (sieve[i]) for (let j = i * i; j <= right; j += i) sieve[j] = false;

  const nums = Array.from({ length: right - left + 1 }, (_, i) => left + i);
  const primeFlags = nums.map((x) => sieve[x] === true);

  let best: [number, number] | null = null;
  let bestGap = Infinity;

  const snap = (o: Partial<ClosestPrimeData>): ClosestPrimeData => ({
    left,
    right,
    nums,
    primeFlags,
    pair: null,
    best,
    bestGap,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ClosestPrimeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const primes = nums.filter((x) => sieve[x] === true);
  push(8, `Primes in [${left}, ${right}]: ${primes.length ? primes.join(", ") : "none"}.`);

  for (let i = 1; i < primes.length; i++) {
    const g = primes[i] - primes[i - 1];
    if (g < bestGap) {
      bestGap = g;
      best = [primes[i - 1], primes[i]];
      push(13, `Pair (${primes[i - 1]}, ${primes[i]}) gap ${g} — new closest.`, { pair: [primes[i - 1], primes[i]] });
    } else {
      push(11, `Pair (${primes[i - 1]}, ${primes[i]}) gap ${g} — not closer than ${bestGap}.`, { pair: [primes[i - 1], primes[i]] });
    }
  }

  const answer: [number, number] = best ?? [-1, -1];
  push(15, best ? `Closest primes: [${answer[0]}, ${answer[1]}].` : `Fewer than two primes → [-1, -1].`, { answer });
  return steps;
}
