import type { LeetCodeProblem } from "../../types";
import type { HillValleyData } from "./algorithm";
import { hillValleySteps } from "./algorithm";
import { CODE } from "./code";
import { HillValleyRenderer } from "./HillValleyRenderer";

export const countHillsValleysProblem: LeetCodeProblem<number[], HillValleyData, Record<string, never>> = {
  id: "count-hills-and-valleys-in-an-array",
  number: 2210,
  title: "Count Hills and Valleys in an Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-hills-and-valleys-in-an-array/",
  summary: "Compare each index to its nearest distinct neighbors, skipping plateaus, to count hills/valleys.",
  prompt:
    "An index is a hill if it's larger than its nearest different neighbors on both sides, a valley if " +
    "smaller. Return the number of hills and valleys in nums.",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 4, 1, 1, 6, 5],
  defaultOptions: {},
  buildSteps: (input) => hillValleySteps(input),
  Renderer: HillValleyRenderer,
};
