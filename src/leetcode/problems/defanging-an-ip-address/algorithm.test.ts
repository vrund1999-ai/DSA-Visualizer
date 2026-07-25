import { describe, it, expect } from "vitest";
import { defangSteps } from "./algorithm";
import { CODE } from "./code";

const defang = (a: string) => {
  const steps = defangSteps(a);
  return steps[steps.length - 1].data.answer;
};

describe("defangSteps", () => {
  it("replaces every dot with [.]", () => {
    expect(defang("1.1.1.1")).toBe("1[.]1[.]1[.]1");
    expect(defang("255.100.50.0")).toBe("255[.]100[.]50[.]0");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of defangSteps("1.1.1.1")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
