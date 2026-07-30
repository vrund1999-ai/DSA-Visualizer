import { describe, it, expect } from "vitest";
import { splitTreeSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (heap: (number | null)[]) => {
  const steps = splitTreeSteps(heap);
  return steps[steps.length - 1].data.answer;
};

describe("splitTreeSteps", () => {
  it("maximizes the split product", () => {
    expect(solve([1, 2, 3, 4, 5, 6])).toBe(110);
    expect(solve([1, 1])).toBe(1);
    expect(solve([2, 3, 9, 10, 7, 8, 6, 5, 4, 11, 1])).toBe(1025);
    expect(solve([1, 2, 3])).toBe(9); // cut edge above node 3: 3*(6-3)=9
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of splitTreeSteps([1, 2, 3, 4, 5, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
