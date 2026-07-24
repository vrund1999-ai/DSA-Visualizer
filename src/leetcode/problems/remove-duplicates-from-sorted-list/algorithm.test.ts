import { describe, it, expect } from "vitest";
import { dedupListSteps } from "./algorithm";
import { CODE } from "./code";

const dedup = (values: number[]) => {
  const steps = dedupListSteps(values);
  return steps[steps.length - 1].data.values;
};

describe("dedupListSteps", () => {
  it("removes duplicates from a sorted list", () => {
    expect(dedup([1, 1, 2])).toEqual([1, 2]);
    expect(dedup([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(dedup([1, 1, 1])).toEqual([1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of dedupListSteps([1, 1, 2, 3, 3])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
