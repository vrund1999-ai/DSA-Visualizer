import { describe, it, expect } from "vitest";
import { nQueensSteps } from "./algorithm";
import { NQUEENS_CODE } from "./code";

const last = <T>(a: T[]): T => a[a.length - 1];

const noAttacks = (queens: number[]) => {
  for (let r1 = 0; r1 < queens.length; r1++) {
    for (let r2 = r1 + 1; r2 < queens.length; r2++) {
      if (queens[r1] === queens[r2]) return false;
      if (Math.abs(queens[r1] - queens[r2]) === Math.abs(r1 - r2)) return false;
    }
  }
  return true;
};

describe("nQueensSteps", () => {
  it("ends with a full, valid placement for solvable board sizes", () => {
    for (const n of [4, 5, 6, 8]) {
      const steps = nQueensSteps(n);
      const q = last(steps).data.queens;
      expect(q).toHaveLength(n);
      expect(noAttacks(q)).toBe(true);
    }
  });

  it("only ever holds a conflict-free partial placement", () => {
    for (const s of nQueensSteps(6)) {
      expect(noAttacks(s.data.queens)).toBe(true);
    }
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of nQueensSteps(6)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(NQUEENS_CODE.length);
    }
  });

  it("records at least one backtrack for N=6", () => {
    expect(last(nQueensSteps(6)).metrics!.backtracks).toBeGreaterThan(0);
  });

  it("is deterministic (pure)", () => {
    expect(nQueensSteps(6)).toEqual(nQueensSteps(6));
  });
});
