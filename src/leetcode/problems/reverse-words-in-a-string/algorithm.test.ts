import { describe, it, expect } from "vitest";
import { reverseWordsSteps } from "./algorithm";
import { CODE } from "./code";

const reverse = (s: string) => {
  const steps = reverseWordsSteps(s);
  return steps[steps.length - 1].data.result;
};

describe("reverseWordsSteps", () => {
  it("reverses word order and collapses spaces", () => {
    expect(reverse("the sky is blue")).toBe("blue is sky the");
    expect(reverse("  hello world  ")).toBe("world hello");
    expect(reverse("a good   example")).toBe("example good a");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseWordsSteps("the sky is blue")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
