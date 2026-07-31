import type { Step } from "@/core/types";

export interface DivisorGameData {
  n: number;
  dp: boolean[];
  /** the value i currently decided */
  active: number | null;
  /** the winning move x found, if any */
  move: number | null;
  answer: boolean | null;
}

export type DivisorGameStep = Step<DivisorGameData>;

/**
 * Divisor Game: dp[i] is true if the player to move with the number i can win. From i you may subtract any
 * proper divisor x; you win if some move leaves the opponent in a losing state (!dp[i−x]). `line` indexes
 * CODE.
 */
export function divisorGameSteps(n: number): DivisorGameStep[] {
  const steps: DivisorGameStep[] = [];
  const dp = new Array(n + 1).fill(false);

  const snap = (o: Partial<DivisorGameData>): DivisorGameData => ({
    n,
    dp: [...dp],
    active: null,
    move: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<DivisorGameData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `dp[1] = false (a player facing 1 can't move and loses).`);

  for (let i = 2; i <= n; i++) {
    let winMove: number | null = null;
    for (let x = 1; x < i; x++) {
      if (i % x === 0 && !dp[i - x]) {
        dp[i] = true;
        winMove = x;
        break;
      }
    }
    push(dp[i] ? 6 : 3, dp[i] ? `dp[${i}] = true: subtract ${winMove} → opponent faces losing ${i - winMove!}.` : `dp[${i}] = false: every move hands the opponent a win.`, {
      active: i,
      move: winMove,
    });
  }

  push(11, `Alice ${dp[n] ? "wins" : "loses"} starting from ${n}.`, { answer: dp[n] });
  return steps;
}
