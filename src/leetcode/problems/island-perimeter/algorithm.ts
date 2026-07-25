import type { Step } from "@/core/types";

export interface PerimeterData {
  grid: number[][];
  cur: [number, number] | null;
  /** contribution this cell added */
  contribution: number | null;
  perimeter: number;
  answer: number | null;
}

export type PerimeterStep = Step<PerimeterData>;

/**
 * Each land cell adds 4 to the perimeter, but every shared edge with a land neighbour
 * above or to the left removes 2 (one from each cell). Scanning once and only checking
 * those two neighbours counts each shared edge exactly once. `line` indexes CODE.
 */
export function perimeterSteps(grid: number[][]): PerimeterStep[] {
  const steps: PerimeterStep[] = [];
  const rows = grid.length;
  const cols = grid[0].length;
  let p = 0;

  const snap = (o: Partial<PerimeterData>): PerimeterData => ({ grid: grid.map((r) => [...r]), cur: null, contribution: null, perimeter: p, answer: null, ...o });
  const push = (line: number, explanation: string, data: PerimeterData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Each land cell adds 4; shared edges (up/left) subtract 2.", snap({}));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        let add = 4;
        if (r > 0 && grid[r - 1][c]) add -= 2;
        if (c > 0 && grid[r][c - 1]) add -= 2;
        p += add;
        push(7, `(${r}, ${c}) land: +4${add < 4 ? `, −${4 - add} shared` : ""} → perimeter ${p}.`, snap({ cur: [r, c], contribution: add }));
      }
    }
  }

  push(11, `Total perimeter: ${p}.`, snap({ answer: p }));
  return steps;
}
