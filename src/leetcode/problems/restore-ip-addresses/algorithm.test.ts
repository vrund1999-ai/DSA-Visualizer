import { describe, it, expect } from "vitest";
import { ipSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = ipSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("ipSteps", () => {
  it("restores all valid IP addresses", () => {
    expect(solve("25525511135")!.sort()).toEqual(["255.255.11.135", "255.255.111.35"].sort());
    expect(solve("0000")).toEqual(["0.0.0.0"]);
    expect(solve("101023")!.sort()).toEqual(["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"].sort());
    expect(solve("1111")).toEqual(["1.1.1.1"]);
    expect(solve("00")).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of ipSteps("25525511135")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
