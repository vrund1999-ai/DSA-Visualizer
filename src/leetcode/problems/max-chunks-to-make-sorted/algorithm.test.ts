import { describe, it, expect } from "vitest";
import { maxChunksSteps } from "./algorithm";
import { CODE } from "./code";

const chunks = (arr: number[]) => {
  const steps = maxChunksSteps(arr);
  return steps[steps.length - 1].data.answer;
};

describe("maxChunksSteps", () => {
  it("counts the maximum sortable chunks", () => {
    expect(chunks([4, 3, 2, 1, 0])).toBe(1);
    expect(chunks([1, 0, 2, 3, 4])).toBe(4);
    expect(chunks([0, 1, 2, 3])).toBe(4);
    expect(chunks([2, 0, 1, 3])).toBe(2);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of maxChunksSteps([1, 0, 2, 3, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
