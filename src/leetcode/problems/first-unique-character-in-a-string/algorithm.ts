import type { Highlight, Step } from "@/core/types";

export interface CountEntry {
  char: string;
  n: number;
}

export interface FirstUniqData {
  chars: string[];
  i: number | null;
  counts: CountEntry[];
  phase: "count" | "scan" | "done";
  answer: number | null;
}

export type FirstUniqStep = Step<FirstUniqData>;

const toEntries = (m: Map<string, number>): CountEntry[] =>
  [...m.entries()].map(([char, n]) => ({ char, n }));

/**
 * Two passes: tally every character's frequency, then scan left to right for the
 * first with a count of exactly 1. `line` indexes CODE.
 */
export function firstUniqSteps(s: string): FirstUniqStep[] {
  const chars = [...s];
  const steps: FirstUniqStep[] = [];
  const count = new Map<string, number>();
  let answer: number | null = null;

  const snap = (o: Partial<FirstUniqData>): FirstUniqData => ({
    chars: [...chars],
    i: null,
    counts: toEntries(count),
    phase: "count",
    answer,
    ...o,
  });
  const push = (line: number, explanation: string, data: FirstUniqData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Pass 1: count how many times each character occurs.", snap({}), []);
  for (let i = 0; i < chars.length; i++) {
    count.set(chars[i], (count.get(chars[i]) ?? 0) + 1);
    push(2, `Count '${chars[i]}' → ${count.get(chars[i])}.`, snap({ i, phase: "count" }), [{ ref: i, role: "current" }]);
  }

  push(3, "Pass 2: find the first character with count 1.", snap({ phase: "scan" }), []);
  for (let i = 0; i < chars.length; i++) {
    const unique = count.get(chars[i]) === 1;
    if (unique) {
      answer = i;
      push(4, `'${chars[i]}' at index ${i} is unique — that's the answer.`, snap({ i, phase: "done", answer: i }), [{ ref: i, role: "target" }]);
      return steps;
    }
    push(4, `'${chars[i]}' occurs ${count.get(chars[i])}× — skip.`, snap({ i, phase: "scan" }), [{ ref: i, role: "visited" }]);
  }

  push(5, "No unique character — return -1.", snap({ phase: "done", answer: null }), []);
  return steps;
}
