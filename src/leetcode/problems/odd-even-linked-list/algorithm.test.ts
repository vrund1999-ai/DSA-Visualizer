import { describe, it, expect } from "vitest";
import { oddEvenSteps } from "./algorithm";
import { CODE } from "./code";

const oddEven = (values: number[]) => {
  const steps = oddEvenSteps(values);
  return steps[steps.length - 1].data.nodes.map((n) => n.value);
};

describe("oddEvenSteps", () => {
  it("groups odd positions before even positions", () => {
    expect(oddEven([1, 2, 3, 4, 5])).toEqual([1, 3, 5, 2, 4]);
    expect(oddEven([2, 1, 3, 5, 6, 4, 7])).toEqual([2, 3, 6, 7, 1, 5, 4]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of oddEvenSteps([1, 2, 3, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
