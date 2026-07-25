import { describe, it, expect } from "vitest";
import { distinctSubseqSteps } from "./algorithm";
import { CODE } from "./code";

const count = (s: string, t: string) => {
  const steps = distinctSubseqSteps(s, t);
  return steps[steps.length - 1].data.answer;
};

describe("distinctSubseqSteps", () => {
  it("counts distinct subsequences equal to t", () => {
    expect(count("rabbbit", "rabbit")).toBe(3);
    expect(count("babgbag", "bag")).toBe(5);
    expect(count("abc", "abc")).toBe(1);
    expect(count("abc", "d")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of distinctSubseqSteps("rabbbit", "rabbit")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
