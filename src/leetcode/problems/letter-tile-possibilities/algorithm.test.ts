import { describe, it, expect } from "vitest";
import { tileSteps } from "./algorithm";
import { CODE } from "./code";

const count = (tiles: string) => {
  const steps = tileSteps(tiles);
  return steps[steps.length - 1].data.answer;
};

describe("tileSteps", () => {
  it("counts distinct non-empty sequences", () => {
    expect(count("AAB")).toBe(8);
    expect(count("AAABBC")).toBe(188);
    expect(count("V")).toBe(1);
    expect(count("AB")).toBe(4);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of tileSteps("AAB")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
