import type { Step } from "@/core/types";

export interface TileData {
  /** remaining count per distinct letter, in fixed letter order */
  letters: string[];
  counts: number[];
  /** the sequence currently built along this DFS path */
  current: string;
  /** letter index just chosen this step, if any */
  pick: number | null;
  total: number;
  answer: number | null;
}

export type TileStep = Step<TileData>;

/**
 * Every distinct non-empty arrangement is counted by a DFS that, at each position, tries each
 * still-available letter: choosing it forms one new sequence (+1) and recursion extends it.
 * Working from per-letter counts (not positions) avoids counting duplicate tiles twice.
 * `line` indexes CODE.
 */
export function tileSteps(tiles: string): TileStep[] {
  const steps: TileStep[] = [];
  const order = [...new Set(tiles.split(""))].sort();
  const counts = order.map((l) => tiles.split("").filter((c) => c === l).length);
  let total = 0;

  const snap = (current: string, o: Partial<TileData>): TileData => ({ letters: order, counts: [...counts], current, pick: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, current: string, o: Partial<TileData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(current, o), highlights: [] });
  };

  push(1, `Tally tiles "${tiles}" and DFS over remaining letter counts.`, "");

  const dfs = (current: string): number => {
    let localAdded = 0;
    for (let i = 0; i < order.length; i++) {
      if (counts[i] === 0) continue;
      const seq = current + order[i];
      total++;
      localAdded++;
      counts[i]--;
      push(6, `Use '${order[i]}' → sequence "${seq}" (count now ${total}).`, seq, { pick: i });
      localAdded += dfs(seq);
      counts[i]++;
      push(9, `Backtrack from "${seq}"; restore '${order[i]}'.`, current, { pick: i });
    }
    return localAdded;
  };

  const result = dfs("");
  push(13, `Total distinct non-empty sequences: ${result}.`, "", { answer: result });
  return steps;
}
