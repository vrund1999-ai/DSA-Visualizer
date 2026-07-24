import { describe, it, expect } from "vitest";
import { removeAdjSteps } from "./algorithm";
import { CODE } from "./code";

const remove = (s: string, k: number) => {
  const steps = removeAdjSteps({ s, k });
  return steps[steps.length - 1].data.stack.map((f) => f.char.repeat(f.count)).join("");
};

describe("removeAdjSteps", () => {
  it("collapses runs of k", () => {
    expect(remove("deeedbbcccbdaa", 3)).toBe("aa");
    expect(remove("pbbcggttciiippooaais", 2)).toBe("ps");
    expect(remove("abcd", 2)).toBe("abcd");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeAdjSteps({ s: "deeedbbcccbdaa", k: 3 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
