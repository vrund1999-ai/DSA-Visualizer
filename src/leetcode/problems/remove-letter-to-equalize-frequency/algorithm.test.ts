import { describe, it, expect } from "vitest";
import { equalFreqSteps } from "./algorithm";
import { CODE } from "./code";

const canEqualize = (word: string) => {
  const steps = equalFreqSteps(word);
  return steps[steps.length - 1].data.answer;
};

describe("equalFreqSteps", () => {
  it("decides whether one deletion equalizes frequencies", () => {
    expect(canEqualize("abcc")).toBe(true);
    expect(canEqualize("aazz")).toBe(false);
    expect(canEqualize("bac")).toBe(true);
    expect(canEqualize("cccd")).toBe(true);
    expect(canEqualize("ddaariri")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of equalFreqSteps("aazz")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
