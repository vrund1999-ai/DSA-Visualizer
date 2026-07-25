import type { Step } from "@/core/types";

export interface UnhappyData {
  n: number;
  /** partner[i] = friend paired with i */
  partner: number[];
  /** friend currently evaluated */
  x: number | null;
  /** x's assigned partner */
  y: number | null;
  /** the friend u that makes x unhappy (with its partner v), if any */
  culprit: [number, number] | null;
  unhappySet: number[];
  count: number;
  answer: number | null;
}

export type UnhappyStep = Step<UnhappyData>;

/**
 * Friend x is unhappy if some friend u exists whom x prefers over its partner y, while u in turn
 * prefers x over u's own partner v — a mutual "we'd rather be paired" relationship. Precomputing
 * each friend's preference ranks makes every such check O(1). `line` indexes CODE.
 */
export function unhappySteps(n: number, preferences: number[][], pairs: number[][]): UnhappyStep[] {
  const steps: UnhappyStep[] = [];
  const rank = preferences.map((pref) => {
    const r: number[] = new Array(n).fill(0);
    pref.forEach((f, idx) => (r[f] = idx));
    return r;
  });
  const partner: number[] = new Array(n).fill(-1);
  for (const [a, b] of pairs) { partner[a] = b; partner[b] = a; }

  const unhappySet: number[] = [];
  let count = 0;

  const snap = (o: Partial<UnhappyData>): UnhappyData => ({ n, partner, x: null, y: null, culprit: null, unhappySet: [...unhappySet], count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<UnhappyData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Pair everyone up, then check each friend for a mutually-preferred alternative.");

  for (let x = 0; x < n; x++) {
    const y = partner[x];
    let flagged = false;
    for (const u of preferences[x]) {
      if (u === y) {
        push(10, `Friend ${x}: reached partner ${y} in its preference list → happy.`, { x, y });
        break;
      }
      const v = partner[u];
      if (rank[u][x] < rank[u][v]) {
        unhappySet.push(x);
        count++;
        flagged = true;
        push(13, `Friend ${x} prefers ${u} over ${y}, and ${u} prefers ${x} over ${v} → ${x} is unhappy.`, { x, y, culprit: [u, v] });
        break;
      }
    }
    if (!flagged) continue;
  }

  push(17, `Number of unhappy friends: ${count}.`, { answer: count });
  return steps;
}
