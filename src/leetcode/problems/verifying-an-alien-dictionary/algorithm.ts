import type { Step } from "@/core/types";

export interface AlienData {
  words: string[];
  order: string;
  /** the adjacent pair being compared */
  pair: [number, number] | null;
  /** char index under comparison within the pair */
  charIdx: number | null;
  verdict: "ok" | "bad" | null;
  answer: boolean | null;
}

export type AlienStep = Step<AlienData>;

/**
 * Sorted order only requires each word to be ≤ the next. Comparing an adjacent pair, the first differing
 * character decides it by the alien alphabet's rank; if no difference appears the shorter word must come
 * first. Any violation makes the list unsorted. `line` indexes CODE.
 */
export function alienSteps(words: string[], order: string): AlienStep[] {
  const steps: AlienStep[] = [];
  const rank: Record<string, number> = {};
  [...order].forEach((ch, i) => (rank[ch] = i));

  const snap = (o: Partial<AlienData>): AlienData => ({ words, order, pair: null, charIdx: null, verdict: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<AlienData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Map each alien letter to its rank, then check every adjacent pair is in order.");

  for (let w = 0; w + 1 < words.length; w++) {
    const a = words[w];
    const b = words[w + 1];
    let i = 0;
    let decided = false;
    while (i < a.length && i < b.length) {
      if (a[i] !== b[i]) {
        if (rank[a[i]] > rank[b[i]]) {
          push(8, `"${a}" vs "${b}": '${a[i]}' (rank ${rank[a[i]]}) > '${b[i]}' (rank ${rank[b[i]]}) → out of order.`, { pair: [w, w + 1], charIdx: i, verdict: "bad", answer: false });
          return steps;
        }
        push(9, `"${a}" vs "${b}": '${a[i]}' < '${b[i]}' by rank → this pair is fine.`, { pair: [w, w + 1], charIdx: i, verdict: "ok" });
        decided = true;
        break;
      }
      i++;
    }
    if (!decided) {
      if (i === b.length && a.length > b.length) {
        push(14, `"${a}" is longer but shares "${b}" as a prefix → out of order.`, { pair: [w, w + 1], charIdx: i - 1, verdict: "bad", answer: false });
        return steps;
      }
      push(13, `"${a}" is a prefix of (or equal to) "${b}" → fine.`, { pair: [w, w + 1], verdict: "ok" });
    }
  }

  push(16, "Every adjacent pair is ordered — the list is sorted.", { answer: true });
  return steps;
}
