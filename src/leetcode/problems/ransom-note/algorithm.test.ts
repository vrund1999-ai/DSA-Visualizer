import { describe, it, expect } from "vitest";
import { ransomSteps } from "./algorithm";
import { CODE } from "./code";

const canBuild = (ransom: string, magazine: string) => {
  const steps = ransomSteps({ ransom, magazine });
  return steps[steps.length - 1].data.result;
};

describe("ransomSteps", () => {
  it("builds notes when letters suffice", () => {
    expect(canBuild("aa", "aab")).toBe(true);
    expect(canBuild("", "abc")).toBe(true);
  });

  it("fails when a letter is missing or scarce", () => {
    expect(canBuild("a", "b")).toBe(false);
    expect(canBuild("aa", "ab")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of ransomSteps({ ransom: "aa", magazine: "aab" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
