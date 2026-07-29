import type { Step } from "@/core/types";

export interface MatchSubseqData {
  s: string;
  words: string[];
  sIdx: number | null;
  /** nextChar -> list of "word@pos" labels currently waiting */
  waiting: [string, string[]][];
  /** words just completed this step */
  justMatched: string[];
  count: number;
  answer: number | null;
}

export type MatchSubseqStep = Step<MatchSubseqData>;

/**
 * Instead of scanning s once per word, we bucket every word by the next character it needs. As we read
 * s left to right, each character advances exactly the words waiting on it — moving them to their new
 * next-char bucket, or counting them if finished. `line` indexes CODE.
 */
export function matchSubseqSteps(s: string, words: string[]): MatchSubseqStep[] {
  const steps: MatchSubseqStep[] = [];
  const waiting = new Map<string, { w: string; i: number }[]>();
  const add = (c: string, it: { w: string; i: number }) => {
    if (!waiting.has(c)) waiting.set(c, []);
    waiting.get(c)!.push(it);
  };
  for (const w of words) add(w[0], { w, i: 0 });
  let count = 0;

  const entries = (): [string, string[]][] => [...waiting.entries()].filter(([, v]) => v.length).map(([c, list]) => [c, list.map((it) => `${it.w}@${it.i}`)]);
  const snap = (o: Partial<MatchSubseqData>): MatchSubseqData => ({ s, words, sIdx: null, waiting: entries(), justMatched: [], count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MatchSubseqData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Bucket each word by its next-needed character; advance buckets as s is read.");

  for (let k = 0; k < s.length; k++) {
    const c = s[k];
    const advancing = waiting.get(c) ?? [];
    waiting.set(c, []);
    const justMatched: string[] = [];
    for (const it of advancing) {
      it.i++;
      if (it.i === it.w.length) { count++; justMatched.push(it.w); }
      else add(it.w[it.i], it);
    }
    push(10, `s[${k}] = '${c}': advance ${advancing.length} word(s)${justMatched.length ? `, complete ${justMatched.join(", ")}` : ""} (count ${count}).`, { sIdx: k, justMatched });
  }

  push(14, `Matching subsequences: ${count}.`, { answer: count });
  return steps;
}
