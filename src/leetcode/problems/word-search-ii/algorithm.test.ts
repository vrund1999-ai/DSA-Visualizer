import { describe, it, expect } from "vitest";
import { wordSearch2Steps } from "./algorithm";
import { CODE } from "./code";

const solve = (board: string[][], words: string[]) => {
  const steps = wordSearch2Steps(board, words);
  return new Set(steps[steps.length - 1].data.answer);
};

describe("wordSearch2Steps", () => {
  it("finds all words present in the board", () => {
    const board = [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ];
    expect(solve(board, ["oath", "pea", "eat", "rain"])).toEqual(new Set(["oath", "eat"]));
    expect(solve([["a", "b"]], ["ab", "ba", "cd"])).toEqual(new Set(["ab", "ba"]));
    expect(solve([["a"]], ["a"])).toEqual(new Set(["a"]));
  });

  it("does not mutate the caller's board", () => {
    const board = [["a", "b"], ["c", "d"]];
    wordSearch2Steps(board, ["ab"]);
    expect(board).toEqual([["a", "b"], ["c", "d"]]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"]];
    for (const s of wordSearch2Steps(board, ["oath", "eat"])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
