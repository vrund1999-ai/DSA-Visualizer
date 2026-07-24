import { describe, it, expect } from "vitest";
import { palPartSteps } from "./algorithm";
import { CODE } from "./code";

const partition = (s: string) => {
  const steps = palPartSteps(s);
  return steps[steps.length - 1].data.results;
};

describe("palPartSteps", () => {
  it("generates all palindrome partitionings", () => {
    expect(partition("aab")).toEqual([["a", "a", "b"], ["aa", "b"]]);
    expect(partition("a")).toEqual([["a"]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of palPartSteps("aab")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
