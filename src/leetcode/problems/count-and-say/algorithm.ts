import type { Step } from "@/core/types";

export interface CountAndSayData {
  n: number;
  /** the sequence of terms generated so far */
  terms: string[];
  /** current term being read */
  cur: string;
  /** [j, k) run being described in `cur` */
  run: [number, number] | null;
  next: string;
  answer: string | null;
}

export type CountAndSayStep = Step<CountAndSayData>;

/**
 * Each term describes the previous one by reading off consecutive runs as "count
 * digit". Starting from "1", apply the run-length description n − 1 times. `line`
 * indexes CODE.
 */
export function countAndSaySteps(n: number): CountAndSayStep[] {
  const steps: CountAndSayStep[] = [];
  const terms: string[] = ["1"];
  let s = "1";

  const snap = (o: Partial<CountAndSayData>): CountAndSayData => ({ n, terms: [...terms], cur: s, run: null, next: "", answer: null, ...o });
  const push = (line: number, explanation: string, data: CountAndSayData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Start with "1"; describe it ${n - 1} more time(s).`, snap({}));

  for (let i = 1; i < n; i++) {
    let next = "";
    let j = 0;
    while (j < s.length) {
      let k = j;
      while (k < s.length && s[k] === s[j]) k++;
      next += (k - j) + s[j];
      push(7, `"${s.slice(j, k)}" → "${k - j}${s[j]}".`, snap({ cur: s, run: [j, k], next }));
      j = k;
    }
    s = next;
    terms.push(s);
  }

  push(12, `Term ${n} is "${s}".`, snap({ answer: s }));
  return steps;
}
