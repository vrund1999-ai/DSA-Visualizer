import { describe, it, expect } from "vitest";
import { wordSearchSteps } from "./algorithm";
import { CODE } from "./code";

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const exists = (word: string) => {
  const steps = wordSearchSteps(board, word);
  return steps[steps.length - 1].data.found;
};

describe("wordSearchSteps", () => {
  it("finds words that exist", () => {
    expect(exists("ABCCED")).toBe(true);
    expect(exists("SEE")).toBe(true);
  });

  it("rejects words that don't exist (no cell reuse)", () => {
    expect(exists("ABCB")).toBe(false);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of wordSearchSteps(board, "SEE")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
