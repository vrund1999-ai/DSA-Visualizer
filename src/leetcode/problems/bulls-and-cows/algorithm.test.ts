import { describe, it, expect } from "vitest";
import { bullsSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (secret: string, guess: string) => {
  const steps = bullsSteps(secret, guess);
  return steps[steps.length - 1].data.answer;
};

describe("bullsSteps", () => {
  it("returns the bulls-and-cows hint", () => {
    expect(solve("1807", "7810")).toBe("1A3B");
    expect(solve("1123", "0111")).toBe("1A1B");
    expect(solve("1", "0")).toBe("0A0B");
    expect(solve("1", "1")).toBe("1A0B");
    expect(solve("1122", "1222")).toBe("3A0B");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of bullsSteps("1807", "7810")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
