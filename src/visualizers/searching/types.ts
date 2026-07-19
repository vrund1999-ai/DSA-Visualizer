import type { Step } from "@/core/types";

/** The snapshot the cell-row renderer needs. */
export interface SearchData {
  values: number[];
  target: number;
  /** index the target was found at, once known. */
  foundIndex: number | null;
}

export interface SearchInput {
  values: number[];
  target: number;
}

/** No knobs yet. */
export type SearchOptions = Record<string, never>;

export type SearchStep = Step<SearchData>;
