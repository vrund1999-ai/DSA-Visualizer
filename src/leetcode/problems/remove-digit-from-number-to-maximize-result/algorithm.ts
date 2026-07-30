import type { Step } from "@/core/types";

export interface RemoveDigitData {
  number: string;
  digit: string;
  /** index of the occurrence being tried */
  tryIndex: number | null;
  candidate: string | null;
  best: string;
  /** index removed in the current best */
  bestRemoved: number | null;
  answer: string | null;
}

export type RemoveDigitStep = Step<RemoveDigitData>;

/**
 * Remove Digit to Maximize Result: try deleting each occurrence of the digit and keep the largest resulting
 * string. Since every candidate has the same length, plain string comparison ranks them correctly. `line`
 * indexes CODE.
 */
export function removeDigitSteps(number: string, digit: string): RemoveDigitStep[] {
  const steps: RemoveDigitStep[] = [];
  let best = "";
  let bestRemoved = -1;

  const snap = (o: Partial<RemoveDigitData>): RemoveDigitData => ({
    number,
    digit,
    tryIndex: null,
    candidate: null,
    best,
    bestRemoved: bestRemoved >= 0 ? bestRemoved : null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<RemoveDigitData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Try removing each '${digit}' and keep the largest result.`);

  for (let i = 0; i < number.length; i++) {
    if (number[i] !== digit) continue;
    const candidate = number.slice(0, i) + number.slice(i + 1);
    const better = candidate > best;
    if (better) {
      best = candidate;
      bestRemoved = i;
    }
    push(6, `Remove position ${i} → ${candidate}${better ? " (new best)" : ""}.`, { tryIndex: i, candidate });
  }

  push(9, `Maximum result = ${best}.`, { answer: best });
  return steps;
}
