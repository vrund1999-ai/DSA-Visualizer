import { describe, it, expect } from "vitest";
import { colTitleSteps } from "./algorithm";
import { CODE } from "./code";

const title = (n: number) => {
  const steps = colTitleSteps(n);
  return steps[steps.length - 1].data.answer;
};

describe("colTitleSteps", () => {
  it("converts column numbers to titles", () => {
    expect(title(1)).toBe("A");
    expect(title(26)).toBe("Z");
    expect(title(27)).toBe("AA");
    expect(title(28)).toBe("AB");
    expect(title(701)).toBe("ZY");
    expect(title(2147483647)).toBe("FXSHRXW");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of colTitleSteps(701)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
