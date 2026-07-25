import { describe, it, expect } from "vitest";
import { couplesSteps } from "./algorithm";
import { CODE } from "./code";

const minSwaps = (row: number[]) => {
  const steps = couplesSteps(row);
  return steps[steps.length - 1].data.answer;
};

describe("couplesSteps", () => {
  it("counts the minimum swaps to seat couples together", () => {
    expect(minSwaps([0, 2, 1, 3])).toBe(1);
    expect(minSwaps([3, 2, 0, 1])).toBe(0);
    expect(minSwaps([0, 2, 4, 6, 7, 1, 3, 5])).toBe(3);
    expect(minSwaps([1, 0, 3, 2])).toBe(0);
  });

  it("leaves every couple adjacent in the final row", () => {
    const steps = couplesSteps([0, 2, 4, 6, 7, 1, 3, 5]);
    const row = steps[steps.length - 1].data.row;
    for (let i = 0; i < row.length; i += 2) expect(row[i] >> 1).toBe(row[i + 1] >> 1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of couplesSteps([0, 2, 4, 6, 7, 1, 3, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
