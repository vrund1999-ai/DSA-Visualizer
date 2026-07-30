import type { Step } from "@/core/types";

export type LeaderboardOp =
  | { type: "add"; player: number; score: number }
  | { type: "top"; k: number }
  | { type: "reset"; player: number };

export interface LeaderboardData {
  ops: string[];
  /** current op index */
  opIndex: number;
  /** player rows sorted by score desc for display */
  rows: { player: number; score: number }[];
  /** players counted in the current top(K) sum */
  counted: number[];
  result: number | null;
  answers: (number | null)[];
}

export type LeaderboardStep = Step<LeaderboardData>;

const label = (op: LeaderboardOp): string =>
  op.type === "add" ? `addScore(${op.player}, ${op.score})` : op.type === "top" ? `top(${op.k})` : `reset(${op.player})`;

/**
 * A leaderboard keyed by player id. addScore accumulates, reset zeroes a player, and top(K) sums the K
 * highest current scores. Each op emits a frame; `line` indexes CODE.
 */
export function leaderboardSteps(ops: LeaderboardOp[]): LeaderboardStep[] {
  const steps: LeaderboardStep[] = [];
  const scores = new Map<number, number>();
  const opLabels = ops.map(label);
  const answers: (number | null)[] = ops.map(() => null);

  const rowsOf = () =>
    [...scores.entries()].map(([player, score]) => ({ player, score })).sort((a, b) => b.score - a.score || a.player - b.player);
  const snap = (o: Partial<LeaderboardData>): LeaderboardData => ({
    ops: opLabels,
    opIndex: -1,
    rows: rowsOf(),
    counted: [],
    result: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<LeaderboardData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(0, `Empty leaderboard; run ${ops.length} operation(s).`);

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (op.type === "add") {
      const next = (scores.get(op.player) ?? 0) + op.score;
      scores.set(op.player, next);
      push(4, `addScore(${op.player}, ${op.score}) → player ${op.player} now ${next}.`, { opIndex: i });
    } else if (op.type === "reset") {
      scores.set(op.player, 0);
      push(13, `reset(${op.player}) → player ${op.player} back to 0.`, { opIndex: i });
    } else {
      const sorted = [...scores.entries()].sort((a, b) => b[1] - a[1] || a[0] - b[0]);
      const topK = sorted.slice(0, op.k);
      const result = topK.reduce((s, [, v]) => s + v, 0);
      answers[i] = result;
      push(10, `top(${op.k}) = sum of ${op.k} highest score(s) = ${result}.`, { opIndex: i, counted: topK.map(([p]) => p), result });
    }
  }

  return steps;
}
