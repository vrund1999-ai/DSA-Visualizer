import type { Step } from "@/core/types";

export interface EffortData {
  grid: number[][];
  eff: number[][];
  settled: boolean[][];
  cur: [number, number] | null;
  relaxed: [number, number] | null;
  answer: number | null;
}

export type EffortStep = Step<EffortData>;

/** Min-heap keyed on effort (first tuple element). */
class MinHeap {
  private a: [number, number, number][] = [];
  constructor(init: [number, number, number][]) {
    for (const v of init) this.push(v);
  }
  size() {
    return this.a.length;
  }
  push(v: [number, number, number]) {
    const a = this.a;
    a.push(v);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p][0] <= a[i][0]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop(): [number, number, number] {
    const a = this.a;
    const top = a[0];
    const last = a.pop()!;
    if (a.length) {
      a[0] = last;
      let i = 0;
      for (;;) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let s = i;
        if (l < a.length && a[l][0] < a[s][0]) s = l;
        if (r < a.length && a[r][0] < a[s][0]) s = r;
        if (s === i) break;
        [a[s], a[i]] = [a[i], a[s]];
        i = s;
      }
    }
    return top;
  }
}

/**
 * The cost of a path is its single worst step (largest neighbor height difference), so this is a
 * minimax shortest path: Dijkstra where a candidate's effort is max(effort-so-far, |Δheight|). The
 * heap always settles the least-effort cell first, guaranteeing its value is final. `line` indexes CODE.
 */
export function effortSteps(grid: number[][]): EffortStep[] {
  const steps: EffortStep[] = [];
  const R = grid.length;
  const C = grid[0].length;
  const eff = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  const settled = Array.from({ length: R }, () => new Array(C).fill(false));
  eff[0][0] = 0;

  const snap = (o: Partial<EffortData>): EffortData => ({
    grid,
    eff: eff.map((row) => [...row]),
    settled: settled.map((row) => [...row]),
    cur: null,
    relaxed: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<EffortData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const heap = new MinHeap([[0, 0, 0]]);
  push(4, "Dijkstra with minimax cost: a path's effort is its single largest height jump.");

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (heap.size()) {
    const [e, r, c] = heap.pop();
    if (r === R - 1 && c === C - 1) {
      push(7, `Reached the bottom-right with effort ${e}.`, { cur: [r, c], answer: e });
      return steps;
    }
    if (e > eff[r][c]) continue;
    settled[r][c] = true;
    push(6, `Settle (${r},${c}) at effort ${e}.`, { cur: [r, c] });
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= R || nc >= C) continue;
      const ne = Math.max(e, Math.abs(grid[nr][nc] - grid[r][c]));
      if (ne < eff[nr][nc]) {
        eff[nr][nc] = ne;
        heap.push([ne, nr, nc]);
        push(12, `Relax (${nr},${nc}): effort max(${e}, |${grid[nr][nc]}−${grid[r][c]}|) = ${ne}.`, { cur: [r, c], relaxed: [nr, nc] });
      }
    }
  }

  push(7, "No path found.", { answer: -1 });
  return steps;
}
