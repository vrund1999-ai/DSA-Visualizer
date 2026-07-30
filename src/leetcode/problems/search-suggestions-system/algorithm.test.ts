import { describe, it, expect } from "vitest";
import { suggestSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (products: string[], searchWord: string) => {
  const steps = suggestSteps(products, searchWord);
  return steps[steps.length - 1].data.answer;
};

describe("suggestSteps", () => {
  it("returns up to three suggestions per prefix", () => {
    expect(solve(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse")).toEqual([
      ["mobile", "moneypot", "monitor"],
      ["mobile", "moneypot", "monitor"],
      ["mouse", "mousepad"],
      ["mouse", "mousepad"],
      ["mouse", "mousepad"],
    ]);
    expect(solve(["havana"], "havana")).toEqual([["havana"], ["havana"], ["havana"], ["havana"], ["havana"], ["havana"]]);
    expect(solve(["bags", "baggage", "banner", "box", "cloths"], "bags")).toEqual([
      ["baggage", "bags", "banner"],
      ["baggage", "bags", "banner"],
      ["baggage", "bags"],
      ["bags"],
    ]);
  });

  it("does not mutate the caller's product array", () => {
    const products = ["c", "a", "b"];
    suggestSteps(products, "a");
    expect(products).toEqual(["c", "a", "b"]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of suggestSteps(["mobile", "mouse", "moneypot"], "mo")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
