import type { Highlight, Step } from "@/core/types";

export interface MinRemoveData {
  chars: string[];
  i: number | null;
  stack: number[];
  removed: number[];
  phase: "scan" | "cleanup" | "done";
}

export type MinRemoveStep = Step<MinRemoveData>;

/**
 * A stack holds indices of unmatched '('. Each ')' either matches the top '(' or,
 * if none, is itself unmatched and marked for removal. Any '(' still on the stack
 * at the end is also unmatched. `line` indexes CODE.
 */
export function minRemoveSteps(s: string): MinRemoveStep[] {
  const chars = [...s];
  const steps: MinRemoveStep[] = [];
  const stack: number[] = [];
  const removed: number[] = [];

  const snap = (o: Partial<MinRemoveData>): MinRemoveData => ({ chars: [...chars], i: null, stack: [...stack], removed: [...removed], phase: "scan", ...o });
  const push = (line: number, explanation: string, data: MinRemoveData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Track unmatched '(' on a stack; mark stray ')' for removal.", snap({}), []);

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "(") {
      stack.push(i);
      push(3, `'(' at ${i} — push its index.`, snap({ i }), [{ ref: i, role: "active" }]);
    } else if (chars[i] === ")") {
      if (stack.length) {
        const m = stack.pop()!;
        push(5, `')' at ${i} matches '(' at ${m}.`, snap({ i }), [{ ref: m, role: "sorted" }, { ref: i, role: "sorted" }]);
      } else {
        removed.push(i);
        push(6, `')' at ${i} has no match — mark for removal.`, snap({ i }), [{ ref: i, role: "swapped" }]);
      }
    }
  }

  for (const idx of stack) removed.push(idx);
  if (stack.length) {
    push(9, `Unmatched '(' left: [${stack.join(", ")}] — remove them.`, snap({ phase: "cleanup" }), stack.map((idx) => ({ ref: idx, role: "swapped" })));
  }

  const result = chars.filter((_, k) => !removed.includes(k)).join("");
  push(10, `Result after removing ${removed.length} char(s): "${result}".`, snap({ phase: "done" }), removed.map((idx) => ({ ref: idx, role: "swapped" })));
  return steps;
}
