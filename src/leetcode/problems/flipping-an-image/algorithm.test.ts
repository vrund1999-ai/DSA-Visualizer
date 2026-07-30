import { describe, it, expect } from "vitest";
import { flipSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (image: number[][]) => {
  const steps = flipSteps(image);
  return steps[steps.length - 1].data.answer;
};

describe("flipSteps", () => {
  it("flips and inverts the image", () => {
    expect(solve([[1, 1, 0], [1, 0, 1], [0, 0, 0]])).toEqual([[1, 0, 0], [0, 1, 0], [1, 1, 1]]);
    expect(solve([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])).toEqual([
      [1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0],
    ]);
    expect(solve([[1]])).toEqual([[0]]);
  });

  it("does not mutate the caller's grid", () => {
    const image = [[1, 0]];
    flipSteps(image);
    expect(image).toEqual([[1, 0]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of flipSteps([[1, 1, 0], [1, 0, 1], [0, 0, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
