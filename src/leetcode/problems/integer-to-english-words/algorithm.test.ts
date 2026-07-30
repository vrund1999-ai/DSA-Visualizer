import { describe, it, expect } from "vitest";
import { englishWordsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (num: number) => {
  const steps = englishWordsSteps(num);
  return steps[steps.length - 1].data.answer;
};

describe("englishWordsSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(123)).toBe("One Hundred Twenty Three");
    expect(solve(12345)).toBe("Twelve Thousand Three Hundred Forty Five");
    expect(solve(1234567)).toBe("One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven");
    expect(solve(0)).toBe("Zero");
  });

  it("handles internal zero groups", () => {
    expect(solve(1000000)).toBe("One Million");
    expect(solve(1000010)).toBe("One Million Ten");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of englishWordsSteps(1234567)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
