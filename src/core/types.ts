import type { ComponentType } from "react";

/* ------------------------------------------------------------------ *
 * Categories
 * ------------------------------------------------------------------ */

export type CategoryId =
  | "sorting"
  | "pathfinding"
  | "trees"
  | "linear"
  | "searching"
  | "dp"
  | "backtracking"
  | "strings"
  // LeetCode problems reuse the VisualizerDefinition contract but live in their
  // own registry/route tree; this id keeps them off the main algorithm catalog.
  | "leetcode";

export interface CategoryMeta {
  id: CategoryId;
  label: string;
  description: string;
  /** lucide-react icon name, resolved by the catalog. */
  icon?: string;
  order: number;
}

/* ------------------------------------------------------------------ *
 * Highlights / annotations
 *
 * Semantic roles a highlighted element can play. Renderers map these
 * to colors (see the `role.*` colors in tailwind.config.ts). Keeping
 * them category-agnostic lets the legend + panels stay shared.
 * ------------------------------------------------------------------ */

export type HighlightRole =
  | "current" // pointer / cursor
  | "compared" // being compared this step
  | "swapped" // just swapped / written
  | "visited" // already processed
  | "active" // on the frontier / working set
  | "sorted" // finalized / locked
  | "path" // part of the result path
  | "pivot" // pivot / special node
  | "wall" // obstacle (grid)
  | "target"; // start / end / goal

/** A highlight keyed by an opaque element id (index, node id, "r,c", …). */
export interface Highlight {
  ref: string | number;
  role: HighlightRole;
  /** optional label drawn on/near the element, e.g. a distance or count. */
  badge?: string;
}

/* ------------------------------------------------------------------ *
 * Steps
 * ------------------------------------------------------------------ */

/**
 * Fields EVERY step has, regardless of category. Shared infra
 * (usePlayer, CodePanel, StepNarration) is typed against BaseStep and
 * touches nothing else.
 */
export interface BaseStep {
  /** stable id, usually the frame index. */
  id: number;
  /** 0-based line index into VisualizerDefinition.code that is "executing". */
  line: number;
  /** plain-English narration of what happened this step. */
  explanation: string;
  /** optional running counters shown in the stats bar. */
  metrics?: Record<string, number>;
}

/**
 * A concrete step = BaseStep + the category's render payload.
 * TData is the full snapshot (or diff) the renderer needs.
 */
export interface Step<TData> extends BaseStep {
  data: TData;
  highlights: Highlight[];
}

/* ------------------------------------------------------------------ *
 * Complexity
 * ------------------------------------------------------------------ */

export interface Complexity {
  timeBest?: string;
  timeAverage: string;
  timeWorst: string;
  space: string;
  stable?: boolean;
  inPlace?: boolean;
}

/* ------------------------------------------------------------------ *
 * Input schema (declarative — drives InputControls generically)
 * ------------------------------------------------------------------ */

export type InputControl =
  | {
      kind: "array";
      label: string;
      min: number;
      max: number;
      defaultSize: number;
      maxSize: number;
    }
  | { kind: "grid"; label: string; rows: number; cols: number }
  | { kind: "number"; label: string; min: number; max: number; default: number }
  | { kind: "text"; label: string; default: string }
  | { kind: "custom" };

/* ------------------------------------------------------------------ *
 * Renderer + Definition
 * ------------------------------------------------------------------ */

export interface RendererProps<TData> {
  step: Step<TData>;
  frameIndex: number;
  frameCount: number;
}

/**
 * The registry entry. One per algorithm.
 *
 *   TInput   = shape produced by the input controls / passed to buildSteps
 *   TData    = renderer payload
 *   TOptions = algorithm knobs (e.g. { order: "asc" })
 */
export interface VisualizerDefinition<
  TInput = unknown,
  TData = unknown,
  TOptions = unknown,
> {
  /** URL slug, unique across the whole app, e.g. "bubble-sort". */
  id: string;
  title: string;
  category: CategoryId;
  summary: string;
  tags?: string[];

  /** source code lines the CodePanel renders & the generator's `line` indexes into. */
  code: string[];
  language: string;
  complexity: Complexity;

  /** declarative input controls; the page renders these generically. */
  inputSchema: InputControl[];
  /** produce a fresh default/random input. */
  makeDefaultInput: () => TInput;
  /** knobs passed to the algorithm. */
  defaultOptions: TOptions;

  /** THE algorithm: pure. */
  buildSteps: (input: TInput, options: TOptions) => Step<TData>[];

  /** THE renderer: pure function of the current step. */
  Renderer: ComponentType<RendererProps<TData>>;
}

/** Convenience: erase generics for storage in the registry map. */
export type AnyVisualizerDefinition = VisualizerDefinition<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
>;
