import { describe, it, expect } from "vitest";
import { bombSteps } from "./algorithm";
import { CODE } from "./code";

const decrypt = (code: number[], k: number) => {
  const steps = bombSteps(code, k);
  return steps[steps.length - 1].data.answer;
};

describe("bombSteps", () => {
  it("computes the circular neighbor sums", () => {
    expect(decrypt([5, 7, 1, 4], 3)).toEqual([12, 10, 16, 13]);
    expect(decrypt([1, 2, 3, 4], 0)).toEqual([0, 0, 0, 0]);
    expect(decrypt([2, 4, 9, 3], -2)).toEqual([12, 5, 6, 13]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bombSteps([5, 7, 1, 4], 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
