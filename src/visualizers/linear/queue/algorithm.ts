import type { Highlight } from "@/core/types";
import type { QueueInput, QueueStep } from "./types";

/**
 * Pure step generator for a FIFO queue driven by enqueue/dequeue operations. A
 * dequeue is shown in two steps — read the front, then remove it. `line` points
 * into QUEUE_CODE.
 */
export function queueSteps(input: QueueInput): QueueStep[] {
  const items: number[] = [];
  const steps: QueueStep[] = [];
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

  push(0, "A queue is FIFO: enqueue adds at the rear, dequeue removes from the front.", []);

  for (const action of input) {
    operations++;
    if (action.op === "enqueue") {
      items.push(action.value);
      push(1, `enqueue(${action.value}): add it at the rear.`, [
        { ref: items.length - 1, role: "swapped" },
      ]);
    } else {
      if (items.length === 0) {
        push(4, `dequeue(): the queue is empty — underflow.`, []);
        continue;
      }
      const front = items[0];
      push(5, `dequeue(): read the front value ${front}.`, [
        { ref: 0, role: "current" },
      ]);
      items.shift();
      push(5, `Remove ${front}; size is now ${items.length}.`, []);
    }
  }

  return steps;
}
