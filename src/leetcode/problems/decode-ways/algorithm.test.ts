import { describe, it, expect } from "vitest";
import { decodeWaysSteps } from "./algorithm";
import { CODE } from "./code";

const ways = (s: string) => {
  const steps = decodeWaysSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("decodeWaysSteps", () => {
  it("counts valid decodings", () => {
    expect(ways("12")).toBe(2);
    expect(ways("226")).toBe(3);
    expect(ways("06")).toBe(0);
    expect(ways("10")).toBe(1);
    expect(ways("2101")).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of decodeWaysSteps("226")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
