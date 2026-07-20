import { describe, it, expect } from "vitest";
import { editDistanceSteps, type EditDistanceInput } from "./algorithm";
import { EDIT_DISTANCE_CODE } from "./code";

const last = <T>(a: T[]): T => a[a.length - 1];

const refEdit = (a: string, b: string): number => {
  const dp = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[a.length][b.length];
};

describe("editDistanceSteps", () => {
  it("computes the classic kitten→sitting distance (3)", () => {
    const steps = editDistanceSteps({ a: "kitten", b: "sitting" });
    expect(last(steps).data.cells[6][7]).toBe(3);
  });

  it("matches the reference solver on random strings", () => {
    const A = "abcde";
    const rnd = (n: number) =>
      Array.from({ length: n }, () => A[Math.floor(Math.random() * 5)]).join("");
    for (let t = 0; t < 20; t++) {
      const inst: EditDistanceInput = { a: rnd(5), b: rnd(5) };
      const answer = last(editDistanceSteps(inst)).data.cells[inst.a.length][inst.b.length];
      expect(answer).toBe(refEdit(inst.a, inst.b));
    }
  });

  it("is zero for identical strings", () => {
    const steps = editDistanceSteps({ a: "hello", b: "hello" });
    expect(last(steps).data.cells[5][5]).toBe(0);
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of editDistanceSteps({ a: "abc", b: "abd" })) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(EDIT_DISTANCE_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    const input: EditDistanceInput = { a: "abcd", b: "acbd" };
    expect(editDistanceSteps(input)).toEqual(editDistanceSteps(input));
  });
});
