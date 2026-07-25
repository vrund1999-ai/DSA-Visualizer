import { describe, it, expect } from "vitest";
import { randomCollSteps, type Op } from "./algorithm";
import { CODE } from "./code";

const run = (ops: Op[]) => {
  const steps = randomCollSteps(ops);
  return steps[steps.length - 1].data.answer;
};

describe("randomCollSteps", () => {
  it("returns insert/remove booleans in order", () => {
    const ops: Op[] = [["insert", 1], ["insert", 1], ["insert", 2], ["remove", 1], ["getRandom"], ["remove", 1]];
    expect(run(ops)).toEqual(["true", "false", "true", "true", "~", "true"]);
  });

  it("remove on an absent value returns false", () => {
    expect(run([["remove", 5], ["insert", 5], ["remove", 5], ["remove", 5]])).toEqual(["false", "true", "true", "false"]);
  });

  it("keeps the backing array and map consistent after a swap-remove", () => {
    const steps = randomCollSteps([["insert", 10], ["insert", 20], ["insert", 30], ["remove", 10]]);
    const { list, index } = steps[steps.length - 2].data;
    expect(list.length).toBe(2);
    // every recorded index is a valid array position holding that value
    for (const [v, positions] of index) for (const p of positions) expect(list[p]).toBe(v);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of randomCollSteps([["insert", 1], ["remove", 1]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
