import { describe, it, expect } from "vitest";
import { kokoSteps } from "./algorithm";
import { CODE } from "./code";

const speed = (piles: number[], h: number) => {
  const steps = kokoSteps({ piles, h });
  return steps[steps.length - 1].data.answer;
};

describe("kokoSteps", () => {
  it("finds the minimum eating speed", () => {
    expect(speed([3, 6, 7, 11], 8)).toBe(4);
    expect(speed([30, 11, 23, 4, 20], 5)).toBe(30);
    expect(speed([30, 11, 23, 4, 20], 6)).toBe(23);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kokoSteps({ piles: [3, 6, 7, 11], h: 8 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
