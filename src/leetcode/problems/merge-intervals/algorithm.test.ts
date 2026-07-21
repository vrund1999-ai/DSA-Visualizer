import { describe, it, expect } from "vitest";
import { mergeIntervalsSteps } from "./algorithm";
import { CODE } from "./code";

const merge = (input: [number, number][]) => {
  const steps = mergeIntervalsSteps(input);
  return steps[steps.length - 1].data.merged.map((iv) => [iv.start, iv.end]);
};

describe("mergeIntervalsSteps", () => {
  it("merges overlapping intervals", () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it("merges touching intervals", () => {
    expect(
      merge([
        [1, 4],
        [4, 5],
      ]),
    ).toEqual([[1, 5]]);
  });

  it("sorts unsorted input before merging", () => {
    expect(
      merge([
        [8, 10],
        [1, 3],
        [2, 6],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
    ]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mergeIntervalsSteps([
      [1, 3],
      [2, 6],
    ])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
