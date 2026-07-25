import type { Step } from "@/core/types";

export interface ClearDigitsData {
  s: string;
  idx: number | null;
  stack: string[];
  action: "pop" | "push" | null;
  answer: string | null;
}

export type ClearDigitsStep = Step<ClearDigitsData>;

/**
 * Each digit deletes itself and the nearest non-digit to its left — exactly the letter on top of
 * a stack of pending letters. So we push letters and, on every digit, pop one; whatever remains is
 * the cleared string. `line` indexes CODE.
 */
export function clearDigitsSteps(s: string): ClearDigitsStep[] {
  const steps: ClearDigitsStep[] = [];
  const stack: string[] = [];

  const snap = (o: Partial<ClearDigitsData>): ClearDigitsData => ({ s, idx: null, stack: [...stack], action: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ClearDigitsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Push letters on a stack; each digit pops the nearest letter to its left.");

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch >= "0" && ch <= "9") {
      stack.pop();
      push(4, `'${ch}' is a digit → delete it and pop the letter before it.`, { idx: i, action: "pop" });
    } else {
      stack.push(ch);
      push(6, `'${ch}' is a letter → push it.`, { idx: i, action: "push" });
    }
  }

  const answer = stack.join("");
  push(8, `Cleared string: "${answer}".`, { answer });
  return steps;
}
