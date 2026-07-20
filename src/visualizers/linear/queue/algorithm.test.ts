import { describe, it, expect } from "vitest";
import { queueSteps } from "./algorithm";
import { QUEUE_CODE } from "./code";
import type { QueueInput } from "./types";

const input: QueueInput = [
  { op: "enqueue", value: 5 },
  { op: "enqueue", value: 8 },
  { op: "dequeue" },
  { op: "enqueue", value: 3 },
  { op: "dequeue" },
];

describe("queueSteps", () => {
  it("respects FIFO order (first enqueued is first dequeued)", () => {
    const steps = queueSteps([
      { op: "enqueue", value: 1 },
      { op: "enqueue", value: 2 },
      { op: "dequeue" }, // removes 1
    ]);
    expect(steps[steps.length - 1].data.items).toEqual([2]);
  });

  it("leaves the expected items after a mixed sequence", () => {
    // enqueue 5,8; dequeue(5); enqueue 3; dequeue(8) ⇒ [3]
    expect(queueSteps(input)[queueSteps(input).length - 1].data.items).toEqual([3]);
  });

  it("never removes from an empty queue (reports underflow)", () => {
    const steps = queueSteps([{ op: "dequeue" }]);
    expect(steps.some((s) => /underflow/i.test(s.explanation))).toBe(true);
    expect(steps[steps.length - 1].data.items).toEqual([]);
  });

  it("size metric equals the item count in every step", () => {
    for (const s of queueSteps(input)) {
      expect(s.metrics!.size).toBe(s.data.items.length);
    }
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of queueSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(QUEUE_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(queueSteps(input)).toEqual(queueSteps(input));
  });
});
