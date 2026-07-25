import type { Step } from "@/core/types";

export interface ReorderedData {
  n: number;
  target: string;
  /** power of 2 currently compared */
  power: number | null;
  powerSig: string | null;
  matched: boolean;
  answer: boolean | null;
}

export type ReorderedStep = Step<ReorderedData>;

const sig = (x: number) => [...String(x)].sort().join("");

/**
 * Two numbers are digit rearrangements of each other iff their sorted-digit signatures
 * match. Compare n's signature against every power of 2 with the same digit count.
 * `line` indexes CODE.
 */
export function reorderedSteps(n: number): ReorderedStep[] {
  const steps: ReorderedStep[] = [];
  const target = sig(n);
  const digits = String(n).length;

  const snap = (o: Partial<ReorderedData>): ReorderedData => ({ n, target, power: null, powerSig: null, matched: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: ReorderedData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Sorted-digit signature of ${n} is "${target}".`, snap({}));

  for (let p = 1; p <= 1e9; p *= 2) {
    const s = String(p);
    if (s.length > digits) break; // more digits than n can never match
    if (s.length < digits) continue;
    const ps = sig(p);
    const matched = ps === target;
    push(4, `${p} → "${ps}" ${matched ? "= target ✓" : "≠ target"}.`, snap({ power: p, powerSig: ps, matched, answer: matched ? true : null }));
    if (matched) return steps;
  }

  push(7, `No power of 2 matches — false.`, snap({ answer: false }));
  return steps;
}
