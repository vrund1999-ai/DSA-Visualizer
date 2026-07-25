import { describe, it, expect } from "vitest";
import { simplifyPathSteps } from "./algorithm";
import { CODE } from "./code";

const simplify = (path: string) => {
  const steps = simplifyPathSteps(path);
  return steps[steps.length - 1].data.answer;
};

describe("simplifyPathSteps", () => {
  it("canonicalizes Unix paths", () => {
    expect(simplify("/home/")).toBe("/home");
    expect(simplify("/../")).toBe("/");
    expect(simplify("/home//foo/")).toBe("/home/foo");
    expect(simplify("/a/./b/../../c/")).toBe("/c");
    expect(simplify("/a/../../b/../c//.//")).toBe("/c");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of simplifyPathSteps("/a/./b/../../c/")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
