import type { Step } from "@/core/types";

export interface CookiesData {
  g: number[];
  s: number[];
  child: number;
  cookie: number;
  /** true if the current cookie satisfied the child */
  satisfied: boolean | null;
  content: number;
  answer: number | null;
}

export type CookiesStep = Step<CookiesData>;

/**
 * Sort children by greed and cookies by size, then greedily give the smallest cookie
 * that satisfies the least greedy remaining child. Two pointers sweep both arrays.
 * `line` indexes CODE.
 */
export function cookiesSteps(gIn: number[], sIn: number[]): CookiesStep[] {
  const steps: CookiesStep[] = [];
  const g = [...gIn].sort((a, b) => a - b);
  const s = [...sIn].sort((a, b) => a - b);
  let child = 0;
  let cookie = 0;

  const snap = (o: Partial<CookiesData>): CookiesData => ({ g: [...g], s: [...s], child, cookie, satisfied: null, content: child, answer: null, ...o });
  const push = (line: number, explanation: string, data: CookiesData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Sort both; give each child the smallest cookie that fits.", snap({}));

  while (child < g.length && cookie < s.length) {
    const fits = s[cookie] >= g[child];
    if (fits) {
      push(5, `Cookie ${s[cookie]} ≥ greed ${g[child]} — child ${child} content.`, snap({ satisfied: true }));
      child++;
    } else {
      push(6, `Cookie ${s[cookie]} < greed ${g[child]} — too small, skip.`, snap({ satisfied: false }));
    }
    cookie++;
  }

  push(8, `Content children: ${child}.`, snap({ answer: child }));
  return steps;
}
