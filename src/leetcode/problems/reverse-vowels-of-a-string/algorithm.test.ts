import { describe, it, expect } from "vitest";
import { reverseVowelsSteps } from "./algorithm";
import { CODE } from "./code";

const reverse = (s: string) => {
  const steps = reverseVowelsSteps(s);
  return steps[steps.length - 1].data.chars.join("");
};

describe("reverseVowelsSteps", () => {
  it("reverses only the vowels", () => {
    expect(reverse("hello")).toBe("holle");
    expect(reverse("leetcode")).toBe("leotcede");
    expect(reverse("aA")).toBe("Aa");
    expect(reverse("bcd")).toBe("bcd");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseVowelsSteps("leetcode")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
