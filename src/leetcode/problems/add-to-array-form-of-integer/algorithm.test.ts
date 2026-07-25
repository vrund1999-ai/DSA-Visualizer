import { describe, it, expect } from "vitest";
import { addArraySteps } from "./algorithm";
import { CODE } from "./code";

const add = (num: number[], k: number) => {
  const steps = addArraySteps(num, k);
  return steps[steps.length - 1].data.answer;
};

describe("addArraySteps", () => {
  it("adds k to the array-form integer", () => {
    expect(add([1, 2, 0, 0], 34)).toEqual([1, 2, 3, 4]);
    expect(add([2, 7, 4], 181)).toEqual([4, 5, 5]);
    expect(add([2, 1, 5], 806)).toEqual([1, 0, 2, 1]);
    expect(add([9, 9, 9], 1)).toEqual([1, 0, 0, 0]);
    expect(add([0], 23)).toEqual([2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of addArraySteps([2, 7, 4], 181)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
