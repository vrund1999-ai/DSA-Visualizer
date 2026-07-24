import { describe, it, expect } from "vitest";
import { randomSetSteps, type RandomSetOp } from "./algorithm";
import { CODE } from "./code";

describe("randomSetSteps", () => {
  it("reports insert/remove results and keeps the map consistent", () => {
    const ops: RandomSetOp[] = [
      { op: "insert", arg: 1 },
      { op: "remove", arg: 2 },
      { op: "insert", arg: 2 },
      { op: "remove", arg: 1 },
      { op: "insert", arg: 2 },
    ];
    const steps = randomSetSteps(ops);
    const results = steps.filter((s) => s.data.result !== null).map((s) => s.data.result);
    expect(results).toEqual(["true", "false (absent)", "true", "true", "false (already present)"]);
  });

  it("keeps array and map in sync after swap-and-pop removal", () => {
    const steps = randomSetSteps([
      { op: "insert", arg: 5 },
      { op: "insert", arg: 6 },
      { op: "insert", arg: 7 },
      { op: "remove", arg: 5 },
    ]);
    const last = steps[steps.length - 1].data;
    expect(new Set(last.arr)).toEqual(new Set([6, 7]));
    for (const e of last.idx) expect(last.arr[e.index]).toBe(e.value);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of randomSetSteps([{ op: "insert", arg: 1 }, { op: "getRandom" }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
