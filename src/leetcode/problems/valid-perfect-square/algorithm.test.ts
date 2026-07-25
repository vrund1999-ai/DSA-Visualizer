import { describe, it, expect } from "vitest";
import { perfectSquareSteps } from "./algorithm";
import { CODE } from "./code";

const isSquare = (num: number) => {
  const steps = perfectSquareSteps(num);
  return steps[steps.length - 1].data.answer;
};

describe("perfectSquareSteps", () => {
  it("detects perfect squares", () => {
    expect(isSquare(16)).toBe(true);
    expect(isSquare(14)).toBe(false);
    expect(isSquare(1)).toBe(true);
    expect(isSquare(144)).toBe(true);
    expect(isSquare(2147395600)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of perfectSquareSteps(144)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
