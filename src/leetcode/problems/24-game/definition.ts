import type { LeetCodeProblem } from "../../types";
import type { Game24Data } from "./algorithm";
import { game24Steps } from "./algorithm";
import { CODE } from "./code";
import { Game24Renderer } from "./Game24Renderer";

interface Game24Input {
  nums: number[];
}

export const game24Problem: LeetCodeProblem<Game24Input, Game24Data, Record<string, never>> = {
  id: "24-game",
  number: 679,
  title: "24 Game",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/24-game/",
  summary: "Backtracking repeatedly replaces a pair of numbers with one operation's result until a single value can equal 24.",
  prompt:
    "Given four cards with values 1–9, use +, −, ×, ÷ and parentheses to make the expression evaluate to 24. " +
    "Return whether it is possible.",
  topics: ["Array", "Math", "Backtracking"],
  tags: ["Backtracking", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) (bounded search)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [4, 1, 8, 7] }),
  defaultOptions: {},
  buildSteps: (input) => game24Steps(input.nums),
  Renderer: Game24Renderer,
};
