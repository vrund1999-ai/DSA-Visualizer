import type { LeetCodeProblem } from "../../types";
import type { CoveredData } from "./algorithm";
import { coveredSteps } from "./algorithm";
import { CODE } from "./code";
import { CoveredRenderer } from "./CoveredRenderer";

interface CoveredInput {
  ranges: [number, number][];
  left: number;
  right: number;
}

export const rangeCoveredProblem: LeetCodeProblem<CoveredInput, CoveredData, Record<string, never>> = {
  id: "check-if-all-the-integers-in-a-range-are-covered",
  number: 1893,
  title: "Check if All the Integers in a Range Are Covered",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/",
  summary: "Verify every integer in [left, right] lies inside at least one range.",
  prompt:
    "Given a list of inclusive ranges and two integers left and right, return true if " +
    "every integer in [left, right] is covered by at least one of the ranges.",
  topics: ["Array", "Hash Table", "Prefix Sum"],
  tags: ["Array", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·range)", timeWorst: "O(n·range)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ ranges: [[1, 2], [3, 4], [5, 6]], left: 2, right: 5 }),
  defaultOptions: {},
  buildSteps: (input) => coveredSteps(input.ranges, input.left, input.right),
  Renderer: CoveredRenderer,
};
