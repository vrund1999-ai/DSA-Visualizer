import { describe, it, expect } from "vitest";
import { shortestRemovalSteps } from "./algorithm";
import { CODE } from "./code";

const shortest = (arr: number[]) => {
  const steps = shortestRemovalSteps(arr);
  return steps[steps.length - 1].data.answer;
};

// Brute-force reference: smallest removable window length (including length 0) that leaves a sorted array.
function brute(arr: number[]): number {
  const n = arr.length;
  const sorted = (a: number[]) => a.every((v, k) => k === 0 || a[k - 1] <= v);
  let best = n;
  for (let l = 0; l <= n; l++)
    for (let len = 0; l + len <= n; len++) {
      const rest = [...arr.slice(0, l), ...arr.slice(l + len)];
      if (sorted(rest)) best = Math.min(best, len);
    }
  return best;
}

describe("shortestRemovalSteps", () => {
  it("matches a brute-force reference", () => {
    const cases = [
      [1, 2, 3, 10, 4, 2, 3, 5],
      [5, 4, 3, 2, 1],
      [1, 2, 3],
      [2, 2, 2, 1, 1, 1],
      [1, 3, 2, 4],
      [16, 10, 0, 3, 22, 1, 14, 7, 2, 5],
    ];
    for (const arr of cases) expect(shortest(arr)).toBe(brute(arr));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of shortestRemovalSteps([1, 2, 3, 10, 4, 2, 3, 5])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
