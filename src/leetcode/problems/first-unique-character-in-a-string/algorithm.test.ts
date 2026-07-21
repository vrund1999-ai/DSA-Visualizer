import { describe, it, expect } from "vitest";
import { firstUniqSteps } from "./algorithm";
import { CODE } from "./code";

const first = (s: string) => {
  const steps = firstUniqSteps(s);
  return steps[steps.length - 1].data.answer ?? -1;
};

describe("firstUniqSteps", () => {
  it("finds the first unique character index", () => {
    expect(first("leetcode")).toBe(0);
    expect(first("loveleetcode")).toBe(2);
  });

  it("returns -1 when all characters repeat", () => {
    expect(first("aabb")).toBe(-1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of firstUniqSteps("loveleetcode")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
