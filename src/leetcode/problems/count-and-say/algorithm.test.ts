import { describe, it, expect } from "vitest";
import { countAndSaySteps } from "./algorithm";
import { CODE } from "./code";

const countAndSay = (n: number) => {
  const steps = countAndSaySteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("countAndSaySteps", () => {
  it("generates the nth term", () => {
    expect(countAndSay(1)).toBe("1");
    expect(countAndSay(2)).toBe("11");
    expect(countAndSay(3)).toBe("21");
    expect(countAndSay(4)).toBe("1211");
    expect(countAndSay(5)).toBe("111221");
    expect(countAndSay(6)).toBe("312211");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of countAndSaySteps(5)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
