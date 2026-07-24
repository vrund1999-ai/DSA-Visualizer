import type { Highlight, Step } from "@/core/types";

export interface CandyData {
  ratings: number[];
  candies: number[];
  i: number | null;
  phase: "left" | "right" | "done";
  total: number;
}

export type CandyStep = Step<CandyData>;

/**
 * Two greedy passes over the candy counts (all starting at 1): left-to-right
 * ensures each child with a higher rating than the left neighbour gets more; a
 * right-to-left pass does the same for the right neighbour, taking the max so
 * both constraints hold. `line` indexes CODE.
 */
export function candySteps(ratings: number[]): CandyStep[] {
  const n = ratings.length;
  const candies = new Array(n).fill(1);
  const steps: CandyStep[] = [];

  const total = () => candies.reduce((a, b) => a + b, 0);
  const snap = (i: number | null, phase: CandyData["phase"]): CandyData => ({ ratings: [...ratings], candies: [...candies], i, phase, total: total() });
  const push = (line: number, explanation: string, data: CandyData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { total: data.total } });
  };

  push(1, "Everyone starts with 1 candy; two passes fix the neighbours.", snap(null, "left"), []);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
      push(3, `Left pass: rating ${ratings[i]} > ${ratings[i - 1]} — give ${candies[i]}.`, snap(i, "left"), [{ ref: i - 1, role: "compared" }, { ref: i, role: "target" }]);
    } else {
      push(2, `Left pass: rating ${ratings[i]} ≤ ${ratings[i - 1]} — keep ${candies[i]}.`, snap(i, "left"), [{ ref: i, role: "visited" }]);
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
      push(6, `Right pass: rating ${ratings[i]} > ${ratings[i + 1]} — give max(${candies[i]}).`, snap(i, "right"), [{ ref: i + 1, role: "compared" }, { ref: i, role: "target" }]);
    } else {
      push(5, `Right pass: rating ${ratings[i]} ≤ ${ratings[i + 1]} — no change.`, snap(i, "right"), [{ ref: i, role: "visited" }]);
    }
  }

  push(7, `Minimum candies needed: ${total()}.`, snap(null, "done"), []);
  return steps;
}
