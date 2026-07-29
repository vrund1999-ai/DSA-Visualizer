import type { Step } from "@/core/types";

export interface MakeGoodData {
  s: string;
  idx: number | null;
  stack: string[];
  action: "pop" | "push" | null;
  answer: string | null;
}

export type MakeGoodStep = Step<MakeGoodData>;

/**
 * Two adjacent characters are "bad" when they're the same letter in opposite cases (e.g. 'a' and 'A').
 * A stack cancels them on contact: if the incoming character matches the top that way we pop, otherwise
 * we push. Whatever remains is the good string. `line` indexes CODE.
 */
export function makeGoodSteps(s: string): MakeGoodStep[] {
  const steps: MakeGoodStep[] = [];
  const stack: string[] = [];

  const snap = (o: Partial<MakeGoodData>): MakeGoodData => ({ s, idx: null, stack: [...stack], action: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MakeGoodData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Push characters; a same-letter/opposite-case pair cancels on the stack.");

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const top = stack[stack.length - 1];
    if (top && top !== ch && top.toLowerCase() === ch.toLowerCase()) {
      stack.pop();
      push(6, `'${ch}' and top '${top}' are the same letter, opposite case → pop.`, { idx: i, action: "pop" });
    } else {
      stack.push(ch);
      push(8, `'${ch}' → push.`, { idx: i, action: "push" });
    }
  }

  const answer = stack.join("");
  push(10, `Good string: "${answer}".`, { answer });
  return steps;
}
