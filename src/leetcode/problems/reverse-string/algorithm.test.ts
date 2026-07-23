import { describe, it, expect } from "vitest";
import { reverseStringSteps } from "./algorithm";
import { CODE } from "./code";

const reverse = (chars: string[]) => {
  const steps = reverseStringSteps(chars);
  return steps[steps.length - 1].data.chars.join("");
};

describe("reverseStringSteps", () => {
  it("reverses a character array", () => {
    expect(reverse(["h", "e", "l", "l", "o"])).toBe("olleh");
    expect(reverse(["H", "a", "n", "n", "a", "h"])).toBe("hannaH");
    expect(reverse(["a"])).toBe("a");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of reverseStringSteps(["h", "e", "l", "l", "o"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
