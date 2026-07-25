import { describe, it, expect } from "vitest";
import { binarySubstrSteps } from "./algorithm";
import { CODE } from "./code";

const count = (s: string) => {
  const steps = binarySubstrSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("binarySubstrSteps", () => {
  it("counts grouped equal-count substrings", () => {
    expect(count("00110011")).toBe(6);
    expect(count("10101")).toBe(4);
    expect(count("000111")).toBe(3);
    expect(count("00")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of binarySubstrSteps("00110011")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
