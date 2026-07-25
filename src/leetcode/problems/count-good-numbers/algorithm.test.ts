import { describe, it, expect } from "vitest";
import { goodNumbersSteps } from "./algorithm";
import { CODE } from "./code";

const count = (n: number) => {
  const steps = goodNumbersSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("goodNumbersSteps", () => {
  it("counts good numbers modulo 1e9+7", () => {
    expect(count(1)).toBe("5");
    expect(count(4)).toBe("400");
    expect(count(50)).toBe("564908303");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of goodNumbersSteps(50)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
