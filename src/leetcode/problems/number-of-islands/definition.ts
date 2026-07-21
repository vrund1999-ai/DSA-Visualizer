import type { LeetCodeProblem } from "../../types";
import type { IslandsData } from "./algorithm";
import { islandsSteps } from "./algorithm";
import { CODE } from "./code";
import { IslandsRenderer } from "./IslandsRenderer";

export const numberOfIslandsProblem: LeetCodeProblem<
  string[][],
  IslandsData,
  Record<string, never>
> = {
  id: "number-of-islands",
  number: 200,
  title: "Number of Islands",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-islands/",
  summary: "Count connected land regions with flood-fill DFS.",
  prompt:
    "Given an m×n 2D grid of '1' (land) and '0' (water), return the number of " +
    "islands. An island is surrounded by water and formed by connecting " +
    "adjacent land cells horizontally or vertically.",
  topics: ["Array", "Depth-First Search", "Breadth-First Search", "Matrix"],
  tags: ["Array", "Depth-First Search", "Breadth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 84.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ],
  defaultOptions: {},
  buildSteps: (input) => islandsSteps(input),
  Renderer: IslandsRenderer,
};
