import type { AnyLeetCodeProblem, Difficulty } from "./types";
import { makePlaceholderProblem } from "./placeholder";
import { bloombergProblems } from "./data/bloomberg.generated";

/**
 * Shape of one bulk-imported problem row, emitted by
 * scripts/import-bloomberg.mjs into data/bloomberg.generated.ts. These carry
 * only list/tag metadata (no bespoke visual) and are rendered via the
 * PlaceholderRenderer until a real definition replaces them.
 */
export interface BulkProblemMeta {
  id: string;
  title: string;
  difficulty: Difficulty;
  url: string;
  topics: string[];
  frequency?: number;
  companies: string[];
}

/** Every bulk-imported (company-tagged) problem as a full LeetCodeProblem. */
export const bulkProblems: AnyLeetCodeProblem[] = bloombergProblems.map((m) =>
  makePlaceholderProblem(m),
);
