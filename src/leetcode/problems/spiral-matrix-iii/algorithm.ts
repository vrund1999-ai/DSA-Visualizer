import type { Step } from "@/core/types";

export interface SpiralData {
  rows: number;
  cols: number;
  /** visit order stamped into each in-bounds cell, -1 if unvisited */
  order: number[][];
  cur: [number, number] | null;
  /** true when the walker is currently outside the grid */
  outside: boolean;
  count: number;
  answer: number[][] | null;
}

export type SpiralStep = Step<SpiralData>;

/**
 * Walk clockwise in legs that grow every two turns (right 1, down 1, left 2, up 2, right 3, …). The
 * pattern always covers the whole grid; cells stepped onto while outside the bounds are simply skipped
 * from the result. `line` indexes CODE.
 */
export function spiralSteps(rows: number, cols: number, r0: number, c0: number): SpiralStep[] {
  const steps: SpiralStep[] = [];
  const order = Array.from({ length: rows }, () => new Array(cols).fill(-1));
  const res: number[][] = [];
  let count = 0;

  const snap = (o: Partial<SpiralData>): SpiralData => ({ rows, cols, order: order.map((row) => [...row]), cur: null, outside: false, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SpiralData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  let r = r0;
  let c = c0;
  order[r][c] = count++;
  res.push([r, c]);
  push(1, `Start at (${r}, ${c}).`, { cur: [r, c] });

  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];
  const names = ["right", "down", "left", "up"];
  let d = 0;
  let len = 1;

  const total = rows * cols;
  outer: while (res.length < total) {
    for (let twice = 0; twice < 2; twice++) {
      for (let i = 0; i < len; i++) {
        r += dr[d];
        c += dc[d];
        const inside = r >= 0 && r < rows && c >= 0 && c < cols;
        if (inside) {
          order[r][c] = count++;
          res.push([r, c]);
          push(9, `Step ${names[d]} into (${r}, ${c}) — record #${count}.`, { cur: [r, c] });
          if (res.length === total) break outer;
        } else {
          push(8, `Step ${names[d]} to (${r}, ${c}) — outside the grid, skip.`, { cur: [r, c], outside: true });
        }
      }
      d = (d + 1) % 4;
    }
    len++;
  }

  push(15, `Visited all ${rows * cols} cells in spiral order.`, { answer: res });
  return steps;
}
