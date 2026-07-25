import { describe, it, expect } from "vitest";
import { removeAdjSteps } from "./algorithm";
import { CODE } from "./code";

const reduce = (s: string) => {
  const steps = removeAdjSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("removeAdjSteps", () => {
  it("removes adjacent duplicate pairs until stable", () => {
    expect(reduce("abbaca")).toBe("ca");
    expect(reduce("azxxzy")).toBe("ay");
    expect(reduce("aaaa")).toBe("");
    expect(reduce("abc")).toBe("abc");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeAdjSteps("abbaca")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
