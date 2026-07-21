import type { AnyLeetCodeProblem, Difficulty } from "./types";
import { leetcodeProblems } from "./problems";

const ALL: AnyLeetCodeProblem[] = [...leetcodeProblems];

// Fail fast on duplicate slugs (dev safety) — mirrors the algorithm registry.
const seen = new Set<string>();
for (const p of ALL) {
  if (seen.has(p.id)) throw new Error(`Duplicate LeetCode problem id: ${p.id}`);
  seen.add(p.id);
}

/** Sort order for the list page: Easy → Medium → Hard, then by number. */
const DIFFICULTY_ORDER: Record<Difficulty, number> = {
  easy: 0,
  medium: 1,
  hard: 2,
};

export const leetcode = {
  all: (): AnyLeetCodeProblem[] =>
    [...ALL].sort(
      (a, b) =>
        DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty] ||
        a.number - b.number,
    ),
  byId: (id: string): AnyLeetCodeProblem | undefined =>
    ALL.find((p) => p.id === id),
  byDifficulty: (d: Difficulty): AnyLeetCodeProblem[] =>
    ALL.filter((p) => p.difficulty === d),
};
