import { describe, it, expect } from "vitest";
import { finalValueSteps } from "./algorithm";
import { CODE } from "./code";

const finalValue = (ops: string[]) => {
  const steps = finalValueSteps(ops);
  return steps[steps.length - 1].data.answer;
};

describe("finalValueSteps", () => {
  it("applies increment/decrement operations", () => {
    expect(finalValue(["--X", "X++", "X++"])).toBe(1);
    expect(finalValue(["++X", "++X", "X++"])).toBe(3);
    expect(finalValue(["X++", "++X", "--X", "X--"])).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of finalValueSteps(["--X", "X++", "X++", "--X", "++X"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
