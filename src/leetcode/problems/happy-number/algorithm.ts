import type { Step } from "@/core/types";

export interface HappyData {
  n: number;
  digits: number[];
  seen: number[];
  result: boolean | null;
}

export type HappyStep = Step<HappyData>;

const squareSum = (n: number) =>
  String(n)
    .split("")
    .reduce((s, d) => s + Number(d) * Number(d), 0);

/**
 * Repeatedly replace n with the sum of the squares of its digits. Happy numbers
 * reach 1; unhappy ones fall into a cycle, which we detect by remembering every
 * value seen. `line` indexes CODE.
 */
export function happySteps(input: number): HappyStep[] {
  const steps: HappyStep[] = [];
  const seen = new Set<number>();
  let n = input;

  const snap = (o: Partial<HappyData>): HappyData => ({
    n,
    digits: String(n).split("").map(Number),
    seen: [...seen],
    result: null,
    ...o,
  });
  const push = (line: number, explanation: string, data: HappyData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Replace n with the sum of its digits' squares until it reaches 1 or repeats.`, snap({}));

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    const next = squareSum(n);
    const parts = String(n).split("").map((d) => `${d}²`).join(" + ");
    n = next;
    push(5, `${parts} = ${next}.`, snap({}));
  }

  const result = n === 1;
  push(7, result ? "Reached 1 — it's a happy number." : `Value ${n} was already seen — stuck in a cycle, not happy.`, snap({ result }));
  return steps;
}
