import { describe, it, expect } from "vitest";
import { electionSteps } from "./algorithm";
import { CODE } from "./code";

const queryResults = (persons: number[], times: number[], queries: number[]) => {
  const steps = electionSteps(persons, times, queries);
  return steps.filter((s) => s.data.phase === "query").map((s) => s.data.result);
};

describe("electionSteps", () => {
  it("matches the canonical example", () => {
    const persons = [0, 1, 1, 0, 0, 1, 0];
    const times = [0, 5, 10, 15, 20, 25, 30];
    expect(queryResults(persons, times, [3, 12, 25, 15, 24, 8])).toEqual([0, 1, 1, 0, 0, 1]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of electionSteps([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30], [3, 12])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
