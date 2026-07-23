import { describe, it, expect } from "vitest";
import { removeNthSteps } from "./algorithm";
import { CODE } from "./code";

const remove = (values: number[], n: number) => {
  const steps = removeNthSteps({ values, n });
  return steps[steps.length - 1].data.values;
};

describe("removeNthSteps", () => {
  it("removes the nth node from the end", () => {
    expect(remove([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 3, 5]);
    expect(remove([1, 2], 1)).toEqual([1]);
    expect(remove([1, 2], 2)).toEqual([2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeNthSteps({ values: [1, 2, 3, 4, 5], n: 2 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
