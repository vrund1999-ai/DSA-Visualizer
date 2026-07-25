import { describe, it, expect } from "vitest";
import { countNodesSteps } from "./algorithm";
import { CODE } from "./code";

const count = (heap: (number | null)[]) => {
  const steps = countNodesSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("countNodesSteps", () => {
  it("counts nodes in a complete tree", () => {
    expect(count([1, 2, 3, 4, 5, 6])).toBe(6);
    expect(count([1, 2, 3, 4, 5, 6, 7])).toBe(7);
    expect(count([1])).toBe(1);
    expect(count([1, 2, 3, 4])).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of countNodesSteps([1, 2, 3, 4, 5, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
