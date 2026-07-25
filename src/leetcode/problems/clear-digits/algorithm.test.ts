import { describe, it, expect } from "vitest";
import { clearDigitsSteps } from "./algorithm";
import { CODE } from "./code";

const clear = (s: string) => {
  const steps = clearDigitsSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("clearDigitsSteps", () => {
  it("removes each digit with the nearest left letter", () => {
    expect(clear("abc")).toBe("abc");
    expect(clear("cb34")).toBe("");
    expect(clear("a1b2c3")).toBe("");
    expect(clear("ab12cd")).toBe("cd");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of clearDigitsSteps("cb34")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
