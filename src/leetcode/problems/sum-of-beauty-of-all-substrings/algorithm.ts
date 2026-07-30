import type { Step } from "@/core/types";

export interface BeautyData {
  s: string;
  i: number | null;
  j: number | null;
  /** char frequencies in the current substring s[i..j] */
  freq: { ch: string; count: number }[];
  beauty: number | null;
  total: number;
  answer: number | null;
}

export type BeautyStep = Step<BeautyData>;

const MAX_STEPS = 400;

/**
 * The beauty of a string is (highest char frequency − lowest char frequency). Sum the beauty over every
 * substring by fixing a start i and extending the end j, maintaining a frequency table. `line` indexes CODE.
 */
export function beautySteps(s: string): BeautyStep[] {
  const steps: BeautyStep[] = [];
  let total = 0;

  const snap = (o: Partial<BeautyData>): BeautyData => ({
    s,
    i: null,
    j: null,
    freq: [],
    beauty: null,
    total,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<BeautyData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sum the beauty (max − min char frequency) over all substrings of "${s}".`);

  for (let i = 0; i < s.length; i++) {
    const freq = new Map<string, number>();
    for (let j = i; j < s.length; j++) {
      freq.set(s[j], (freq.get(s[j]) ?? 0) + 1);
      const counts = [...freq.values()];
      const beauty = Math.max(...counts) - Math.min(...counts);
      total += beauty;
      const freqArr = [...freq.entries()].map(([ch, count]) => ({ ch, count }));
      push(9, `"${s.slice(i, j + 1)}" → beauty ${beauty}; running total ${total}.`, { i, j, freq: freqArr, beauty });
    }
  }

  push(12, `Sum of beauty over all substrings = ${total}.`, { answer: total });
  return steps;
}
