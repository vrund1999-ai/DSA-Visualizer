import type { Step } from "@/core/types";

export interface DoubleExistData {
  arr: number[];
  idx: number | null;
  seen: number[];
  /** the earlier value that matches (2n or n/2), once found */
  match: number | null;
  answer: boolean | null;
}

export type DoubleExistStep = Step<DoubleExistData>;

/**
 * For each value we only need to know whether its double or half has already appeared, so a set
 * of previously-seen numbers answers both checks in O(1). Adding each value after checking keeps
 * the two indices distinct. `line` indexes CODE.
 */
export function doubleExistSteps(arr: number[]): DoubleExistStep[] {
  const steps: DoubleExistStep[] = [];
  const seen = new Set<number>();

  const snap = (o: Partial<DoubleExistData>): DoubleExistData => ({ arr, idx: null, seen: [...seen], match: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DoubleExistData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Track seen values; for each n check whether 2n or n/2 was already seen.");

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (seen.has(2 * n)) {
      push(5, `Seen ${2 * n} earlier and now ${n} → pair (${n}, ${2 * n}) exists → true.`, { idx: i, match: 2 * n, answer: true });
      return steps;
    }
    if (n % 2 === 0 && seen.has(n / 2)) {
      push(5, `Seen ${n / 2} earlier and now ${n} → pair (${n / 2}, ${n}) exists → true.`, { idx: i, match: n / 2, answer: true });
      return steps;
    }
    seen.add(n);
    push(6, `No match for ${n} yet; remember it.`, { idx: i });
  }

  push(8, "No value has its double present → false.", { answer: false });
  return steps;
}
