import type { Step } from "@/core/types";

export interface BinSubData {
  s: string;
  k: number;
  /** which indices are kept in the subsequence */
  kept: boolean[];
  i: number | null;
  val: number;
  pow: number;
  ans: number;
  answer: number | null;
}

export type BinSubStep = Step<BinSubData>;

/**
 * Every 0 can be kept for free (it never raises the value), while 1s only matter by place value. Scanning
 * from the least-significant end, greedily include each 1 whose bit still keeps the value ≤ k; once the
 * place value alone exceeds k, no further 1s can be added. `line` indexes CODE.
 */
export function binSubSteps(s: string, k: number): BinSubStep[] {
  const steps: BinSubStep[] = [];
  const kept = new Array(s.length).fill(false);
  let ans = 0;
  let val = 0;
  let pow = 1;

  const snap = (o: Partial<BinSubData>): BinSubData => ({ s, k, kept: [...kept], i: null, val, pow, ans, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BinSubData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Scan from the right; keep every 0 and each 1 whose place value keeps the total ≤ ${k}.`);

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0") {
      ans++;
      kept[i] = true;
      push(4, `'0' at ${i}: always kept (length ${ans}).`, { i });
    } else if (pow <= k && val + pow <= k) {
      val += pow;
      ans++;
      kept[i] = true;
      push(6, `'1' at ${i}: place value ${pow}, total ${val} ≤ ${k} — keep it (length ${ans}).`, { i });
    } else {
      push(5, `'1' at ${i}: place value ${pow} would exceed ${k} — skip.`, { i });
    }
    if (pow <= k) pow *= 2;
  }

  push(11, `Longest subsequence with value ≤ ${k}: ${ans}.`, { answer: ans });
  return steps;
}
