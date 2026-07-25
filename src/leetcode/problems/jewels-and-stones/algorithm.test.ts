import { describe, it, expect } from "vitest";
import { jewelsSteps } from "./algorithm";
import { CODE } from "./code";

const count = (jewels: string, stones: string) => {
  const steps = jewelsSteps(jewels, stones);
  return steps[steps.length - 1].data.answer;
};

describe("jewelsSteps", () => {
  it("counts jewels among stones", () => {
    expect(count("aA", "aAAbbbb")).toBe(3);
    expect(count("z", "ZZ")).toBe(0);
    expect(count("abc", "abcabc")).toBe(6);
    expect(count("a", "")).toBe(0);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of jewelsSteps("aA", "aAAbbbb")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
