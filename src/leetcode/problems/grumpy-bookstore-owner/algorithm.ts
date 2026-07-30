import type { Step } from "@/core/types";

export interface GrumpyData {
  customers: number[];
  grumpy: number[];
  X: number;
  base: number;
  /** current window [left, right] */
  right: number | null;
  win: number;
  best: number;
  /** window index range achieving best, for outlining */
  bestRange: [number, number] | null;
  answer: number | null;
}

export type GrumpyStep = Step<GrumpyData>;

/**
 * Customers on non-grumpy minutes are always satisfied (the base). The secret technique recovers the
 * grumpy-minute customers inside one length-X window, so a sliding window finds the best block to
 * suppress; the answer is base plus that maximum recovery. `line` indexes CODE.
 */
export function grumpySteps(customers: number[], grumpy: number[], X: number): GrumpyStep[] {
  const steps: GrumpyStep[] = [];
  const n = customers.length;
  let base = 0;
  for (let i = 0; i < n; i++) if (!grumpy[i]) base += customers[i];

  let win = 0;
  let best = 0;
  let bestRange: [number, number] | null = null;

  const snap = (o: Partial<GrumpyData>): GrumpyData => ({ customers, grumpy, X, base, right: null, win, best, bestRange, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<GrumpyData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Base satisfied (non-grumpy minutes): ${base}. Now find the best length-${X} recovery window.`);

  for (let i = 0; i < n; i++) {
    if (grumpy[i]) win += customers[i];
    if (i >= X && grumpy[i - X]) win -= customers[i - X];
    if (win > best) {
      best = win;
      bestRange = [Math.max(0, i - X + 1), i];
    }
    push(9, `Window ending at ${i}: recoverable ${win} (best ${best}).`, { right: i });
  }

  push(11, `Maximum satisfied = base ${base} + recovery ${best} = ${base + best}.`, { answer: base + best });
  return steps;
}
