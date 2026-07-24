import { describe, it, expect } from "vitest";
import { lexSteps } from "./algorithm";
import { CODE } from "./code";

const lex = (n: number) => {
  const steps = lexSteps(n);
  return steps[steps.length - 1].data.res;
};

describe("lexSteps", () => {
  it("lists 1..n in lexicographic order", () => {
    expect(lex(13)).toEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(lex(2)).toEqual([1, 2]);
    expect(lex(1)).toEqual([1]);
    // cross-check against string sort
    const n = 100;
    const expected = Array.from({ length: n }, (_, i) => i + 1).sort((a, b) => `${a}`.localeCompare(`${b}`));
    expect(lex(n)).toEqual(expected);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of lexSteps(13)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
