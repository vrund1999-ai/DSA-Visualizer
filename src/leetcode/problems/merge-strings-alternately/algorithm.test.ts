import { describe, it, expect } from "vitest";
import { mergeStringsSteps } from "./algorithm";
import { CODE } from "./code";

const merge = (w1: string, w2: string) => {
  const steps = mergeStringsSteps({ w1, w2 });
  return steps[steps.length - 1].data.result.join("");
};

describe("mergeStringsSteps", () => {
  it("interleaves the strings", () => {
    expect(merge("abc", "pqr")).toBe("apbqcr");
    expect(merge("ab", "pqrs")).toBe("apbqrs");
    expect(merge("abcd", "pq")).toBe("apbqcd");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of mergeStringsSteps({ w1: "abc", w2: "pqrs" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
