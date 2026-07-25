import { describe, it, expect } from "vitest";
import { wordDictSteps, type WordOp } from "./algorithm";
import { CODE } from "./code";

const run = (ops: WordOp[]) => {
  const steps = wordDictSteps(ops);
  return steps[steps.length - 1].data.answer;
};

describe("wordDictSteps", () => {
  it("supports add and wildcard search", () => {
    const ops: WordOp[] = [
      ["add", "bad"],
      ["add", "dad"],
      ["add", "mad"],
      ["search", "pad"],
      ["search", "bad"],
      ["search", ".ad"],
      ["search", "b.."],
    ];
    expect(run(ops)).toEqual([null, null, null, false, true, true, true]);
  });

  it("does not match a prefix that is not a full word", () => {
    expect(run([["add", "hello"], ["search", "hell"], ["search", "hello"], ["search", "h.llo"]])).toEqual([null, false, true, true]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wordDictSteps([["add", "a"], ["search", "."]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
