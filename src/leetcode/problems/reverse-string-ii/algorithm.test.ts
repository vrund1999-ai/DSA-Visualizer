import { describe, it, expect } from "vitest";
import { reverseStrSteps } from "./algorithm";
import { CODE } from "./code";

const reverse = (s: string, k: number) => {
  const steps = reverseStrSteps(s, k);
  return steps[steps.length - 1].data.answer;
};

describe("reverseStrSteps", () => {
  it("reverses first k of each 2k block", () => {
    expect(reverse("abcdefg", 2)).toBe("bacdfeg");
    expect(reverse("abcd", 2)).toBe("bacd");
    expect(reverse("abcd", 4)).toBe("dcba");
    expect(reverse("abc", 5)).toBe("cba");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseStrSteps("abcdefg", 2)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
