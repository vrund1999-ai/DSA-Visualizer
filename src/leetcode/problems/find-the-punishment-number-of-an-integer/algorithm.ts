import type { Step } from "@/core/types";

export interface PunishmentData {
  n: number;
  /** i currently tested */
  i: number | null;
  square: number | null;
  /** the winning partition pieces of the square's digits, if any */
  parts: string[] | null;
  qualifies: boolean | null;
  total: number;
  answer: number | null;
}

export type PunishmentStep = Step<PunishmentData>;

/** Backtracking split of s (from `start`) into parts summing to target; returns the pieces or null. */
function partition(s: string, start: number, target: number): string[] | null {
  if (start === s.length) return target === 0 ? [] : null;
  let num = 0;
  for (let e = start; e < s.length; e++) {
    num = num * 10 + Number(s[e]);
    if (num > target) break;
    const rest = partition(s, e + 1, target - num);
    if (rest) return [s.slice(start, e + 1), ...rest];
  }
  return null;
}

/**
 * i·i contributes to the punishment number when the decimal digits of i·i can be split into
 * contiguous chunks that add up to i. We test each i by backtracking over split points, pruning
 * once a running chunk exceeds the target. `line` indexes CODE.
 */
export function punishmentSteps(n: number): PunishmentStep[] {
  const steps: PunishmentStep[] = [];
  let total = 0;

  const snap = (o: Partial<PunishmentData>): PunishmentData => ({ n, i: null, square: null, parts: null, qualifies: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PunishmentData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sum i·i for every i in 1..${n} whose square splits into parts summing to i.`);

  for (let i = 1; i <= n; i++) {
    const square = i * i;
    const parts = partition(String(square), 0, i);
    if (parts) {
      total += square;
      push(5, `${i}: ${square} = ${parts.join(" + ")} = ${i} ✓ → add ${square} (total ${total}).`, { i, square, parts, qualifies: true });
    } else {
      push(4, `${i}: ${square} cannot be split to sum ${i} ✗.`, { i, square, qualifies: false });
    }
  }

  push(7, `Punishment number of ${n}: ${total}.`, { answer: total });
  return steps;
}
