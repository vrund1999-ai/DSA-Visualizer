import type { Step } from "@/core/types";

export type HashOp =
  | { op: "insert"; value: number }
  | { op: "search"; value: number };
export type HashInput = HashOp[];

export interface HashData {
  /** number of buckets. */
  size: number;
  /** buckets[i] is the collision chain for slot i. */
  buckets: number[][];
}

export type HashOptions = Record<string, never>;
export type HashStep = Step<HashData>;

/** Highlight ref for a whole bucket row. */
export const rowRef = (i: number) => `row:${i}`;
/** Highlight ref for a specific cell within a bucket chain. */
export const cellRef = (i: number, j: number) => `${i},${j}`;
