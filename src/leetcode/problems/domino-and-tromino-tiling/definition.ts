import type { LeetCodeProblem } from "../../types";
import type { TilingData } from "./algorithm";
import { tilingSteps } from "./algorithm";
import { CODE } from "./code";
import { TilingRenderer } from "./TilingRenderer";

export const dominoTrominoTilingProblem: LeetCodeProblem<number, TilingData, Record<string, never>> = {
  id: "domino-and-tromino-tiling",
  number: 790,
  title: "Domino and Tromino Tiling",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/domino-and-tromino-tiling/",
  summary: "A linear recurrence dp[i] = 2·dp[i−1] + dp[i−3] counts tilings of a 2×n board.",
  prompt:
    "Count the ways to tile a 2×n board with 2×1 dominoes and L-shaped trominoes (rotations allowed), " +
    "modulo 1e9+7.",
  topics: ["Dynamic Programming"],
  tags: ["Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 5,
  defaultOptions: {},
  buildSteps: (input) => tilingSteps(input),
  Renderer: TilingRenderer,
};
