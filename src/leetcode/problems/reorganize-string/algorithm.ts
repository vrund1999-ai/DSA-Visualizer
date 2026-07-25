import type { Step } from "@/core/types";

export interface ReorganizeData {
  s: string;
  counts: [string, number][];
  res: (string | null)[];
  /** index just filled */
  filled: number | null;
  char: string | null;
  answer: string | null;
  impossible: boolean;
}

export type ReorganizeStep = Step<ReorganizeData>;

/**
 * If any character occurs more than ⌈n/2⌉ times, no arrangement avoids adjacency. Else,
 * placing the most frequent characters first into even indices (then odd) spreads
 * duplicates at least two apart. `line` indexes CODE.
 */
export function reorganizeSteps(s: string): ReorganizeStep[] {
  const steps: ReorganizeStep[] = [];
  const count = new Map<string, number>();
  for (const c of s) count.set(c, (count.get(c) ?? 0) + 1);
  const max = Math.max(...count.values());
  const counts = [...count.entries()].sort((a, b) => b[1] - a[1]);
  const res: (string | null)[] = new Array(s.length).fill(null);

  const snap = (o: Partial<ReorganizeData>): ReorganizeData => ({ s, counts: [...counts], res: [...res], filled: null, char: null, answer: null, impossible: false, ...o });
  const push = (line: number, explanation: string, data: ReorganizeData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (max > (s.length + 1) >> 1) {
    push(3, `Most frequent char appears ${max}× > ⌈${s.length}/2⌉ — impossible.`, snap({ impossible: true, answer: "" }));
    return steps;
  }

  push(4, "Sort by frequency; fill even indices first, then odd.", snap({}));

  let i = 0;
  for (const [ch, c] of counts) {
    for (let k = 0; k < c; k++) {
      res[i] = ch;
      push(9, `Place '${ch}' at index ${i}.`, snap({ filled: i, char: ch }));
      i += 2;
      if (i >= s.length) i = 1;
    }
  }

  push(14, `Result: "${res.join("")}".`, snap({ answer: res.join("") }));
  return steps;
}
