import type { Step } from "@/core/types";

/** The array snapshot the bar renderer needs. */
export interface SortData {
  values: number[];
}

export type SortInput = number[];

export interface SortOptions {
  order: "asc" | "desc";
}

export type SortStep = Step<SortData>;
