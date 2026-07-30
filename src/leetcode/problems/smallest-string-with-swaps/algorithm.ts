import type { Step } from "@/core/types";

export interface SwapsData {
  s: string;
  pairs: number[][];
  /** component root per index */
  root: number[];
  /** result string so far */
  res: string[];
  /** pair being unioned */
  pair: [number, number] | null;
  /** indices of the group being sorted */
  group: number[];
  answer: string | null;
}

export type SwapsStep = Step<SwapsData>;

/**
 * Swappable index pairs are edges; within a connected component any permutation of its characters is
 * reachable. So union the pairs, then in each component place the sorted characters at the sorted
 * positions for the lexicographically smallest result. `line` indexes CODE.
 */
export function swapsSteps(s: string, pairs: number[][]): SwapsStep[] {
  const steps: SwapsStep[] = [];
  const parent = [...s].map((_, i) => i);
  const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])));

  const roots = () => s.split("").map((_, i) => find(i));
  const snap = (o: Partial<SwapsData>): SwapsData => ({ s, pairs, root: roots(), res: [...res], pair: null, group: [], answer: null, ...o });
  let res = s.split("");
  const push = (line: number, explanation: string, o: Partial<SwapsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Union swappable index pairs into connected components.");

  for (const [a, b] of pairs) {
    parent[find(a)] = find(b);
    push(5, `Union indices ${a} and ${b}.`, { pair: [a, b] });
  }

  const groups = new Map<number, number[]>();
  for (let i = 0; i < s.length; i++) {
    const r = find(i);
    if (!groups.has(r)) groups.set(r, []);
    groups.get(r)!.push(i);
  }

  res = s.split("");
  for (const idx of groups.values()) {
    const chars = idx.map((i) => s[i]).sort();
    idx.forEach((i, k) => (res[i] = chars[k]));
    if (idx.length > 1) push(14, `Component {${idx.join(", ")}}: place sorted chars "${chars.join("")}".`, { group: [...idx] });
  }

  push(16, `Smallest string: "${res.join("")}".`, { answer: res.join("") });
  return steps;
}
