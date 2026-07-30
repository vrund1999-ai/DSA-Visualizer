import type { LeetCodeProblem } from "../../types";
import type { PredictWinnerData } from "./algorithm";
import { predictWinnerSteps } from "./algorithm";
import { CODE } from "./code";
import { PredictWinnerRenderer } from "./PredictWinnerRenderer";

interface PredictWinnerInput {
  nums: number[];
}

export const predictTheWinnerProblem: LeetCodeProblem<PredictWinnerInput, PredictWinnerData, Record<string, never>> = {
  id: "predict-the-winner",
  number: 486,
  title: "Predict the Winner",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/predict-the-winner/",
  summary: "Interval DP on the score difference: dp[i][j] = max(nums[i] − dp[i+1][j], nums[j] − dp[i][j−1]); player 1 wins iff dp[0][n−1] ≥ 0.",
  prompt:
    "Two players alternately take a number from either end of the array, adding it to their score. Both play " +
    "optimally. Return true if player 1 can end with a score ≥ player 2's.",
  topics: ["Array", "Math", "Dynamic Programming", "Recursion", "Game Theory"],
  tags: ["Dynamic Programming", "Game Theory"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 5, 233, 7] }),
  defaultOptions: {},
  buildSteps: (input) => predictWinnerSteps(input.nums),
  Renderer: PredictWinnerRenderer,
};
