import type { LeetCodeProblem } from "../../types";
import type { DeleteEarnData } from "./algorithm";
import { deleteEarnSteps } from "./algorithm";
import { CODE } from "./code";
import { DeleteEarnRenderer } from "./DeleteEarnRenderer";

export const deleteAndEarnProblem: LeetCodeProblem<number[], DeleteEarnData, Record<string, never>> = {
  id: "delete-and-earn",
  number: 740,
  title: "Delete and Earn",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/delete-and-earn/",
  summary: "Sum points per value, then run house-robber DP over the value axis (no adjacent values).",
  prompt:
    "Earning nums[i] deletes every element equal to nums[i]−1 and nums[i]+1. Return the maximum points " +
    "you can earn by repeatedly picking values.",
  topics: ["Array", "Hash Table", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + max)", timeWorst: "O(n + max)", space: "O(max)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 2, 3, 3, 3, 4],
  defaultOptions: {},
  buildSteps: (input) => deleteEarnSteps(input),
  Renderer: DeleteEarnRenderer,
};
