import { describe, it, expect } from "vitest";
import { invalidTxSteps } from "./algorithm";
import { CODE } from "./code";

const invalid = (raw: string[]) => {
  const steps = invalidTxSteps(raw);
  return steps[steps.length - 1].data.invalid.map((i) => raw[i]).sort();
};

describe("invalidTxSteps", () => {
  it("flags over-1000 and cross-city-within-60min transactions", () => {
    expect(invalid(["alice,20,800,mtv", "alice,50,100,beijing"]).sort()).toEqual(
      ["alice,20,800,mtv", "alice,50,100,beijing"].sort(),
    );
    expect(invalid(["alice,20,800,mtv", "alice,50,1200,mtv"])).toEqual(["alice,50,1200,mtv"]);
    expect(invalid(["bob,50,1200,mtv"])).toEqual(["bob,50,1200,mtv"]);
  });

  it("returns nothing when all valid", () => {
    expect(invalid(["alice,20,800,mtv", "bob,50,900,nyc"])).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of invalidTxSteps(["alice,20,800,mtv", "alice,50,1200,mtv"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
