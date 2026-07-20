import { describe, it, expect } from "vitest";
import { naiveSearchSteps } from "./naive/algorithm";
import { NAIVE_CODE } from "./naive/code";
import { kmpSearchSteps } from "./kmp/algorithm";
import { KMP_CODE } from "./kmp/code";
import { rabinKarpSteps } from "./rabin-karp/algorithm";
import { RABIN_KARP_CODE } from "./rabin-karp/code";
import type { StringInput } from "./types";

const last = <T>(a: T[]): T => a[a.length - 1];

/** Ground-truth occurrence list. */
const allMatches = (text: string, pattern: string): number[] => {
  const out: number[] = [];
  for (let s = 0; s + pattern.length <= text.length; s++) {
    if (text.slice(s, s + pattern.length) === pattern) out.push(s);
  }
  return out;
};

const matchers = [
  { name: "naive", fn: naiveSearchSteps, code: NAIVE_CODE },
  { name: "kmp", fn: kmpSearchSteps, code: KMP_CODE },
  { name: "rabin-karp", fn: rabinKarpSteps, code: RABIN_KARP_CODE },
];

const cases: StringInput[] = [
  { text: "ABABABCABAB", pattern: "ABABC" },
  { text: "AAAAAA", pattern: "AAA" },
  { text: "ABCABCABC", pattern: "CAB" },
  { text: "ABCDEFG", pattern: "XYZ" }, // absent
  { text: "AABAACAADAABAABA", pattern: "AABA" },
];

describe.each(matchers)("$name string search", ({ fn, code }) => {
  it("reports exactly the correct match positions", () => {
    for (const c of cases) {
      const steps = fn(c);
      expect(last(steps).data.found).toEqual(allMatches(c.text, c.pattern));
    }
  });

  it("keeps line indices within the code bounds", () => {
    for (const s of fn(cases[0])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(code.length);
    }
  });

  it("is deterministic (pure)", () => {
    expect(fn(cases[0])).toEqual(fn(cases[0]));
  });
});
