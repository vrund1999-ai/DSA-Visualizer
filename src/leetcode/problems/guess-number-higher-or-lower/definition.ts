import type { LeetCodeProblem } from "../../types";
import type { GuessData, GuessInput } from "./algorithm";
import { guessSteps } from "./algorithm";
import { CODE } from "./code";
import { GuessRenderer } from "./GuessRenderer";

export const guessNumberProblem: LeetCodeProblem<
  GuessInput,
  GuessData,
  Record<string, never>
> = {
  id: "guess-number-higher-or-lower",
  number: 374,
  title: "Guess Number Higher or Lower",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/guess-number-higher-or-lower/",
  summary: "Binary-search a secret number from higher/lower hints.",
  prompt:
    "A number is picked from 1..n. Each call to guess(x) says whether your guess " +
    "is too high, too low, or correct. Find the number with the fewest guesses.",
  topics: ["Binary Search", "Interactive"],
  tags: ["Binary Search", "Interactive"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 20, pick: 13 }),
  defaultOptions: {},
  buildSteps: (input) => guessSteps(input),
  Renderer: GuessRenderer,
};
