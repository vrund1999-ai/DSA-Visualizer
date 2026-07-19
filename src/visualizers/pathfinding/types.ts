import type { Step } from "@/core/types";

/** A grid coordinate as [row, col]. */
export type Cell = [number, number];

export interface GridData {
  rows: number;
  cols: number;
  /** walls[r][c] === true means the cell is blocked. */
  walls: boolean[][];
  start: Cell;
  end: Cell;
}

export type GridInput = GridData;

/** No knobs yet. */
export type GridOptions = Record<string, never>;

export type GridStep = Step<GridData>;
