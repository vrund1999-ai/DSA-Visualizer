import { describe, it, expect } from "vitest";
import { zigzagSteps } from "./algorithm";
import { CODE } from "./code";

const convert = (s: string, numRows: number) => {
  const steps = zigzagSteps({ s, numRows });
  return steps[steps.length - 1].data.result;
};

describe("zigzagSteps", () => {
  it("converts strings to zigzag order", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
    expect(convert("A", 1)).toBe("A");
    expect(convert("AB", 1)).toBe("AB");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of zigzagSteps({ s: "PAYPALISHIRING", numRows: 3 })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
