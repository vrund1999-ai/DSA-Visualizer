import { describe, it, expect } from "vitest";
import { freqSortSteps } from "./algorithm";
import { CODE } from "./code";

const sortByFreq = (s: string) => {
  const steps = freqSortSteps(s);
  return steps[steps.length - 1].data.answer;
};

// verify the multiset and that frequencies are non-increasing
const isValid = (input: string, output: string) => {
  if (output === null) return false;
  const count = (str: string) => {
    const m = new Map<string, number>();
    for (const c of str) m.set(c, (m.get(c) ?? 0) + 1);
    return m;
  };
  const ci = count(input);
  const co = count(output);
  if (ci.size !== co.size) return false;
  for (const [k, v] of ci) if (co.get(k) !== v) return false;
  // runs must be contiguous and non-increasing in length
  const runs: number[] = [];
  for (let i = 0; i < output.length; ) {
    let j = i;
    while (j < output.length && output[j] === output[i]) j++;
    runs.push(j - i);
    i = j;
  }
  return runs.every((r, i) => i === 0 || runs[i - 1] >= r);
};

describe("freqSortSteps", () => {
  it("orders characters by descending frequency", () => {
    expect(isValid("tree", sortByFreq("tree") as string)).toBe(true);
    expect(isValid("cccaaa", sortByFreq("cccaaa") as string)).toBe(true);
    expect(isValid("Aabb", sortByFreq("Aabb") as string)).toBe(true);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of freqSortSteps("tree")) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
