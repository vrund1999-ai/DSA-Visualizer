import { describe, it, expect } from "vitest";
import { dedupListSteps } from "./algorithm";
import { CODE } from "./code";

const result = (values: number[]) => {
  const steps = dedupListSteps(values);
  return steps[steps.length - 1].data.nodes.map((n) => n.v);
};

describe("dedupListSteps", () => {
  it("removes all duplicated values", () => {
    expect(result([1, 2, 3, 3, 4, 4, 5])).toEqual([1, 2, 5]);
    expect(result([1, 1, 1, 2, 3])).toEqual([2, 3]);
    expect(result([1, 1])).toEqual([]);
    expect(result([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of dedupListSteps([1, 2, 3, 3, 4, 4, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
