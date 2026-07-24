import { describe, it, expect } from "vitest";
import { addTwoNumbersIISteps } from "./algorithm";
import { CODE } from "./code";

const add = (l1: number[], l2: number[]) => {
  const steps = addTwoNumbersIISteps(l1, l2);
  return steps[steps.length - 1].data.result;
};

describe("addTwoNumbersIISteps", () => {
  it("adds most-significant-first digit lists", () => {
    expect(add([7, 2, 4, 3], [5, 6, 4])).toEqual([7, 8, 0, 7]); // 7243 + 564 = 7807
    expect(add([2, 4, 3], [5, 6, 4])).toEqual([8, 0, 7]);
    expect(add([0], [0])).toEqual([0]);
    expect(add([9, 9], [1])).toEqual([1, 0, 0]); // 99 + 1 = 100
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of addTwoNumbersIISteps([7, 2, 4, 3], [5, 6, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
