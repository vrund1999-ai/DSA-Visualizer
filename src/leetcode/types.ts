import type { VisualizerDefinition } from "@/core/types";

/* ------------------------------------------------------------------ *
 * LeetCode problems
 *
 * A LeetCode problem is a regular VisualizerDefinition (so it reuses the
 * whole step-player: buildSteps + Renderer + code panel + narration) plus
 * problem-specific metadata that the LeetCode list & detail pages render.
 *
 * These live in their own registry (src/leetcode/registry.ts) and route
 * tree (/leetcode, /leetcode/:id) — they are NOT part of the algorithm
 * catalog. Every problem sets `category: "leetcode"`.
 * ------------------------------------------------------------------ */

export type Difficulty = "easy" | "medium" | "hard";

export interface LeetCodeProblem<
  TInput = unknown,
  TData = unknown,
  TOptions = unknown,
> extends VisualizerDefinition<TInput, TData, TOptions> {
  /** LeetCode problem number, e.g. 1 for "Two Sum". */
  number: number;
  difficulty: Difficulty;
  /** Canonical link to the problem on leetcode.com. */
  url: string;
  /** Short problem statement shown on the detail page. */
  prompt: string;
  /** Topic tags, e.g. ["Array", "Hash Table"]. */
  topics?: string[];
}

/** Convenience: erase generics for storage in the registry list. */
export type AnyLeetCodeProblem = LeetCodeProblem<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
>;
