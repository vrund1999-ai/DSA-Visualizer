import { describe, it, expect } from "vitest";
import { decodeSteps } from "./algorithm";
import { CODE } from "./code";

const decode = (s: string) => {
  const steps = decodeSteps(s);
  return steps[steps.length - 1].data.cur;
};

describe("decodeSteps", () => {
  it("decodes nested and repeated blocks", () => {
    expect(decode("3[a]2[bc]")).toBe("aaabcbc");
    expect(decode("3[a2[c]]")).toBe("accaccacc");
    expect(decode("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
  });

  it("handles multi-digit counts and plain strings", () => {
    expect(decode("10[a]")).toBe("aaaaaaaaaa");
    expect(decode("abc")).toBe("abc");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of decodeSteps("3[a2[c]]")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
