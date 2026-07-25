import type { Step } from "@/core/types";

export interface RemoveOccData {
  s: string;
  part: string;
  /** start index of the match about to be removed */
  matchAt: number | null;
  answer: string | null;
}

export type RemoveOccStep = Step<RemoveOccData>;

/**
 * Repeatedly delete the leftmost occurrence of `part`. Because a deletion can splice together
 * characters that now form a fresh occurrence, we re-scan from the start each time until none
 * remain. `line` indexes CODE.
 */
export function removeOccSteps(input: string, part: string): RemoveOccStep[] {
  const steps: RemoveOccStep[] = [];
  let s = input;

  const snap = (o: Partial<RemoveOccData>): RemoveOccData => ({ s, part, matchAt: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RemoveOccData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Repeatedly remove the leftmost "${part}" until none remain.`);

  let idx = s.indexOf(part);
  while (idx !== -1) {
    push(3, `Found "${part}" at index ${idx} → remove it.`, { matchAt: idx });
    s = s.slice(0, idx) + s.slice(idx + part.length);
    idx = s.indexOf(part);
    push(4, idx === -1 ? `No more "${part}" — done.` : `Next "${part}" now at index ${idx}.`, { matchAt: idx === -1 ? null : idx });
  }

  push(6, `Final string: "${s}".`, { answer: s });
  return steps;
}
