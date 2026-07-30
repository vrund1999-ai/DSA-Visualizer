import { describe, it, expect } from "vitest";
import { bankSteps, type BankOp } from "./algorithm";
import { CODE } from "./code";

const run = (balance: number[], ops: BankOp[]) => {
  const steps = bankSteps(balance, ops);
  const last = steps[steps.length - 1].data;
  return { answers: last.answers, balance: last.balance };
};

describe("bankSteps", () => {
  it("matches the canonical example", () => {
    const { answers, balance } = run([10, 100, 20, 50, 30], [
      { type: "withdraw", a: 3, money: 10 },
      { type: "transfer", a1: 5, a2: 1, money: 20 },
      { type: "deposit", a: 5, money: 20 },
      { type: "transfer", a1: 3, a2: 4, money: 15 },
      { type: "withdraw", a: 10, money: 50 },
    ]);
    expect(answers).toEqual([true, true, true, false, false]);
    expect(balance).toEqual([30, 100, 10, 50, 30]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const steps = bankSteps([10, 100], [{ type: "deposit", a: 1, money: 5 }]);
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
