import { describe, it, expect } from "vitest";
import { equalOccSteps } from "./algorithm";
import { CODE } from "./code";

const good = (s: string) => {
  const steps = equalOccSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("equalOccSteps", () => {
  it("checks all characters occur equally often", () => {
    expect(good("abacbc")).toBe(true);
    expect(good("aaabb")).toBe(false);
    expect(good("a")).toBe(true);
    expect(good("aabbccdd")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of equalOccSteps("abacbc")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
