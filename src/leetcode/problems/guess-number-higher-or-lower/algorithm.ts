import type { Step } from "@/core/types";

export interface GuessInput {
  n: number;
  pick: number;
}

export interface GuessData {
  n: number;
  pick: number;
  lo: number;
  hi: number;
  mid: number | null;
  answer: number | null;
}

export type GuessStep = Step<GuessData>;

/**
 * Binary search over 1..n driven by the guess() oracle: too high halves to the
 * left, too low to the right, until it lands on the pick. `line` indexes CODE.
 */
export function guessSteps(input: GuessInput): GuessStep[] {
  const { n, pick } = input;
  const steps: GuessStep[] = [];
  let lo = 1;
  let hi = n;
  let answer: number | null = null;

  const snap = (o: Partial<GuessData>): GuessData => ({ n, pick, lo, hi, mid: null, answer, ...o });
  const push = (line: number, explanation: string, data: GuessData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Guess a number in 1..${n} using the higher/lower oracle.`, snap({}));

  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (mid === pick) {
      answer = mid;
      push(5, `guess(${mid}) = correct — the number is ${mid}.`, snap({ mid, answer }));
      return steps;
    }
    if (mid > pick) {
      push(6, `guess(${mid}) says too high — search lower half.`, snap({ mid }));
      hi = mid - 1;
    } else {
      push(7, `guess(${mid}) says too low — search upper half.`, snap({ mid }));
      lo = mid + 1;
    }
  }

  return steps;
}
