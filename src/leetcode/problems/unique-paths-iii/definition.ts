import type { LeetCodeProblem } from "../../types";
import type { UniquePathsData } from "./algorithm";
import { uniquePathsSteps } from "./algorithm";
import { CODE } from "./code";
import { UniquePathsRenderer } from "./UniquePathsRenderer";

interface UniquePathsInput {
  grid: number[][];
}

export const uniquePathsIIIProblem: LeetCodeProblem<UniquePathsInput, UniquePathsData, Record<string, never>> = {
  id: "unique-paths-iii",
  number: 980,
  title: "Unique Paths III",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/unique-paths-iii/",
  summary: "Backtracking Hamiltonian walk: from the start, cover every empty cell exactly once and finish on the end square.",
  prompt:
    "In a grid (0 empty, 1 start, 2 end, -1 obstacle), count the number of distinct paths from start to end " +
    "that walk over every non-obstacle cell exactly once.",
  topics: ["Array", "Backtracking", "Matrix"],
  tags: ["Backtracking", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(4^(R·C))", timeWorst: "O(4^(R·C))", space: "O(R·C)" },
  inputSchema: [],
  makeDefaultInput: () => ({ grid: [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]] }),
  defaultOptions: {},
  buildSteps: (input) => uniquePathsSteps(input.grid),
  Renderer: UniquePathsRenderer,
};
