import { describe, it, expect } from "vitest";
import { balanceSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (s: string) => {
  const steps = balanceSteps(s);
  return steps[steps.length - 1].data.answer;
};

// Reference: try every split point; cost = b's on the left + a's on the right.
function brute(s: string): number {
  const n = s.length;
  let best = n;
  for (let cut = 0; cut <= n; cut++) {
    let cost = 0;
    for (let i = 0; i < cut; i++) if (s[i] === "b") cost++;
    for (let i = cut; i < n; i++) if (s[i] === "a") cost++;
    best = Math.min(best, cost);
  }
  return best;
}

describe("balanceSteps", () => {
  it("matches the split-point reference", () => {
    for (const s of ["aababbab", "bbaaaaabb", "a", "b", "ab", "ba", "bababa"]) {
      expect(solve(s)).toBe(brute(s));
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const step of balanceSteps("aababbab")) {
      expect(step.line).toBeGreaterThanOrEqual(0);
      expect(step.line).toBeLessThan(CODE.length);
    }
  });
});
