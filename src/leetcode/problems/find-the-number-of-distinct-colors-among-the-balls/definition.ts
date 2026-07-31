import type { LeetCodeProblem } from "../../types";
import type { DistinctColorsData } from "./algorithm";
import { distinctColorsSteps } from "./algorithm";
import { CODE } from "./code";
import { DistinctColorsRenderer } from "./DistinctColorsRenderer";

interface DistinctColorsInput {
  limit: number;
  queries: number[][];
}

export const distinctColorsProblem: LeetCodeProblem<DistinctColorsInput, DistinctColorsData, Record<string, never>> = {
  id: "find-the-number-of-distinct-colors-among-the-balls",
  number: 3160,
  title: "Find the Number of Distinct Colors Among the Balls",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/",
  summary: "A ball→color map and a color→count map let each recolor update in O(1) and report the number of distinct colors.",
  prompt:
    "Process queries [ball, color] that paint (or repaint) a ball. After each query, report the number of " +
    "distinct colors currently used across all painted balls.",
  topics: ["Array", "Hash Table", "Simulation"],
  tags: ["Hash Table", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(q)", timeWorst: "O(q)", space: "O(q)" },
  inputSchema: [],
  makeDefaultInput: () => ({ limit: 4, queries: [[1, 4], [2, 5], [1, 3], [3, 4]] }),
  defaultOptions: {},
  buildSteps: (input) => distinctColorsSteps(input.queries),
  Renderer: DistinctColorsRenderer,
};
