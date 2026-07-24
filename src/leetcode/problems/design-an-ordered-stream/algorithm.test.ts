import { describe, it, expect } from "vitest";
import { orderedStreamSteps } from "./algorithm";
import { CODE } from "./code";

const chunks = (n: number, inserts: [number, string][]) =>
  orderedStreamSteps(n, inserts)
    .filter((s) => s.line === 12)
    .map((s) => s.data.emitted);

describe("orderedStreamSteps", () => {
  it("emits contiguous chunks in id order", () => {
    expect(chunks(5, [[3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]])).toEqual([
      [],
      ["aaaaa"],
      ["bbbbb", "ccccc"],
      [],
      ["ddddd", "eeeee"],
    ]);
    expect(chunks(1, [[1, "x"]])).toEqual([["x"]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of orderedStreamSteps(5, [[1, "a"], [2, "b"]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
