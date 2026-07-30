import { describe, it, expect } from "vitest";
import { shortCharSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string, c: string) => {
  const steps = shortCharSteps(s, c);
  return steps[steps.length - 1].data.answer;
};

describe("shortCharSteps", () => {
  it("computes distances to the nearest character", () => {
    expect(solve("loveleetcode", "e")).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
    expect(solve("aaab", "b")).toEqual([3, 2, 1, 0]);
    expect(solve("b", "b")).toEqual([0]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of shortCharSteps("loveleetcode", "e")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
