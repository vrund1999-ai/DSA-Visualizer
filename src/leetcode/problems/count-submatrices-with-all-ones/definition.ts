import type { LeetCodeProblem } from "../../types";
import type { SubmatData } from "./algorithm";
import { submatSteps } from "./algorithm";
import { CODE } from "./code";
import { SubmatRenderer } from "./SubmatRenderer";

export const countSubmatricesAllOnesProblem: LeetCodeProblem<number[][], SubmatData, Record<string, never>> = {
  id: "count-submatrices-with-all-ones",
  number: 1504,
  title: "Count Submatrices With All Ones",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-submatrices-with-all-ones/",
  summary: "Per-column histogram heights; for each right column extend left with a running min height.",
  prompt: "Given an m×n binary matrix, return the number of submatrices that contain only ones.",
  topics: ["Array", "Dynamic Programming", "Stack", "Matrix", "Monotonic Stack"],
  tags: ["Array", "Dynamic Programming", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n²)", timeWorst: "O(m·n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => submatSteps(input),
  Renderer: SubmatRenderer,
};
