import type { Step } from "@/core/types";
import type { Difficulty, LeetCodeProblem } from "./types";
import { PlaceholderRenderer } from "./PlaceholderRenderer";

/** The metadata a seed problem needs; everything else is filled with defaults. */
export interface PlaceholderMeta {
  id: string;
  number: number;
  title: string;
  difficulty: Difficulty;
  url: string;
  /** One-line card summary. */
  summary: string;
  /** Longer problem statement shown on the detail page. */
  prompt: string;
  topics?: string[];
}

/**
 * Builds a fully-valid LeetCodeProblem backed by the PlaceholderRenderer.
 * It emits a single no-op step so the shared player has one frame to sit on.
 * Replace the call site with a real definition (own algorithm/code/Renderer)
 * once the problem's visual is built.
 */
export function makePlaceholderProblem(meta: PlaceholderMeta): LeetCodeProblem {
  const step: Step<unknown> = {
    id: 0,
    line: 0,
    explanation: "Visual coming soon.",
    data: null,
    highlights: [],
  };

  return {
    ...meta,
    category: "leetcode",
    tags: meta.topics,
    code: ["// Solution coming soon"],
    language: "typescript",
    complexity: { timeAverage: "—", timeWorst: "—", space: "—" },
    inputSchema: [],
    makeDefaultInput: () => null,
    defaultOptions: {},
    buildSteps: () => [step],
    Renderer: PlaceholderRenderer,
  };
}
