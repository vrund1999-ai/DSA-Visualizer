import type { Step } from "@/core/types";

export interface CoinsData {
  heap: (number | null)[];
  cur: number | null;
  /** net coins each processed node passes up (index -> excess) */
  balance: Record<number, number>;
  moves: number;
  answer: number | null;
}

export type CoinsStep = Step<CoinsData>;

/**
 * Along every edge, the number of moves equals the net coins that must cross it — the absolute excess of
 * the child subtree. A post-order DFS returns each subtree's surplus (its coins minus its size), and the
 * total moves accumulate the absolute flow over each edge. `line` indexes CODE.
 */
export function coinsSteps(heap: (number | null)[]): CoinsStep[] {
  const steps: CoinsStep[] = [];
  const balance: Record<number, number> = {};
  let moves = 0;

  const snap = (o: Partial<CoinsData>): CoinsData => ({ heap, cur: null, balance: { ...balance }, moves, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CoinsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const has = (i: number) => i < heap.length && heap[i] !== null;

  push(1, "Post-order DFS: each subtree returns its coin surplus; edges cost the absolute flow.");

  function dfs(i: number): number {
    if (!has(i)) return 0;
    const left = dfs(2 * i + 1);
    const right = dfs(2 * i + 2);
    moves += Math.abs(left) + Math.abs(right);
    const excess = (heap[i] as number) - 1 + left + right;
    balance[i] = excess;
    push(8, `Node ${heap[i]}: excess = ${heap[i]}−1 + ${left} + ${right} = ${excess}; moves so far ${moves}.`, { cur: i });
    return excess;
  }

  dfs(0);
  push(11, `Total moves to give every node one coin: ${moves}.`, { answer: moves });
  return steps;
}
