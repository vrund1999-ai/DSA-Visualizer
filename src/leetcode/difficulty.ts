import type { Difficulty } from "./types";

/** Badge color classes per difficulty (light + dark). */
export const DIFFICULTY_CLASS: Record<Difficulty, string> = {
  easy: "border-transparent bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  medium: "border-transparent bg-amber-500/15 text-amber-600 dark:text-amber-400",
  hard: "border-transparent bg-rose-500/15 text-rose-600 dark:text-rose-400",
};

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};
