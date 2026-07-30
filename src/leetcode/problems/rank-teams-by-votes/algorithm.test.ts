import { describe, it, expect } from "vitest";
import { rankSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (votes: string[]) => {
  const steps = rankSteps(votes);
  return steps[steps.length - 1].data.answer;
};

describe("rankSteps", () => {
  it("ranks teams by positional votes", () => {
    expect(solve(["ABC", "ACB", "ABC", "ACB", "ACB"])).toBe("ACB");
    expect(solve(["WXYZ", "XYZW"])).toBe("XWYZ");
    expect(solve(["ZMNAGUEDSJYLBOPHRQICWFXTVK"])).toBe("ZMNAGUEDSJYLBOPHRQICWFXTVK");
    expect(solve(["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"])).toBe("ABC");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of rankSteps(["ABC", "ACB", "ABC", "ACB", "ACB"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
