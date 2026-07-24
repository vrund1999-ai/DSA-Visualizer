import type { Step } from "@/core/types";

export interface RemoveKData {
  num: string[];
  pos: number;
  stack: string[];
  k: number;
  /** digit just popped, for narration */
  popped: string | null;
  answer: string | null;
}

export type RemoveKStep = Step<RemoveKData>;

/**
 * Build the smallest number by a greedy monotonic stack: before pushing a digit, pop
 * any larger digits on top while removals remain (each pop deletes a costly high digit
 * early). Any leftover k is trimmed from the end. `line` indexes CODE.
 */
export function removeKSteps(num: string, k: number): RemoveKStep[] {
  const steps: RemoveKStep[] = [];
  const digits = num.split("");
  const stack: string[] = [];
  let remaining = k;

  const snap = (pos: number, o: Partial<RemoveKData>): RemoveKData => ({ num: [...digits], pos, stack: [...stack], k: remaining, popped: null, answer: null, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<RemoveKData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, -1, `Greedily drop ${k} digit(s) to minimize the number.`);

  for (let i = 0; i < digits.length; i++) {
    const d = digits[i];
    while (remaining > 0 && stack.length && stack[stack.length - 1] > d) {
      const popped = stack.pop()!;
      remaining--;
      push(5, i, `${popped} > ${d} — pop it (${remaining} removal(s) left).`, { popped });
    }
    stack.push(d);
    push(7, i, `Push ${d}.`);
  }

  if (remaining > 0) {
    stack.length -= remaining;
    push(9, -1, `Digits ascending — trim ${remaining} from the end.`);
    remaining = 0;
  }

  const s = stack.join("").replace(/^0+/, "");
  const answer = s || "0";
  push(11, -1, `Result: ${answer}.`, { answer });
  return steps;
}
