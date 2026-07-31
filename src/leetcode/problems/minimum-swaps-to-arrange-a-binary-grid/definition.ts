import type { LeetCodeProblem } from "../../types";
import type { MinSwapsData } from "./algorithm";
import { minSwapsSteps } from "./algorithm";
import { CODE } from "./code";
import { MinSwapsRenderer } from "./MinSwapsRenderer";

interface MinSwapsInput {
  grid: number[][];
}

export const minSwapsBinaryGridProblem: LeetCodeProblem<MinSwapsInput, MinSwapsData, Record<string, never>> = {
  id: "minimum-swaps-to-arrange-a-binary-grid",
  number: 1536,
  title: "Minimum Swaps to Arrange a Binary Grid",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/",
  summary: "Row i needs ≥ n−1−i trailing zeros; greedily bubble the nearest qualifying row up with adjacent swaps.",
  prompt:
    "Given an n×n binary grid, in one move you may swap two adjacent rows. Return the minimum moves so every " +
    "cell above the main diagonal is 0, or -1 if impossible.",
  topics: ["Array", "Greedy", "Matrix"],
  tags: ["Greedy", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ grid: [[0, 0, 1], [1, 1, 0], [1, 0, 0]] }),
  defaultOptions: {},
  buildSteps: (input) => minSwapsSteps(input.grid),
  Renderer: MinSwapsRenderer,
};
