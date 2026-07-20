import type { Step } from "@/core/types";

/** A DP table snapshot. `null` cells are not yet computed. */
export interface TableData {
  rows: number;
  cols: number;
  cells: (number | null)[][];
  /** optional per-row labels (length === rows). */
  rowLabels?: string[];
  /** optional per-column labels (length === cols). */
  colLabels?: string[];
}

export type TableStep = Step<TableData>;

/** Highlight ref for a table cell. */
export const cellRef = (r: number, c: number) => `${r},${c}`;
