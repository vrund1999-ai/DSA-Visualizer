import { describe, it, expect } from "vitest";
import { productSteps, type ProductOp } from "./algorithm";
import { CODE } from "./code";

const results = (ops: ProductOp[]) => {
  const steps = productSteps(ops);
  return steps[steps.length - 1].data.answers.filter((a): a is number => a !== null);
};

describe("productSteps", () => {
  it("matches the canonical example", () => {
    const ops: ProductOp[] = [
      { type: "add", num: 3 },
      { type: "add", num: 0 },
      { type: "add", num: 2 },
      { type: "add", num: 5 },
      { type: "add", num: 4 },
      { type: "getProduct", k: 2 },
      { type: "getProduct", k: 3 },
      { type: "getProduct", k: 4 },
      { type: "add", num: 8 },
      { type: "getProduct", k: 2 },
    ];
    expect(results(ops)).toEqual([20, 40, 0, 32]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const ops: ProductOp[] = [
      { type: "add", num: 3 },
      { type: "getProduct", k: 1 },
    ];
    for (const s of productSteps(ops)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
