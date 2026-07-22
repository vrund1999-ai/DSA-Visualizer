import { describe, it, expect } from "vitest";
import { sameTreeSteps } from "./algorithm";
import { CODE } from "./code";

const same = (p: (number | null)[], q: (number | null)[]) => {
  const steps = sameTreeSteps({ p, q });
  return steps[steps.length - 1].data.result;
};

describe("sameTreeSteps", () => {
  it("recognizes identical trees", () => {
    expect(same([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(same([], [])).toBe(true);
  });

  it("detects structural and value differences", () => {
    expect(same([1, 2], [1, null, 2])).toBe(false);
    expect(same([1, 2, 1], [1, 1, 2])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of sameTreeSteps({ p: [1, 2, 3], q: [1, 2, 3] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
