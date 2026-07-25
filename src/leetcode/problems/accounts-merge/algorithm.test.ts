import { describe, it, expect } from "vitest";
import { accountsSteps } from "./algorithm";
import { CODE } from "./code";

const merge = (accounts: string[][]) => {
  const steps = accountsSteps(accounts);
  return steps[steps.length - 1].data.groups
    .map((g) => g.join(","))
    .sort();
};

describe("accountsSteps", () => {
  it("merges accounts sharing an email", () => {
    expect(merge([
      ["John", "a@x.com", "b@x.com"],
      ["John", "b@x.com", "c@x.com"],
      ["Mary", "m@x.com"],
      ["John", "d@x.com"],
    ])).toEqual([
      "John,a@x.com,b@x.com,c@x.com",
      "John,d@x.com",
      "Mary,m@x.com",
    ]);
  });

  it("keeps distinct people separate", () => {
    expect(merge([["A", "1@x"], ["B", "2@x"]])).toEqual(["A,1@x", "B,2@x"]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of accountsSteps([["John", "a@x.com", "b@x.com"]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
