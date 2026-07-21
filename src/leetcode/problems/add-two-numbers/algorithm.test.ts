import { describe, it, expect } from "vitest";
import { addTwoNumbersSteps } from "./algorithm";
import { CODE } from "./code";

const add = (l1: number[], l2: number[]) => {
  const steps = addTwoNumbersSteps(l1, l2);
  return steps[steps.length - 1].data.result;
};

describe("addTwoNumbersSteps", () => {
  it("adds digit lists with carry (342 + 465 = 807)", () => {
    expect(add([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
  });

  it("carries into a new node (99 + 1 = 100)", () => {
    expect(add([9, 9], [1])).toEqual([0, 0, 1]);
  });

  it("handles zeros", () => {
    expect(add([0], [0])).toEqual([0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of addTwoNumbersSteps([2, 4, 3], [5, 6, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
