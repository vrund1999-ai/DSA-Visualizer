import { describe, it, expect } from "vitest";
import { removeKSteps } from "./algorithm";
import { CODE } from "./code";

const removeK = (num: string, k: number) => {
  const steps = removeKSteps(num, k);
  return steps[steps.length - 1].data.answer;
};

describe("removeKSteps", () => {
  it("removes k digits to minimize the number", () => {
    expect(removeK("1432219", 3)).toBe("1219");
    expect(removeK("10200", 1)).toBe("200");
    expect(removeK("10", 2)).toBe("0");
    expect(removeK("112", 1)).toBe("11");
    expect(removeK("1234567890", 9)).toBe("0");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeKSteps("1432219", 3)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
