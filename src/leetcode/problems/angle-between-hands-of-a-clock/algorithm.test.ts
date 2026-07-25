import { describe, it, expect } from "vitest";
import { clockSteps } from "./algorithm";
import { CODE } from "./code";

const angle = (h: number, m: number) => {
  const steps = clockSteps(h, m);
  return steps[steps.length - 1].data.answer;
};

describe("clockSteps", () => {
  it("computes the smaller angle between the hands", () => {
    expect(angle(12, 30)).toBe(165);
    expect(angle(3, 30)).toBe(75);
    expect(angle(3, 15)).toBe(7.5);
    expect(angle(4, 50)).toBe(155);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of clockSteps(3, 30)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
