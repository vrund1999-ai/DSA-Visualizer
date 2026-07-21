import type { Step } from "@/core/types";

export interface TwoSumInput {
  nums: number[];
  target: number;
}

/** One entry of the running hash map: value → the index it was stored at. */
export interface MapEntry {
  value: number;
  index: number;
}

/** Snapshot the Two Sum renderer draws for the current step. */
export interface TwoSumData {
  nums: number[];
  target: number;
  /** Hash map contents so far, in insertion order. */
  map: MapEntry[];
  /** Index currently being examined (null before the scan starts / after it ends). */
  current: number | null;
  /** Complement we're looking for this step: target − nums[current]. */
  complement: number | null;
  /** The stored index of the map entry to emphasize (a match, or a just-added entry). */
  activeMapIndex: number | null;
  /** Final answer once found: the pair of array indices. */
  found: [number, number] | null;
  status: "searching" | "found" | "none";
}

/** No knobs. */
export type TwoSumOptions = Record<string, never>;

export type TwoSumStep = Step<TwoSumData>;
