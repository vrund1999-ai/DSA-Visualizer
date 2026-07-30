import type { Step } from "@/core/types";

export interface DungeonData {
  dungeon: number[][];
  /** min HP needed on entering each cell; null = not yet computed */
  dp: (number | null)[][];
  cur: [number, number] | null;
  /** the neighbor chosen (min of right/down) */
  chosen: [number, number] | null;
  answer: number | null;
}

export type DungeonStep = Step<DungeonData>;

/**
 * Health must stay ≥ 1 everywhere, so the requirement propagates backward from the princess: entering a
 * cell you need enough to survive it and still meet the cheaper of the two forward paths. dp[i][j] =
 * max(1, min(right, down) − dungeon[i][j]). `line` indexes CODE.
 */
export function dungeonSteps(dungeon: number[][]): DungeonStep[] {
  const steps: DungeonStep[] = [];
  const R = dungeon.length;
  const C = dungeon[0].length;
  const dp: (number | null)[][] = Array.from({ length: R }, () => new Array(C).fill(null));
  // sentinel just past the goal
  const val = (i: number, j: number) => {
    if (i === R && j === C - 1) return 1;
    if (i === R - 1 && j === C) return 1;
    if (i >= R || j >= C) return Infinity;
    return dp[i][j] ?? Infinity;
  };

  const snap = (o: Partial<DungeonData>): DungeonData => ({ dungeon, dp: dp.map((r) => [...r]), cur: null, chosen: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DungeonData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Fill from the bottom-right: exiting needs 1 HP.");

  for (let i = R - 1; i >= 0; i--) {
    for (let j = C - 1; j >= 0; j--) {
      const right = val(i, j + 1);
      const down = val(i + 1, j);
      const chosen: [number, number] = right <= down ? [i, j + 1] : [i + 1, j];
      const need = Math.min(right, down) - dungeon[i][j];
      dp[i][j] = Math.max(1, need);
      push(8, `Cell (${i},${j}): need max(1, ${Math.min(right, down)} − ${dungeon[i][j]}) = ${dp[i][j]} HP.`, { cur: [i, j], chosen });
    }
  }

  push(10, `Minimum starting health: ${dp[0][0]}.`, { answer: dp[0][0] });
  return steps;
}
