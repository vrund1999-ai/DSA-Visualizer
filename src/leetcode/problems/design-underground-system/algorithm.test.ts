import { describe, it, expect } from "vitest";
import { undergroundSteps, type UndergroundOp } from "./algorithm";
import { CODE } from "./code";

const run = (ops: UndergroundOp[]) => {
  const steps = undergroundSteps(ops);
  return steps[steps.length - 1].data.answer;
};

describe("undergroundSteps", () => {
  it("computes per-route average travel times", () => {
    const ops: UndergroundOp[] = [
      ["checkIn", 45, "Leyton", 3],
      ["checkIn", 32, "Paradise", 8],
      ["checkOut", 45, "Waterloo", 15],
      ["checkOut", 32, "Cambridge", 22],
      ["getAverageTime", "Paradise", "Cambridge"],
      ["checkIn", 10, "Leyton", 24],
      ["checkOut", 10, "Waterloo", 38],
      ["getAverageTime", "Leyton", "Waterloo"],
    ];
    // Paradise→Cambridge: one trip (14). Leyton→Waterloo: trips 12 and 14 → avg 13.
    expect(run(ops)).toEqual([14, 13]);
  });

  it("averages repeated trips on the same route", () => {
    const ops: UndergroundOp[] = [
      ["checkIn", 1, "A", 0],
      ["checkOut", 1, "B", 10],
      ["checkIn", 2, "A", 2],
      ["checkOut", 2, "B", 8],
      ["getAverageTime", "A", "B"],
    ];
    expect(run(ops)).toEqual([8]); // (10 + 6) / 2
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of undergroundSteps([["checkIn", 1, "A", 0], ["checkOut", 1, "B", 10]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
