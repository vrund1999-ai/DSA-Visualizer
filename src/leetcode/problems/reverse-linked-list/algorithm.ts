import type { Step } from "@/core/types";

export interface ReverseData {
  values: number[];
  cur: number | null;
  prev: number | null;
  next: number | null;
  /** How many leading nodes have been reversed into the prev-chain. */
  reversedCount: number;
}

export type ReverseStep = Step<ReverseData>;

/**
 * Iteratively flip each node's `next` pointer to point at the previous node,
 * walking a three-pointer window (prev, cur, next) down the list. `line` indexes
 * CODE.
 */
export function reverseSteps(values: number[]): ReverseStep[] {
  const steps: ReverseStep[] = [];
  let reversedCount = 0;

  const snap = (o: Partial<ReverseData>): ReverseData => ({
    values: [...values],
    cur: null,
    prev: null,
    next: null,
    reversedCount,
    ...o,
  });
  const push = (line: number, explanation: string, data: ReverseData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { reversed: data.reversedCount } });
  };

  push(1, "prev starts as null; cur starts at the head.", snap({ cur: values.length ? 0 : null }));

  for (let i = 0; i < values.length; i++) {
    const next = i + 1 < values.length ? i + 1 : null;
    push(4, `Point node ${values[i]}'s arrow back at ${i === 0 ? "null" : values[i - 1]}.`, snap({ cur: i, prev: i - 1 >= 0 ? i - 1 : null, next, reversedCount: i }));
    reversedCount = i + 1;
    push(6, `Advance: prev = node ${values[i]}, cur = ${next === null ? "null" : values[next]}.`, snap({ cur: next, prev: i, next: null, reversedCount }));
  }

  push(8, "cur reached the end — prev is the new head of the reversed list.", snap({ cur: null, prev: values.length - 1, reversedCount: values.length }));
  return steps;
}
