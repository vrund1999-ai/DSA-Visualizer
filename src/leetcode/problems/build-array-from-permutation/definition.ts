import type { LeetCodeProblem } from "../../types";
import type { BuildArrayData } from "./algorithm";
import { buildArraySteps } from "./algorithm";
import { CODE } from "./code";
import { BuildArrayRenderer } from "./BuildArrayRenderer";

export const buildArrayPermutationProblem: LeetCodeProblem<number[], BuildArrayData, Record<string, never>> = {
  id: "build-array-from-permutation",
  number: 1920,
  title: "Build Array from Permutation",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/build-array-from-permutation/",
  summary: "Each output element is a double index lookup: ans[i] = nums[nums[i]].",
  prompt:
    "Given a zero-based permutation nums, build an array where ans[i] = nums[nums[i]] for " +
    "each i, and return it.",
  topics: ["Array", "Simulation"],
  tags: ["Array", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 2, 1, 5, 3, 4],
  defaultOptions: {},
  buildSteps: (input) => buildArraySteps(input),
  Renderer: BuildArrayRenderer,
};
