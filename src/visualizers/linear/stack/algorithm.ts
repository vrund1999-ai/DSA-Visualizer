import type { Highlight } from "@/core/types";
import type { StackInput, StackStep } from "./types";

/**
 * Pure step generator for a LIFO stack driven by a sequence of push/pop
 * operations. A pop is shown in two steps — read the top, then remove it — so
 * the departing value is visible. `line` points into STACK_CODE.
 */
export function stackSteps(input: StackInput): StackStep[] {
  const items: number[] = [];
  const steps: StackStep[] = [];
  let operations = 0;

  const push = (line: number, explanation: string, highlights: Highlight[]) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { items: [...items] },
      highlights,
      metrics: { size: items.length, operations },
    });
  };

  push(0, "A stack is LIFO: values are pushed onto and popped from the top.", []);

  for (const action of input) {
    operations++;
    if (action.op === "push") {
      items.push(action.value);
      push(1, `push(${action.value}): add it on top.`, [
        { ref: items.length - 1, role: "swapped" },
      ]);
    } else {
      if (items.length === 0) {
        push(4, `pop(): the stack is empty — underflow.`, []);
        continue;
      }
      const top = items[items.length - 1];
      push(5, `pop(): read the top value ${top}.`, [
        { ref: items.length - 1, role: "current" },
      ]);
      items.pop();
      push(5, `Remove ${top}; size is now ${items.length}.`, []);
    }
  }

  return steps;
}
