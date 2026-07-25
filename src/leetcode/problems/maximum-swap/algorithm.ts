import type { Step } from "@/core/types";

export interface MaxSwapData {
  digits: string[];
  /** index i currently examined */
  i: number | null;
  /** the bigger digit index chosen to swap with */
  swapWith: number | null;
  swapped: boolean;
  answer: number | null;
}

export type MaxSwapStep = Step<MaxSwapData>;

/**
 * Precompute the last index of every digit. Scanning left to right, the first place a
 * strictly larger digit occurs later is where a single swap yields the maximum — swap
 * with its last occurrence to push the big digit as far left as possible. `line`
 * indexes CODE.
 */
export function maxSwapSteps(num: number): MaxSwapStep[] {
  const steps: MaxSwapStep[] = [];
  const d = String(num).split("");
  const last: Record<string, number> = {};
  d.forEach((c, i) => (last[c] = i));

  const snap = (o: Partial<MaxSwapData>): MaxSwapData => ({ digits: [...d], i: null, swapWith: null, swapped: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: MaxSwapData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Record each digit's last index, then find the first improving swap.", snap({}));

  for (let i = 0; i < d.length; i++) {
    push(4, `At index ${i} (digit ${d[i]}): look for a larger digit later.`, snap({ i }));
    for (let big = 9; big > +d[i]; big--) {
      const idx = last[String(big)];
      if (idx !== undefined && idx > i) {
        push(6, `Digit ${big} appears later at ${idx} — swap it in.`, snap({ i, swapWith: idx }));
        [d[i], d[idx]] = [d[idx], d[i]];
        push(7, `After swap: ${d.join("")}.`, snap({ i, swapWith: idx, swapped: true, answer: +d.join("") }));
        return steps;
      }
    }
  }

  push(12, `Already maximal: ${num}.`, snap({ answer: num }));
  return steps;
}
