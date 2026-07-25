import { describe, it, expect } from "vitest";
import { removeOuterSteps } from "./algorithm";
import { CODE } from "./code";

const remove = (s: string) => {
  const steps = removeOuterSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("removeOuterSteps", () => {
  it("removes the outer pair of each primitive", () => {
    expect(remove("(()())(())")).toBe("()()()");
    expect(remove("(()())(())(()(()))")).toBe("()()()()(())");
    expect(remove("()()")).toBe("");
    expect(remove("(())")).toBe("()");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeOuterSteps("(()())(())")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
