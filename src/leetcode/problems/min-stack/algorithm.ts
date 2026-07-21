import type { Step } from "@/core/types";

export interface MinStackOp {
  name: "push" | "pop" | "top" | "getMin";
  arg?: number;
}

export interface MinStackData {
  st: number[];
  min: number[];
  op: string;
  result: string | null;
}

export type MinStackStep = Step<MinStackData>;

/**
 * Alongside the value stack, keep a parallel stack whose top is always the
 * minimum of everything below it. Pushing records min(x, currentMin); popping
 * removes both tops — so getMin is O(1). `line` indexes CODE.
 */
export function minStackSteps(ops: MinStackOp[]): MinStackStep[] {
  const steps: MinStackStep[] = [];
  const st: number[] = [];
  const min: number[] = [];

  const push = (line: number, op: string, result: string | null) => {
    steps.push({
      id: steps.length,
      line,
      explanation: result ? `${op} → ${result}` : op,
      data: { st: [...st], min: [...min], op, result },
      highlights: [],
      metrics: { size: st.length },
    });
  };

  push(1, "new MinStack()", null);

  for (const { name, arg } of ops) {
    if (name === "push" && arg !== undefined) {
      st.push(arg);
      const m = min.length ? Math.min(arg, min[min.length - 1]) : arg;
      min.push(m);
      push(6, `push(${arg})`, `min is ${m}`);
    } else if (name === "pop") {
      st.pop();
      min.pop();
      push(8, "pop()", "removed top of both stacks");
    } else if (name === "top") {
      push(9, "top()", st.length ? String(st[st.length - 1]) : "empty");
    } else if (name === "getMin") {
      push(10, "getMin()", min.length ? String(min[min.length - 1]) : "empty");
    }
  }

  return steps;
}
