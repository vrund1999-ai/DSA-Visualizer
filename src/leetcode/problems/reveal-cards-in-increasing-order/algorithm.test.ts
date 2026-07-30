import { describe, it, expect } from "vitest";
import { revealSteps } from "./algorithm";
import { CODE } from "./code";

const solve = (deck: number[]) => {
  const steps = revealSteps(deck);
  return steps[steps.length - 1].data.answer;
};

// Simulate the reveal process to verify increasing order.
function reveal(order: number[]): number[] {
  const q = order.map((_, i) => i);
  const out: number[] = [];
  let flip = true;
  while (q.length) {
    if (flip) out.push(order[q.shift()!]);
    else q.push(q.shift()!);
    flip = !flip;
  }
  return out;
}

describe("revealSteps", () => {
  it("produces an ordering that reveals increasingly", () => {
    for (const deck of [[17, 13, 11, 2, 3, 5, 7], [1, 1000], [1], [6, 2, 4, 8, 5, 3, 7, 1]]) {
      const order = solve(deck)!;
      const revealed = reveal(order);
      expect(revealed).toEqual([...deck].sort((a, b) => a - b));
    }
  });

  it("matches the known example", () => {
    expect(solve([17, 13, 11, 2, 3, 5, 7])).toEqual([2, 13, 3, 11, 5, 17, 7]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of revealSteps([17, 13, 11, 2, 3, 5, 7])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
