import { describe, it, expect } from "vitest";
import { minRemoveSteps } from "./algorithm";
import { CODE } from "./code";

const clean = (s: string) => {
  const steps = minRemoveSteps(s);
  const last = steps[steps.length - 1].data;
  const removed = new Set(last.removed);
  return last.chars.filter((_, k) => !removed.has(k)).join("");
};

const isValid = (s: string) => {
  let bal = 0;
  for (const c of s) {
    if (c === "(") bal++;
    else if (c === ")") { bal--; if (bal < 0) return false; }
  }
  return bal === 0;
};

describe("minRemoveSteps", () => {
  it("produces a valid string with minimal removals", () => {
    expect(isValid(clean("a)b(c)d)"))).toBe(true);
    expect(isValid(clean("))(("))).toBe(true);
    // one stray ')' removed → length drops by exactly 1
    expect(clean("lee(t(c)o)de)").length).toBe("lee(t(c)o)de)".length - 1);
  });

  it("leaves already-valid strings intact", () => {
    expect(clean("(a(b)c)")).toBe("(a(b)c)");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of minRemoveSteps("a)b(c)d)")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
