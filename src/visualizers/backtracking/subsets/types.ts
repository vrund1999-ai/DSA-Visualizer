import type { Step } from "@/core/types";

export interface SubsetsData {
  elements: number[];
  /** indices currently included in the partial subset. */
  includedIdx: number[];
  /** index currently being decided (or -1). */
  pointer: number;
  /** complete subsets emitted so far. */
  subsets: number[][];
}

export type SubsetsStep = Step<SubsetsData>;
