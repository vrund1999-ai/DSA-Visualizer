import { describe, it, expect } from "vitest";
import { deleteMiddleSteps } from "./algorithm";
import { CODE } from "./code";

const deleteMiddle = (list: number[]) => {
  const steps = deleteMiddleSteps(list);
  return steps[steps.length - 1].data.answer;
};

describe("deleteMiddleSteps", () => {
  it("deletes the middle node", () => {
    expect(deleteMiddle([1, 3, 4, 7, 1, 2, 6])).toEqual([1, 3, 4, 1, 2, 6]);
    expect(deleteMiddle([1, 2, 3, 4])).toEqual([1, 2, 4]);
    expect(deleteMiddle([2, 1])).toEqual([2]);
    expect(deleteMiddle([1])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of deleteMiddleSteps([1, 3, 4, 7, 1, 2, 6])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
