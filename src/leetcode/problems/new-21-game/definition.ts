import type { LeetCodeProblem } from "../../types";
import type { Game21Data } from "./algorithm";
import { game21Steps } from "./algorithm";
import { CODE } from "./code";
import { Game21Renderer } from "./Game21Renderer";

interface Game21Input {
  n: number;
  k: number;
  maxPts: number;
}

export const new21GameProblem: LeetCodeProblem<Game21Input, Game21Data, Record<string, never>> = {
  id: "new-21-game",
  number: 837,
  title: "New 21 Game",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/new-21-game/",
  summary: "dp[i] is the average of the previous maxPts probabilities; a sliding window makes it O(1) per score.",
  prompt:
    "Alice keeps drawing points (1…maxPts, uniform) while her total is below k. Return the probability that " +
    "her final score is at most n.",
  topics: ["Math", "Dynamic Programming", "Sliding Window", "Probability"],
  tags: ["Dynamic Programming", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 21, k: 17, maxPts: 10 }),
  defaultOptions: {},
  buildSteps: (input) => game21Steps(input.n, input.k, input.maxPts),
  Renderer: Game21Renderer,
};
