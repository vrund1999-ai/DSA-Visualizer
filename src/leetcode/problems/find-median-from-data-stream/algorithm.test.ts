import { describe, it, expect } from "vitest";
import { medianSteps } from "./algorithm";
import { CODE } from "./code";

const medians = (stream: number[]) =>
  medianSteps(stream)
    .filter((s) => s.data.median !== null)
    .map((s) => s.data.median);

describe("medianSteps", () => {
  it("tracks the running median", () => {
    expect(medians([1, 2, 3])).toEqual([1, 1.5, 2]);
    expect(medians([5, 2, 8, 1, 9, 4])).toEqual([5, 3.5, 5, 3.5, 5, 4.5]);
    expect(medians([10])).toEqual([10]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of medianSteps([5, 2, 8, 1, 9, 4])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
