import type { Step } from "@/core/types";

export interface MinAreaData {
  grid: number[][];
  cur: [number, number] | null;
  minR: number;
  maxR: number;
  minC: number;
  maxC: number;
  answer: number | null;
}

export type MinAreaStep = Step<MinAreaData>;

/**
 * Any rectangle covering all 1s must reach from the topmost to bottommost row and leftmost to rightmost
 * column that contain a 1. A single scan tracks those four extremes; their span is the minimum area.
 * `line` indexes CODE.
 */
export function minAreaSteps(grid: number[][]): MinAreaStep[] {
  const steps: MinAreaStep[] = [];
  const R = grid.length;
  const C = grid[0].length;
  let minR = Infinity;
  let maxR = -1;
  let minC = Infinity;
  let maxC = -1;

  const snap = (o: Partial<MinAreaData>): MinAreaData => ({ grid, cur: null, minR, maxR, minC, maxC, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MinAreaData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Scan for the extreme rows and columns holding a 1.");

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 1) {
        minR = Math.min(minR, r);
        maxR = Math.max(maxR, r);
        minC = Math.min(minC, c);
        maxC = Math.max(maxC, c);
        push(9, `1 at (${r},${c}): box rows [${minR},${maxR}], cols [${minC},${maxC}].`, { cur: [r, c] });
      }
    }
  }

  const area = (maxR - minR + 1) * (maxC - minC + 1);
  push(11, `Bounding box is ${maxR - minR + 1}×${maxC - minC + 1} = ${area}.`, { answer: area });
  return steps;
}
