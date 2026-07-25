import type { LeetCodeProblem } from "../../types";
import type { MaximalRectData } from "./algorithm";
import { maximalRectSteps } from "./algorithm";
import { CODE } from "./code";
import { MaximalRectRenderer } from "./MaximalRectRenderer";

export const maximalRectangleProblem: LeetCodeProblem<string[][], MaximalRectData, Record<string, never>> = {
  id: "maximal-rectangle",
  number: 85,
  title: "Maximal Rectangle",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/maximal-rectangle/",
  summary: "Row-by-row histogram reduction + largest-rectangle-in-histogram.",
  prompt:
    "Given a binary matrix of '0' and '1', find the largest rectangle containing only " +
    "1s and return its area.",
  topics: ["Array", "Dynamic Programming", "Stack", "Matrix", "Monotonic Stack"],
  tags: ["Array", "Dynamic Programming", "Stack", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ],
  defaultOptions: {},
  buildSteps: (input) => maximalRectSteps(input),
  Renderer: MaximalRectRenderer,
};
