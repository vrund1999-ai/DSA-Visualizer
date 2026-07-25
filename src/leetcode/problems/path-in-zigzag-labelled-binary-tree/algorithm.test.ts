import { describe, it, expect } from "vitest";
import { zigzagPathSteps } from "./algorithm";
import { CODE } from "./code";

const path = (label: number) => {
  const steps = zigzagPathSteps(label);
  return steps[steps.length - 1].data.answer;
};

describe("zigzagPathSteps", () => {
  it("computes the root-to-node path", () => {
    expect(path(14)).toEqual([1, 3, 4, 14]);
    expect(path(26)).toEqual([1, 2, 6, 10, 26]);
    expect(path(1)).toEqual([1]);
    expect(path(2)).toEqual([1, 2]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of zigzagPathSteps(14)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
