import { describe, it, expect } from "vitest";
import { hexSteps } from "./algorithm";
import { CODE } from "./code";

const toHex = (num: number) => {
  const steps = hexSteps(num);
  return steps[steps.length - 1].data.answer;
};

describe("hexSteps", () => {
  it("converts integers to hexadecimal", () => {
    expect(toHex(26)).toBe("1a");
    expect(toHex(0)).toBe("0");
    expect(toHex(255)).toBe("ff");
    expect(toHex(-1)).toBe("ffffffff");
    expect(toHex(-2)).toBe("fffffffe");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of hexSteps(26)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
