import type { LeetCodeProblem } from "../../types";
import type { GuessNumberData } from "./algorithm";
import { guessNumberSteps } from "./algorithm";
import { CODE } from "./code";
import { GuessNumberRenderer } from "./GuessNumberRenderer";

interface GuessNumberInput {
  n: number;
}

export const guessNumberIIProblem: LeetCodeProblem<GuessNumberInput, GuessNumberData, Record<string, never>> = {
  id: "guess-number-higher-or-lower-ii",
  number: 375,
  title: "Guess Number Higher or Lower II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/guess-number-higher-or-lower-ii/",
  summary: "Interval DP: dp[i][j] = min over guesses k of k + max(dp[i][k−1], dp[k+1][j]) — the worst-case cost to guarantee a win.",
  prompt:
    "You pick a number in [1, n]; each wrong guess of x costs x and tells you higher/lower. Return the " +
    "minimum amount of money that guarantees a win regardless of the target.",
  topics: ["Math", "Dynamic Programming", "Game Theory"],
  tags: ["Dynamic Programming", "Interval DP"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n³)", timeWorst: "O(n³)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 7 }),
  defaultOptions: {},
  buildSteps: (input) => guessNumberSteps(input.n),
  Renderer: GuessNumberRenderer,
};
