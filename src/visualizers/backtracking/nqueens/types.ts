import type { Step } from "@/core/types";

export interface NQueensData {
  n: number;
  /** queens[r] = column of the queen placed in row r (length = rows filled). */
  queens: number[];
}

export type NQueensStep = Step<NQueensData>;

/** Highlight ref for a board cell. */
export const cellRef = (r: number, c: number) => `${r},${c}`;
