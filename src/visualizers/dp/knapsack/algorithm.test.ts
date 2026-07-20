import { describe, it, expect } from "vitest";
import { knapsackSteps, type KnapsackInput } from "./algorithm";
import { KNAPSACK_CODE } from "./code";

/** Reference 0/1 knapsack for cross-checking. */
const bestValue = ({ weights, values, capacity }: KnapsackInput): number => {
  const dp = Array(capacity + 1).fill(0);
  for (let i = 0; i < weights.length; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
    }
  }
  return dp[capacity];
};

const input: KnapsackInput = {
  weights: [1, 3, 4, 5],
  values: [1, 4, 5, 7],
  capacity: 7,
};

describe("knapsackSteps", () => {
  it("computes the optimal value in the answer cell", () => {
    const steps = knapsackSteps(input);
    const last = steps[steps.length - 1];
    expect(last.data.cells[input.weights.length][input.capacity]).toBe(
      bestValue(input),
    );
  });

  it("matches the reference solver on random instances", () => {
    for (let t = 0; t < 20; t++) {
      const n = 4;
      const inst: KnapsackInput = {
        weights: Array.from({ length: n }, () => 1 + Math.floor(Math.random() * 5)),
        values: Array.from({ length: n }, () => 1 + Math.floor(Math.random() * 9)),
        capacity: 6 + Math.floor(Math.random() * 4),
      };
      const steps = knapsackSteps(inst);
      const answer = steps[steps.length - 1].data.cells[n][inst.capacity];
      expect(answer).toBe(bestValue(inst));
    }
  });

  it("base row is all zeros", () => {
    const steps = knapsackSteps(input);
    const firstFill = steps.find((s) => s.data.cells[0].every((v) => v === 0))!;
    expect(firstFill.data.cells[0]).toEqual(Array(input.capacity + 1).fill(0));
  });

  it("every step's line index is within the code bounds", () => {
    for (const s of knapsackSteps(input)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(KNAPSACK_CODE.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(knapsackSteps(input)).toEqual(knapsackSteps(input));
  });
});
