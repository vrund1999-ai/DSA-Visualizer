import { describe, it, expect } from "vitest";
import { leaderboardSteps, type LeaderboardOp } from "./algorithm";
import { CODE } from "./code";

const finalAnswers = (ops: LeaderboardOp[]) => {
  const steps = leaderboardSteps(ops);
  return steps[steps.length - 1].data.answers.filter((a): a is number => a !== null);
};

describe("leaderboardSteps", () => {
  it("matches the canonical LeetCode example", () => {
    const ops: LeaderboardOp[] = [
      { type: "add", player: 1, score: 73 },
      { type: "add", player: 2, score: 56 },
      { type: "add", player: 3, score: 39 },
      { type: "add", player: 4, score: 51 },
      { type: "add", player: 5, score: 4 },
      { type: "top", k: 1 },
      { type: "reset", player: 1 },
      { type: "reset", player: 2 },
      { type: "add", player: 2, score: 51 },
      { type: "top", k: 3 },
    ];
    expect(finalAnswers(ops)).toEqual([73, 141]);
  });

  it("accumulates repeated addScore for the same player", () => {
    const ops: LeaderboardOp[] = [
      { type: "add", player: 1, score: 10 },
      { type: "add", player: 1, score: 20 },
      { type: "top", k: 1 },
    ];
    expect(finalAnswers(ops)).toEqual([30]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const ops: LeaderboardOp[] = [
      { type: "add", player: 1, score: 5 },
      { type: "reset", player: 1 },
      { type: "top", k: 2 },
    ];
    for (const s of leaderboardSteps(ops)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
