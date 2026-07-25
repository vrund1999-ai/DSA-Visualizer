import { describe, it, expect } from "vitest";
import { itinerarySteps } from "./algorithm";
import { CODE } from "./code";

const itinerary = (tickets: string[][]) => {
  const steps = itinerarySteps(tickets);
  return steps[steps.length - 1].data.answer;
};

describe("itinerarySteps", () => {
  it("reconstructs the lexicographically smallest itinerary", () => {
    expect(itinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]])).toEqual([
      "JFK", "MUC", "LHR", "SFO", "SJC",
    ]);
    expect(itinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]])).toEqual([
      "JFK", "ATL", "JFK", "SFO", "ATL", "SFO",
    ]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of itinerarySteps([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
