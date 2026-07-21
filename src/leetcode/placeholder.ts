import type { Step } from "@/core/types";
import type { Difficulty, LeetCodeProblem } from "./types";
import { PlaceholderRenderer } from "./PlaceholderRenderer";

/** The metadata a seed / bulk-imported problem needs; the rest is defaulted. */
export interface PlaceholderMeta {
  id: string;
  title: string;
  difficulty: Difficulty;
  url: string;
  /** LeetCode number, if known (bulk imports have none). */
  number?: number;
  /** One-line card summary; synthesized from topics when omitted. */
  summary?: string;
  /** Longer statement shown on the detail page; synthesized when omitted. */
  prompt?: string;
  topics?: string[];
  companies?: string[];
  frequency?: number;
}

/** What the PlaceholderRenderer draws (passed through the single step's data). */
export interface PlaceholderData {
  title: string;
  url: string;
  topics: string[];
  companies: string[];
  frequency?: number;
}

/**
 * Builds a fully-valid LeetCodeProblem backed by the PlaceholderRenderer, for
 * problems whose bespoke visual hasn't been built yet. It emits a single step
 * carrying the problem's key facts so the shared player has one frame to sit on.
 * Replace the call site with a real definition once the visual is built.
 */
export function makePlaceholderProblem(
  meta: PlaceholderMeta,
): LeetCodeProblem<unknown, PlaceholderData> {
  const topics = meta.topics ?? [];
  const companies = meta.companies ?? [];

  const summary =
    meta.summary ??
    (topics.length > 0
      ? `${topics.join(", ")} problem — visual coming soon.`
      : "Visual coming soon.");

  const prompt =
    meta.prompt ??
    `An interactive visualization for "${meta.title}" is on the way. ` +
      `Open it on LeetCode to read the full problem statement and try it yourself.`;

  const data: PlaceholderData = {
    title: meta.title,
    url: meta.url,
    topics,
    companies,
    frequency: meta.frequency,
  };

  const step: Step<PlaceholderData> = {
    id: 0,
    line: 0,
    explanation: "Visual coming soon.",
    data,
    highlights: [],
  };

  return {
    id: meta.id,
    number: meta.number,
    title: meta.title,
    category: "leetcode",
    difficulty: meta.difficulty,
    url: meta.url,
    summary,
    prompt,
    topics,
    tags: topics,
    companies,
    frequency: meta.frequency,
    code: ["// Solution coming soon"],
    language: "typescript",
    complexity: { timeAverage: "—", timeWorst: "—", space: "—" },
    inputSchema: [],
    makeDefaultInput: () => data,
    defaultOptions: {},
    buildSteps: () => [step],
    Renderer: PlaceholderRenderer,
  };
}
