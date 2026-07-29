import { describe, it, expect } from "vitest";
import { dominoesSteps } from "./algorithm";
import { CODE } from "./code";

const push = (d: string) => {
  const steps = dominoesSteps(d);
  return steps[steps.length - 1].data.answer;
};

describe("dominoesSteps", () => {
  it("resolves the domino forces", () => {
    expect(push("RR.L")).toBe("RR.L");
    expect(push(".L.R...LR..L..")).toBe("LL.RR.LLRRLL..");
    expect(push("R.")).toBe("RR");
    expect(push(".")).toBe(".");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of dominoesSteps(".L.R...LR..L..")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
