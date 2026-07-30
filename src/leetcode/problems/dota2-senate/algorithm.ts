import type { Step } from "@/core/types";

export interface SenateData {
  senate: string;
  /** banned original senator indices */
  banned: number[];
  /** current R queue (positions, mod n for display) */
  rQueue: number[];
  dQueue: number[];
  /** the two front senators dueling: [rPos, dPos] as original indices */
  duel: [number, number] | null;
  /** original index of the loser just banned */
  bannedNow: number | null;
  answer: string | null;
}

export type SenateStep = Step<SenateData>;

/**
 * A senator's best move is to ban the very next opposing senator in the round order. Modeling each party
 * as a queue of positions, the two fronts duel; the earlier one bans the other and re-enters a full lap
 * later (index + n). The party with survivors wins. `line` indexes CODE.
 */
export function senateSteps(senate: string): SenateStep[] {
  const steps: SenateStep[] = [];
  const n = senate.length;
  const R: number[] = [];
  const D: number[] = [];
  [...senate].forEach((c, i) => (c === "R" ? R : D).push(i));
  const banned: number[] = [];

  const snap = (o: Partial<SenateData>): SenateData => ({ senate, banned: [...banned], rQueue: R.map((x) => x % n), dQueue: D.map((x) => x % n), duel: null, bannedNow: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SenateData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, "Split senators into two queues of positions; the earlier front bans the other each round.");

  while (R.length && D.length) {
    const r = R.shift()!;
    const d = D.shift()!;
    if (r < d) {
      banned.push(d % n);
      R.push(r + n);
      push(7, `R@${r % n} acts first, banning D@${d % n}.`, { duel: [r % n, d % n], bannedNow: d % n });
    } else {
      banned.push(r % n);
      D.push(d + n);
      push(8, `D@${d % n} acts first, banning R@${r % n}.`, { duel: [r % n, d % n], bannedNow: r % n });
    }
  }

  const answer = R.length ? "Radiant" : "Dire";
  push(10, `${answer} wins — only that party has senators left.`, { answer });
  return steps;
}
