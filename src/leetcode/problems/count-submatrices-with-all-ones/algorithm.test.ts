import { describe, it, expect } from "vitest";
import { submatSteps } from "./algorithm";
import { CODE } from "./code";

const count = (mat: number[][]) => {
  const steps = submatSteps(mat);
  return steps[steps.length - 1].data.answer;
};

// brute-force reference
const brute = (mat: number[][]) => {
  const m = mat.length;
  const n = mat[0].length;
  let c = 0;
  for (let r1 = 0; r1 < m; r1++) for (let c1 = 0; c1 < n; c1++) for (let r2 = r1; r2 < m; r2++) for (let c2 = c1; c2 < n; c2++) {
    let all = true;
    for (let i = r1; i <= r2 && all; i++) for (let j = c1; j <= c2; j++) if (!mat[i][j]) { all = false; break; }
    if (all) c++;
  }
  return c;
};

describe("submatSteps", () => {
  it("counts all-one submatrices", () => {
    expect(count([[1, 0, 1], [1, 1, 0], [1, 1, 0]])).toBe(13);
    expect(count([[0, 1, 1, 0], [0, 1, 1, 1], [1, 1, 1, 0]])).toBe(24);
    const rand = [[1, 1, 0], [1, 1, 1], [0, 1, 1]];
    expect(count(rand)).toBe(brute(rand));
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of submatSteps([[1, 0, 1], [1, 1, 0], [1, 1, 0]])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
