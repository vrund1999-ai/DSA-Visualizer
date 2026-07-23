import type { Highlight, Step } from "@/core/types";

export interface IsSubsequenceInput {
  s: string;
  t: string;
}

export interface IsSubsequenceData {
  s: string[];
  t: string[];
  i: number;
  j: number | null;
  matched: number[];
  result: boolean | null;
}

export type IsSubsequenceStep = Step<IsSubsequenceData>;

/**
 * Two pointers: scan `t` and advance the `s` pointer only on a match. If the s
 * pointer reaches the end, every character of s was found in order. `line`
 * indexes CODE.
 */
export function isSubsequenceSteps(input: IsSubsequenceInput): IsSubsequenceStep[] {
  const s = [...input.s];
  const t = [...input.t];
  const steps: IsSubsequenceStep[] = [];
  const matched: number[] = [];
  let i = 0;

  const snap = (o: Partial<IsSubsequenceData>): IsSubsequenceData => ({ s: [...s], t: [...t], i, j: null, matched: [...matched], result: null, ...o });
  const push = (line: number, explanation: string, data: IsSubsequenceData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, `Is "${input.s}" a subsequence of "${input.t}"?`, snap({}), []);

  for (let j = 0; j < t.length; j++) {
    if (i < s.length && s[i] === t[j]) {
      matched.push(j);
      push(3, `t[${j}]='${t[j]}' matches s[${i}] — advance s to ${i + 1}.`, snap({ j }), [{ ref: `t${j}`, role: "sorted" }, { ref: `s${i}`, role: "sorted" }]);
      i++;
    } else {
      push(3, `t[${j}]='${t[j]}'${i < s.length ? ` ≠ s[${i}]='${s[i]}'` : ""} — skip.`, snap({ j }), [{ ref: `t${j}`, role: "visited" }]);
    }
  }

  const result = i === s.length;
  push(5, result ? `All of "${input.s}" matched in order — it's a subsequence.` : `Only matched ${i}/${s.length} of "${input.s}" — not a subsequence.`, snap({ j: null, result }), []);
  return steps;
}
