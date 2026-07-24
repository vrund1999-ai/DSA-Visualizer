import type { Step } from "@/core/types";

export interface LargestNumberData {
  order: string[];
  /** the two strings currently being compared */
  compare: [number, number] | null;
  /** which order ("ab" vs "ba") won the comparison */
  note: string | null;
  sorted: boolean;
  answer: string | null;
}

export type LargestNumberStep = Step<LargestNumberData>;

/**
 * Order the numbers so that concatenation is maximised: a comes before b when a+b >
 * b+a as strings. We surface the comparisons of a selection sort so each decision is
 * visible, which matches the final order a library sort produces. `line` indexes CODE.
 */
export function largestNumberSteps(nums: number[]): LargestNumberStep[] {
  const steps: LargestNumberStep[] = [];
  const order = nums.map(String);

  const snap = (o: Partial<LargestNumberData>): LargestNumberData => ({ order: [...order], compare: null, note: null, sorted: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: LargestNumberData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Order strings so a+b beats b+a, then concatenate.", snap({}));

  // selection sort using the pairwise concatenation comparator
  for (let i = 0; i < order.length; i++) {
    for (let j = i + 1; j < order.length; j++) {
      const a = order[i];
      const b = order[j];
      const swap = b + a > a + b; // b should come first
      push(3, `Compare "${a}${b}" vs "${b}${a}" → ${swap ? `"${b}" first` : `"${a}" first`}.`, snap({ compare: [i, j], note: swap ? `${b}${a}` : `${a}${b}` }));
      if (swap) {
        [order[i], order[j]] = [order[j], order[i]];
      }
    }
  }

  const answer = order[0] === "0" ? "0" : order.join("");
  push(5, `Largest number: ${answer}.`, snap({ sorted: true, answer }));
  return steps;
}
