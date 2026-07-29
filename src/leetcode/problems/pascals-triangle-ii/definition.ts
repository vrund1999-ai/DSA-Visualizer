import type { LeetCodeProblem } from "../../types";
import type { PascalData } from "./algorithm";
import { pascalSteps } from "./algorithm";
import { CODE } from "./code";
import { PascalRenderer } from "./PascalRenderer";

export const pascalsTriangleIIProblem: LeetCodeProblem<number, PascalData, Record<string, never>> = {
  id: "pascals-triangle-ii",
  number: 119,
  title: "Pascal's Triangle II",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/pascals-triangle-ii/",
  summary: "Build each row from the previous: interior entries sum the two above, bordered by 1s.",
  prompt: "Given a rowIndex, return the rowIndex-th (0-indexed) row of Pascal's triangle.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k²)", timeWorst: "O(k²)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => 4,
  defaultOptions: {},
  buildSteps: (input) => pascalSteps(input),
  Renderer: PascalRenderer,
};
