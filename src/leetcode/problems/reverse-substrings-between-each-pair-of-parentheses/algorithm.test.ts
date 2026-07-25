import { describe, it, expect } from "vitest";
import { reverseParenSteps } from "./algorithm";
import { CODE } from "./code";

const resolve = (s: string) => {
  const steps = reverseParenSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("reverseParenSteps", () => {
  it("reverses each parenthesized group inner-first", () => {
    expect(resolve("(abcd)")).toBe("dcba");
    expect(resolve("(u(love)i)")).toBe("iloveu");
    expect(resolve("(ed(et(oc))el)")).toBe("leetcode");
    expect(resolve("a(bcdefghijkl(mno)p)q")).toBe("apmnolkjihgfedcbq");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseParenSteps("(u(love)i)")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
