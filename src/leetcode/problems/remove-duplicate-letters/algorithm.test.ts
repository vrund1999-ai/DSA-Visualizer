import { describe, it, expect } from "vitest";
import { removeDupLettersSteps } from "./algorithm";
import { CODE } from "./code";

const remove = (s: string) => {
  const steps = removeDupLettersSteps(s);
  return steps[steps.length - 1].data.answer;
};

describe("removeDupLettersSteps", () => {
  it("produces the smallest distinct-letter result", () => {
    expect(remove("bcabc")).toBe("abc");
    expect(remove("cbacdcbc")).toBe("acdb");
    expect(remove("abc")).toBe("abc");
    expect(remove("bbcaac")).toBe("bac");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of removeDupLettersSteps("cbacdcbc")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
