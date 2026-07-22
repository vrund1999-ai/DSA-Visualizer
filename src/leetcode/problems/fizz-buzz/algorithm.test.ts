import { describe, it, expect } from "vitest";
import { fizzSteps } from "./algorithm";
import { CODE } from "./code";

const fizz = (n: number) => {
  const steps = fizzSteps(n);
  return steps[steps.length - 1].data.cells.map((c) => c.text);
};

describe("fizzSteps", () => {
  it("produces the FizzBuzz sequence", () => {
    expect(fizz(15)).toEqual([
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
      "11", "Fizz", "13", "14", "FizzBuzz",
    ]);
    expect(fizz(3)).toEqual(["1", "2", "Fizz"]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of fizzSteps(15)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
