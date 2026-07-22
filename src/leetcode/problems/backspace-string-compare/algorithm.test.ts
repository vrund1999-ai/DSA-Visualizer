import { describe, it, expect } from "vitest";
import { backspaceSteps } from "./algorithm";
import { CODE } from "./code";

const equal = (s: string, t: string) => {
  const steps = backspaceSteps({ s, t });
  return steps[steps.length - 1].data.result;
};

describe("backspaceSteps", () => {
  it("compares after applying backspaces", () => {
    expect(equal("ab#c", "ad#c")).toBe(true);
    expect(equal("ab##", "c#d#")).toBe(true);
    expect(equal("a#c", "b")).toBe(false);
  });

  it("handles leading backspaces", () => {
    expect(equal("#a", "a")).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of backspaceSteps({ s: "ab#c", t: "ad#c" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
