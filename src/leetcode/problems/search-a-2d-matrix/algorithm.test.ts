import { describe, it, expect } from "vitest";
import { search2DSteps } from "./algorithm";
import { CODE } from "./code";

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const search = (target: number) => {
  const steps = search2DSteps({ matrix, target });
  return steps[steps.length - 1].data.found;
};

describe("search2DSteps", () => {
  it("finds present targets", () => {
    expect(search(16)).toBe(true);
    expect(search(1)).toBe(true);
    expect(search(60)).toBe(true);
  });

  it("rejects absent targets", () => {
    expect(search(13)).toBe(false);
    expect(search(100)).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of search2DSteps({ matrix, target: 16 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
