import type { Step } from "@/core/types";

export interface CommonPrefixData {
  arr1: number[];
  arr2: number[];
  prefixes: string[];
  phase: "build" | "match";
  /** index in arr1 (build) or arr2 (match) being processed */
  active: number | null;
  /** the matching prefix found this step */
  matched: string | null;
  best: number;
  answer: number | null;
}

export type CommonPrefixStep = Step<CommonPrefixData>;

/**
 * Find the Length of the Longest Common Prefix: store every prefix of every number in arr1 in a set, then
 * for each number in arr2 check its prefixes against that set, keeping the longest match. `line` indexes
 * CODE.
 */
export function commonPrefixSteps(arr1: number[], arr2: number[]): CommonPrefixStep[] {
  const steps: CommonPrefixStep[] = [];
  const prefixes = new Set<string>();

  const snap = (o: Partial<CommonPrefixData>): CommonPrefixData => ({
    arr1,
    arr2,
    prefixes: [...prefixes].sort(),
    phase: "build",
    active: null,
    matched: null,
    best: 0,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<CommonPrefixData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  for (let i = 0; i < arr1.length; i++) {
    const s = "" + arr1[i];
    for (let p = 1; p <= s.length; p++) prefixes.add(s.slice(0, p));
    push(5, `Added all prefixes of ${arr1[i]}.`, { active: i, phase: "build" });
  }

  let best = 0;
  for (let j = 0; j < arr2.length; j++) {
    const s = "" + arr2[j];
    let matched: string | null = null;
    for (let p = 1; p <= s.length; p++) {
      if (prefixes.has(s.slice(0, p))) {
        matched = s.slice(0, p);
        best = Math.max(best, p);
      }
    }
    push(12, matched ? `${arr2[j]} shares prefix "${matched}" (length ${matched.length}). Best ${best}.` : `${arr2[j]} shares no prefix.`, {
      active: j,
      phase: "match",
      matched,
      best,
    });
  }

  push(14, `Longest common prefix length = ${best}.`, { phase: "match", best, answer: best });
  return steps;
}
