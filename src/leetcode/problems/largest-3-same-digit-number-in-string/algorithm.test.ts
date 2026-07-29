import { describe, it, expect } from "vitest";
import { goodIntSteps } from "./algorithm";
import { CODE } from "./code";

const good = (num: string) => {
  const steps = goodIntSteps(num);
  return steps[steps.length - 1].data.answer;
};

describe("goodIntSteps", () => {
  it("finds the largest good integer", () => {
    expect(good("6777133339")).toBe("777");
    expect(good("2300019")).toBe("000");
    expect(good("42352338")).toBe("");
    expect(good("222")).toBe("222");
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of goodIntSteps("6777133339")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
