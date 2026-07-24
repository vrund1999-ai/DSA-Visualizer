import type { Step } from "@/core/types";

export type QueueOp =
  | { type: "push"; x: number }
  | { type: "pop" }
  | { type: "peek" };

export interface QueueStacksData {
  inS: number[];
  outS: number[];
  op: string;
  /** true while items are being poured from inS to outS */
  transferring: boolean;
  result: number | null;
}

export type QueueStacksStep = Step<QueueStacksData>;

/**
 * FIFO from two LIFO stacks: push onto `inS`; to pop/peek, if `outS` is empty pour
 * everything from `inS` into `outS` (which reverses it, exposing the oldest element
 * on top). Amortized O(1). `line` indexes CODE.
 */
export function queueStacksSteps(ops: QueueOp[]): QueueStacksStep[] {
  const steps: QueueStacksStep[] = [];
  const inS: number[] = [];
  const outS: number[] = [];

  const snap = (o: Partial<QueueStacksData>): QueueStacksData => ({ inS: [...inS], outS: [...outS], op: "", transferring: false, result: null, ...o });
  const push = (line: number, explanation: string, data: QueueStacksData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const transfer = (opLabel: string) => {
    if (outS.length === 0) {
      while (inS.length) {
        outS.push(inS.pop()!);
        push(6, `Pour ${outS[outS.length - 1]} from in-stack to out-stack.`, snap({ op: opLabel, transferring: true }));
      }
    }
  };

  for (const op of ops) {
    if (op.type === "push") {
      inS.push(op.x);
      push(2, `push(${op.x}) → onto in-stack.`, snap({ op: `push(${op.x})` }));
    } else if (op.type === "pop") {
      transfer("pop()");
      const r = outS.pop()!;
      push(8, `pop() → ${r} (front of queue).`, snap({ op: "pop()", result: r }));
    } else {
      transfer("peek()");
      const r = outS[outS.length - 1];
      push(9, `peek() → ${r}.`, snap({ op: "peek()", result: r }));
    }
  }

  return steps;
}
