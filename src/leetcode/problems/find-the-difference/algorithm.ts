import type { Step } from "@/core/types";

export interface FindDiffData {
  s: string;
  t: string;
  /** which string / index is being XORed: "s"|"t" and index */
  from: "s" | "t" | null;
  idx: number | null;
  x: number;
  answer: string | null;
}

export type FindDiffStep = Step<FindDiffData>;

/**
 * XOR every character code of both strings. Identical characters cancel in pairs, so
 * the surviving value is the code of the single extra character in t. `line` indexes
 * CODE.
 */
export function findDiffSteps(s: string, t: string): FindDiffStep[] {
  const steps: FindDiffStep[] = [];
  let x = 0;

  const snap = (o: Partial<FindDiffData>): FindDiffData => ({ s, t, from: null, idx: null, x, answer: null, ...o });
  const push = (line: number, explanation: string, data: FindDiffData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "XOR all character codes; matched pairs cancel to 0.", snap({}));

  for (let i = 0; i < s.length; i++) {
    x ^= s.charCodeAt(i);
    push(2, `XOR '${s[i]}' (${s.charCodeAt(i)}) → x = ${x}.`, snap({ from: "s", idx: i }));
  }
  for (let i = 0; i < t.length; i++) {
    x ^= t.charCodeAt(i);
    push(3, `XOR '${t[i]}' (${t.charCodeAt(i)}) → x = ${x}.`, snap({ from: "t", idx: i }));
  }

  push(5, `Remaining code ${x} → '${String.fromCharCode(x)}'.`, snap({ answer: String.fromCharCode(x) }));
  return steps;
}
