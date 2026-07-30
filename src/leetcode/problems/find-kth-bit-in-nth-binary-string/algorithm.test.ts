import { describe, it, expect } from "vitest";
import { kthBitSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, k: number) => {
  const steps = kthBitSteps(n, k);
  return steps[steps.length - 1].data.answer;
};

describe("kthBitSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve(3, 1)).toBe("0"); // S3 = "0111001"
    expect(solve(4, 11)).toBe("1");
    expect(solve(1, 1)).toBe("0");
    expect(solve(2, 3)).toBe("1"); // S2 = "011"
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kthBitSteps(4, 11)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
