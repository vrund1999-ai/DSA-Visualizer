import type { Step } from "@/core/types";

export type StackOp =
  | { type: "push"; x: number }
  | { type: "pop" }
  | { type: "top" };

export interface StackQueueData {
  queue: number[];
  op: string;
  /** true while the push rotation is happening */
  rotating: boolean;
  result: number | null;
}

export type StackQueueStep = Step<StackQueueData>;

/**
 * LIFO from a single FIFO queue: after enqueuing a new value, rotate the queue so
 * that value moves to the front, making pop/top O(1). The push therefore costs O(n).
 * `line` indexes CODE.
 */
export function stackQueueSteps(ops: StackOp[]): StackQueueStep[] {
  const steps: StackQueueStep[] = [];
  const q: number[] = [];

  const snap = (o: Partial<StackQueueData>): StackQueueData => ({ queue: [...q], op: "", rotating: false, result: null, ...o });
  const push = (line: number, explanation: string, data: StackQueueData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  for (const op of ops) {
    if (op.type === "push") {
      q.push(op.x);
      push(3, `push(${op.x}) — enqueue at the back.`, snap({ op: `push(${op.x})` }));
      for (let i = 1; i < q.length; i++) {
        q.push(q.shift()!);
        push(6, `Rotate: move front to back (${q.length - 1} left).`, snap({ op: `push(${op.x})`, rotating: true }));
      }
    } else if (op.type === "pop") {
      const r = q.shift()!;
      push(8, `pop() → ${r} (front = newest).`, snap({ op: "pop()", result: r }));
    } else {
      const r = q[0];
      push(9, `top() → ${r}.`, snap({ op: "top()", result: r }));
    }
  }

  return steps;
}
