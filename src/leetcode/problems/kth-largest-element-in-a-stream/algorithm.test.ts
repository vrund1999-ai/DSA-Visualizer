import { describe, it, expect } from "vitest";
import { kthStreamSteps } from "./algorithm";
import { CODE } from "./code";

describe("kthStreamSteps", () => {
  it("reports the running kth largest after each add", () => {
    const steps = kthStreamSteps({ k: 3, initial: [4, 5, 8, 2], adds: [3, 5, 10, 9, 4] });
    // answers after each add() call (skip constructor/init steps)
    const addAnswers = steps.filter((s) => s.data.added !== null && s.line === 9).map((s) => s.data.answer);
    expect(addAnswers).toEqual([4, 5, 5, 8, 8]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of kthStreamSteps({ k: 1, initial: [], adds: [5, 3, 7] })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
