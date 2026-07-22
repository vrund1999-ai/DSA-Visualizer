import { describe, it, expect } from "vitest";
import { isomorphicSteps } from "./algorithm";
import { CODE } from "./code";

const iso = (s: string, t: string) => {
  const steps = isomorphicSteps({ s, t });
  return steps[steps.length - 1].data.result;
};

describe("isomorphicSteps", () => {
  it("recognizes isomorphic strings", () => {
    expect(iso("egg", "add")).toBe(true);
    expect(iso("paper", "title")).toBe(true);
  });

  it("rejects non-isomorphic strings", () => {
    expect(iso("foo", "bar")).toBe(false);
    expect(iso("badc", "baba")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of isomorphicSteps({ s: "egg", t: "add" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
