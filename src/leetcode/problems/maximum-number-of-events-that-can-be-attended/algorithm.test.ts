import { describe, it, expect } from "vitest";
import { eventsSteps } from "./algorithm";
import { CODE } from "./code";

const maxEvents = (events: number[][]) => {
  const steps = eventsSteps(events);
  return steps[steps.length - 1].data.answer;
};

describe("eventsSteps", () => {
  it("maximizes events attended", () => {
    expect(maxEvents([[1, 2], [2, 3], [3, 4]])).toBe(3);
    expect(maxEvents([[1, 2], [2, 3], [3, 4], [1, 2]])).toBe(4);
    expect(maxEvents([[1, 4], [4, 4], [2, 2], [3, 4], [1, 1]])).toBe(4);
    expect(maxEvents([[1, 5]])).toBe(1);
    expect(maxEvents([[1, 1], [1, 1], [1, 1]])).toBe(1);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of eventsSteps([[1, 4], [4, 4], [2, 2], [3, 4], [1, 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
