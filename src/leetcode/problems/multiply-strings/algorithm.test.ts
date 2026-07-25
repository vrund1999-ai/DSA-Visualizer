import { describe, it, expect } from "vitest";
import { multiplySteps } from "./algorithm";
import { CODE } from "./code";

const multiply = (a: string, b: string) => {
  const steps = multiplySteps(a, b);
  return steps[steps.length - 1].data.answer;
};

describe("multiplySteps", () => {
  it("multiplies number strings", () => {
    expect(multiply("2", "3")).toBe("6");
    expect(multiply("123", "456")).toBe("56088");
    expect(multiply("123", "45")).toBe("5535");
    expect(multiply("0", "52")).toBe("0");
    expect(multiply("999", "999")).toBe("998001");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of multiplySteps("123", "45")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
