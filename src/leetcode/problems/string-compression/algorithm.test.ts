import { describe, it, expect } from "vitest";
import { compressSteps } from "./algorithm";
import { CODE } from "./code";

const compress = (chars: string[]) => {
  const steps = compressSteps(chars);
  const last = steps[steps.length - 1].data;
  return last.chars.slice(0, last.length).join("");
};

describe("compressSteps", () => {
  it("run-length compresses in place", () => {
    expect(compress(["a", "a", "b", "b", "c", "c", "c"])).toBe("a2b2c3");
    expect(compress(["a"])).toBe("a");
    expect(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])).toBe("ab12");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of compressSteps(["a", "a", "b", "b", "c", "c", "c"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
