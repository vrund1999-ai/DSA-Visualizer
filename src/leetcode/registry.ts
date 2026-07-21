import type { AnyLeetCodeProblem, Difficulty } from "./types";
import { leetcodeProblems } from "./problems";
import { bulkProblems } from "./bulkProblems";

// Fail fast on duplicate slugs within the hand-built list (dev safety) — mirrors
// the algorithm registry. Bulk problems are already unique by slug (generated).
const bespokeSeen = new Set<string>();
for (const p of leetcodeProblems) {
  if (bespokeSeen.has(p.id)) {
    throw new Error(`Duplicate LeetCode problem id: ${p.id}`);
  }
  bespokeSeen.add(p.id);
}

// Merge bespoke + bulk. A hand-built problem always wins over a bulk placeholder
// with the same slug (e.g. "two-sum" exists in both), so bespoke comes first.
const ALL: AnyLeetCodeProblem[] = [];
const seen = new Set<string>();
for (const p of [...leetcodeProblems, ...bulkProblems]) {
  if (seen.has(p.id)) continue;
  seen.add(p.id);
  ALL.push(p);
}

const DIFFICULTY_ORDER: Record<Difficulty, number> = {
  easy: 0,
  medium: 1,
  hard: 2,
};

/** Highest interview frequency first; unknown frequency sinks to the bottom. */
const byFrequencyDesc = (a: AnyLeetCodeProblem, b: AnyLeetCodeProblem): number =>
  (b.frequency ?? -1) - (a.frequency ?? -1) || a.title.localeCompare(b.title);

const uniqueSorted = (values: string[]): string[] =>
  [...new Set(values)].sort((a, b) => a.localeCompare(b));

export const leetcode = {
  /** All problems, most-frequent first (the list page's default order). */
  all: (): AnyLeetCodeProblem[] => [...ALL].sort(byFrequencyDesc),
  byId: (id: string): AnyLeetCodeProblem | undefined =>
    ALL.find((p) => p.id === id),
  byDifficulty: (d: Difficulty): AnyLeetCodeProblem[] =>
    ALL.filter((p) => p.difficulty === d),
  byTopic: (topic: string): AnyLeetCodeProblem[] =>
    ALL.filter((p) => p.topics?.includes(topic)),
  byCompany: (company: string): AnyLeetCodeProblem[] =>
    ALL.filter((p) => p.companies?.includes(company)),
  /** Case-insensitive title search; empty query returns everything. */
  search: (query: string): AnyLeetCodeProblem[] => {
    const q = query.trim().toLowerCase();
    return q ? ALL.filter((p) => p.title.toLowerCase().includes(q)) : [...ALL];
  },
  /** Distinct topic tags across all problems, sorted — for filter facets. */
  topics: (): string[] => uniqueSorted(ALL.flatMap((p) => p.topics ?? [])),
  /** Distinct company tags across all problems, sorted — for filter facets. */
  companies: (): string[] => uniqueSorted(ALL.flatMap((p) => p.companies ?? [])),
  count: (): number => ALL.length,
  difficultyOrder: DIFFICULTY_ORDER,
};
