import { describe, it, expect } from "vitest";
import { niceSubstrSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = niceSubstrSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("niceSubstrSteps", () => {
  it("matches the canonical examples", () => {
    expect(solve("YazaAay")).toBe("aAa");
    expect(solve("Bb")).toBe("Bb");
    expect(solve("c")).toBe("");
    expect(solve("dDzeE")).toBe("dD");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of niceSubstrSteps("YazaAay")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
