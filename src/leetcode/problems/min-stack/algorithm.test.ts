import { describe, it, expect } from "vitest";
import { minStackSteps, type MinStackOp } from "./algorithm";
import { CODE } from "./code";

describe("minStackSteps", () => {
  it("tracks the running minimum through pushes and pops", () => {
    const ops: MinStackOp[] = [
      { name: "push", arg: 5 },
      { name: "push", arg: 2 },
      { name: "push", arg: 7 },
      { name: "getMin" },
      { name: "pop" },
      { name: "getMin" },
    ];
    const steps = minStackSteps(ops);
    // getMin after pushing 5,2,7 is 2.
    expect(steps[4].data.result).toBe("2");
    // after popping 7, min is still 2.
    expect(steps[steps.length - 1].data.result).toBe("2");
  });

  it("keeps the min and value stacks the same height", () => {
    const steps = minStackSteps([
      { name: "push", arg: 1 },
      { name: "push", arg: 0 },
    ]);
    const last = steps[steps.length - 1].data;
    expect(last.st.length).toBe(last.min.length);
    expect(last.min[last.min.length - 1]).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minStackSteps([{ name: "push", arg: 1 }, { name: "getMin" }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
