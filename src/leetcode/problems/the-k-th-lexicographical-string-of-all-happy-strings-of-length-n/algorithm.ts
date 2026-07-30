import type { Step } from "@/core/types";

export interface HappyData {
  n: number;
  k: number;
  /** complete happy strings generated so far, in lexicographical order */
  generated: string[];
  /** the string just completed */
  latest: string | null;
  answer: string | null;
}

export type HappyStep = Step<HappyData>;

const MAX_STEPS = 400;

/**
 * Happy strings use only 'a','b','c' with no two adjacent equal. Generate them in lexicographical order via
 * DFS (trying a<b<c and skipping the previous letter), stopping once k have been produced, then return the
 * k-th (or "" if there are fewer than k). `line` indexes CODE.
 */
export function happySteps(n: number, k: number): HappyStep[] {
  const steps: HappyStep[] = [];
  const generated: string[] = [];

  const snap = (o: Partial<HappyData>): HappyData => ({
    n,
    k,
    generated: [...generated],
    latest: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<HappyData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Generate happy strings of length ${n} in order until we have ${k}.`);

  const dfs = (cur: string) => {
    if (generated.length >= k) return;
    if (cur.length === n) {
      generated.push(cur);
      push(4, `Completed "${cur}" (#${generated.length}).`, { latest: cur });
      return;
    }
    for (const ch of "abc") {
      if (cur[cur.length - 1] === ch) continue;
      dfs(cur + ch);
      if (generated.length >= k) return;
    }
  };

  dfs("");

  const answer = generated.length >= k ? generated[k - 1] : "";
  push(11, generated.length >= k ? `The ${k}-th happy string is "${answer}".` : `Only ${generated.length} happy string(s) exist — return "".`, { answer });
  return steps;
}
