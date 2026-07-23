import type { LeetCodeProblem } from "../../types";
import type { DisappearedData } from "./algorithm";
import { disappearedSteps } from "./algorithm";
import { CODE } from "./code";
import { DisappearedRenderer } from "./DisappearedRenderer";

export const findDisappearedProblem: LeetCodeProblem<
  number[],
  DisappearedData,
  Record<string, never>
> = {
  id: "find-all-numbers-disappeared-in-an-array",
  number: 448,
  title: "Find All Numbers Disappeared in an Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
  summary: "Find missing 1..n values using the array as a hash.",
  prompt:
    "Given an array `nums` of n integers where each value is in [1, n], return " +
    "all the integers in that range that do not appear. Aim for O(n) time and " +
    "O(1) extra space.",
  topics: ["Array", "Hash Table"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 30,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 3, 2, 7, 8, 2, 3, 1],
  defaultOptions: {},
  buildSteps: (input) => disappearedSteps(input),
  Renderer: DisappearedRenderer,
};
