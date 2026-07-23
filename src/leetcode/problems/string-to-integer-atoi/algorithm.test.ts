import { describe, it, expect } from "vitest";
import { atoiSteps } from "./algorithm";
import { CODE } from "./code";

const atoi = (s: string) => {
  const steps = atoiSteps(s);
  return steps[steps.length - 1].data.result;
};

describe("atoiSteps", () => {
  it("parses signed integers with junk suffixes", () => {
    expect(atoi("42")).toBe(42);
    expect(atoi("   -42abc")).toBe(-42);
    expect(atoi("4193 with words")).toBe(4193);
    expect(atoi("words and 987")).toBe(0);
  });

  it("clamps to the 32-bit range", () => {
    expect(atoi("-91283472332")).toBe(-(2 ** 31));
    expect(atoi("91283472332")).toBe(2 ** 31 - 1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of atoiSteps("   -42abc")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
