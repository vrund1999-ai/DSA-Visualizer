import { describe, it, expect } from "vitest";
import { happySteps } from "./algorithm";
import { CODE } from "./code";

const solve = (n: number, k: number) => {
  const steps = happySteps(n, k);
  return steps[steps.length - 1].data.answer;
};

describe("happySteps", () => {
  it("returns the k-th happy string in lexicographical order", () => {
    expect(solve(1, 3)).toBe("c");
    expect(solve(3, 9)).toBe("cab");
    expect(solve(1, 4)).toBe("");
    expect(solve(3, 1)).toBe("aba");
  });

  it("returns empty when k exceeds the count 3·2^(n-1)", () => {
    expect(solve(3, 13)).toBe("");
    expect(solve(3, 12)).toBe("cbc");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of happySteps(3, 9)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
