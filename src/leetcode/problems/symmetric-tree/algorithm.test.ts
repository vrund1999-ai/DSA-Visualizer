import { describe, it, expect } from "vitest";
import { symmetricSteps } from "./algorithm";
import { CODE } from "./code";

const isSym = (heap: (number | null)[]) => {
  const steps = symmetricSteps(heap);
  return steps[steps.length - 1].data.result;
};

describe("symmetricSteps", () => {
  it("accepts symmetric trees", () => {
    expect(isSym([1, 2, 2, 3, 4, 4, 3])).toBe(true);
    expect(isSym([])).toBe(true);
  });

  it("rejects asymmetric trees", () => {
    expect(isSym([1, 2, 2, null, 3, null, 3])).toBe(false);
    expect(isSym([1, 2, 3])).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of symmetricSteps([1, 2, 2, 3, 4, 4, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
