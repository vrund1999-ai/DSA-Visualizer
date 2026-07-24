import type { LeetCodeProblem } from "../../types";
import type { SurroundedData } from "./algorithm";
import { surroundedSteps } from "./algorithm";
import { CODE } from "./code";
import { SurroundedRenderer } from "./SurroundedRenderer";

export const surroundedRegionsProblem: LeetCodeProblem<string[][], SurroundedData, Record<string, never>> = {
  id: "surrounded-regions",
  number: 130,
  title: "Surrounded Regions",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/surrounded-regions/",
  summary: "Border DFS marks safe 'O's; every other 'O' region is captured to 'X'.",
  prompt:
    "Given an m × n board of 'X' and 'O', capture all regions of 'O' that are completely " +
    "surrounded by 'X' by flipping them to 'X'. Regions touching the border are safe.",
  topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"],
  tags: ["Array", "Depth-First Search", "Union Find", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ],
  defaultOptions: {},
  buildSteps: (input) => surroundedSteps(input),
  Renderer: SurroundedRenderer,
};
