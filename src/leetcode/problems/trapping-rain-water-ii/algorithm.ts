import type { Step } from "@/core/types";

export interface TrapData {
  grid: number[][];
  seen: boolean[][];
  /** water added per cell, for shading */
  fill: number[][];
  popped: [number, number] | null;
  filled: [number, number] | null;
  water: number;
  answer: number | null;
}

export type TrapStep = Step<TrapData>;

/** Simple binary min-heap keyed on the first tuple element (height). */
class MinHeap {
  private a: [number, number, number][] = [];
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
 * Water pools inward from the lowest surrounding wall. A min-heap always yields the shortest boundary
 * cell; whatever lies beyond it can hold water up to that wall's height. Each interior cell joins the
 * new boundary at the higher of its own height or the wall it was reached through. `line` indexes CODE.
 */
export function trapSteps(grid: number[][]): TrapStep[] {
  const steps: TrapStep[] = [];
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const fill = Array.from({ length: rows }, () => new Array(cols).fill(0));
  let water = 0;

  const snap = (o: Partial<TrapData>): TrapData => ({
    grid,
    seen: seen.map((r) => [...r]),
    fill: fill.map((r) => [...r]),
    popped: null,
    filled: null,
    water,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<TrapData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (rows < 3 || cols < 3) {
    push(14, "Grid too small to trap any water → 0.", { answer: 0 });
    return steps;
  }

  const heap = new MinHeap();
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 || c === 0 || r === rows - 1 || c === cols - 1) {
        seen[r][c] = true;
        heap.push([grid[r][c], r, c]);
      }
    }
  }
  push(3, "Seed the min-heap with every border cell — these are the outer walls.");

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (heap.size()) {
    const [h, r, c] = heap.pop();
    push(6, `Pop lowest wall: height ${h} at (${r},${c}).`, { popped: [r, c] });
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || seen[nr][nc]) continue;
      const add = Math.max(0, h - grid[nr][nc]);
      water += add;
      fill[nr][nc] = add;
      seen[nr][nc] = true;
      heap.push([Math.max(h, grid[nr][nc]), nr, nc]);
      push(
        9,
        add > 0
          ? `(${nr},${nc}) height ${grid[nr][nc]} sits below wall ${h}: traps ${add} (total ${water}).`
          : `(${nr},${nc}) height ${grid[nr][nc]} ≥ wall ${h}: no water, becomes new wall.`,
        { popped: [r, c], filled: [nr, nc] },
      );
    }
  }

  push(14, `Total trapped water: ${water}.`, { answer: water });
  return steps;
}
