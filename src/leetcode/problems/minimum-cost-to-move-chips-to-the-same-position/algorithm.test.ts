import { describe, it, expect } from "vitest";
import { chipsSteps } from "./algorithm";
import { CODE } from "./code";

const minCost = (position: number[]) => {
  const steps = chipsSteps(position);
  return steps[steps.length - 1].data.answer;
};

describe("chipsSteps", () => {
  it("moves the smaller parity group", () => {
    expect(minCost([1, 2, 3])).toBe(1);
    expect(minCost([2, 2, 2, 3, 3])).toBe(2);
    expect(minCost([1, 1000000000])).toBe(1);
    expect(minCost([2, 4, 6])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of chipsSteps([2, 2, 2, 3, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
