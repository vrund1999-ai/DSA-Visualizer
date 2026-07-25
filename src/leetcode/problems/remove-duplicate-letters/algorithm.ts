import type { Step } from "@/core/types";

export interface RemoveDupLettersData {
  s: string;
  pos: number | null;
  stack: string[];
  /** character just popped this step */
  popped: string | null;
  /** whether the current char was skipped (already in stack) */
  skipped: boolean;
  answer: string | null;
}

export type RemoveDupLettersStep = Step<RemoveDupLettersData>;

/**
 * Greedy monotonic stack: keep the result lexicographically smallest by popping any
 * larger trailing character that still appears later in the string, then push the
 * current one if it isn't already used. `line` indexes CODE.
 */
export function removeDupLettersSteps(s: string): RemoveDupLettersStep[] {
  const steps: RemoveDupLettersStep[] = [];
  const last: Record<string, number> = {};
  [...s].forEach((c, i) => (last[c] = i));
  const stack: string[] = [];
  const inStack = new Set<string>();

  const snap = (pos: number, o: Partial<RemoveDupLettersData>): RemoveDupLettersData => ({ s, pos, stack: [...stack], popped: null, skipped: false, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<RemoveDupLettersData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(3, "Greedy stack: keep the smallest order, dropping removable larger letters.", -1);

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inStack.has(c)) {
      push(6, `'${c}' already chosen — skip.`, i, { skipped: true });
      continue;
    }
    while (stack.length && stack[stack.length - 1] > c && last[stack[stack.length - 1]] > i) {
      const popped = stack.pop()!;
      inStack.delete(popped);
      push(9, `Pop '${popped}' (> '${c}' and appears again later).`, i, { popped });
    }
    stack.push(c);
    inStack.add(c);
    push(11, `Push '${c}'.`, i);
  }

  push(13, `Result: "${stack.join("")}".`, -1, { answer: stack.join("") });
  return steps;
}
