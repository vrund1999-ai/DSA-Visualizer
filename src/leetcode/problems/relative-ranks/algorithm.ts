import type { Step } from "@/core/types";

export interface RanksData {
  score: number[];
  /** indices sorted by descending score */
  order: number[];
  /** rank being assigned (position in order) */
  rank: number | null;
  /** original index receiving that rank */
  assignIdx: number | null;
  ans: (string | null)[];
  answer: string[] | null;
}

export type RanksStep = Step<RanksData>;

const MEDALS = ["Gold Medal", "Silver Medal", "Bronze Medal"];

/**
 * Ranks follow descending score, so we sort the athletes' indices by score and hand out placements in
 * that order: the top three get medals, everyone else their numeric position. Writing back to each
 * original index restores the input order. `line` indexes CODE.
 */
export function ranksSteps(score: number[]): RanksStep[] {
  const steps: RanksStep[] = [];
  const order = score.map((_, i) => i).sort((a, b) => score[b] - score[a]);
  const ans: (string | null)[] = new Array(score.length).fill(null);

  const snap = (o: Partial<RanksData>): RanksData => ({ score, order, rank: null, assignIdx: null, ans: [...ans], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RanksData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Sort athletes by score (desc): [${order.map((i) => score[i]).join(", ")}].`);

  order.forEach((idx, rank) => {
    const label = MEDALS[rank] ?? String(rank + 1);
    ans[idx] = label;
    push(7, `Rank ${rank + 1}: score ${score[idx]} → "${label}".`, { rank, assignIdx: idx });
  });

  push(9, `Ranks assigned.`, { answer: ans.map((a) => a!) });
  return steps;
}
