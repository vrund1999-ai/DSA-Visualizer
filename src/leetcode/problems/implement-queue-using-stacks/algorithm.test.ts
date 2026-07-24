import { describe, it, expect } from "vitest";
import { queueStacksSteps, type QueueOp } from "./algorithm";
import { CODE } from "./code";

const results = (ops: QueueOp[]) =>
  queueStacksSteps(ops)
    .filter((s) => s.data.result !== null && (s.data.op === "pop()" || s.data.op === "peek()"))
    .map((s) => s.data.result);

describe("queueStacksSteps", () => {
  it("behaves as FIFO", () => {
    const ops: QueueOp[] = [
      { type: "push", x: 1 },
      { type: "push", x: 2 },
      { type: "push", x: 3 },
      { type: "peek" }, // 1
      { type: "pop" }, // 1
      { type: "push", x: 4 },
      { type: "pop" }, // 2
      { type: "pop" }, // 3
      { type: "pop" }, // 4
    ];
    expect(results(ops)).toEqual([1, 1, 2, 3, 4]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of queueStacksSteps([{ type: "push", x: 1 }, { type: "pop" }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
