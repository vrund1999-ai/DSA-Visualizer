import { describe, it, expect } from "vitest";
import { truncateSteps } from "./algorithm";
import { CODE } from "./code";

const truncate = (s: string, k: number) => {
  const steps = truncateSteps(s, k);
  return steps[steps.length - 1].data.answer;
};

describe("truncateSteps", () => {
  it("keeps the first k words", () => {
    expect(truncate("Hello how are you Contestant", 4)).toBe("Hello how are you");
    expect(truncate("What is the solution to this problem", 4)).toBe("What is the solution");
    expect(truncate("chopper is not a tanuki", 5)).toBe("chopper is not a tanuki");
    expect(truncate("a b c", 1)).toBe("a");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of truncateSteps("Hello how are you Contestant", 4)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
