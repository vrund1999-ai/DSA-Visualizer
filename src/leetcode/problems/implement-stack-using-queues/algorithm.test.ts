import { describe, it, expect } from "vitest";
import { stackQueueSteps, type StackOp } from "./algorithm";
import { CODE } from "./code";

const results = (ops: StackOp[]) =>
  stackQueueSteps(ops)
    .filter((s) => s.data.result !== null && (s.data.op === "pop()" || s.data.op === "top()"))
    .map((s) => s.data.result);

describe("stackQueueSteps", () => {
  it("behaves as LIFO", () => {
    const ops: StackOp[] = [
      { type: "push", x: 1 },
      { type: "push", x: 2 },
      { type: "push", x: 3 },
      { type: "top" }, // 3
      { type: "pop" }, // 3
      { type: "pop" }, // 2
      { type: "pop" }, // 1
    ];
    expect(results(ops)).toEqual([3, 3, 2, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of stackQueueSteps([{ type: "push", x: 1 }, { type: "pop" }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
