import type { LeetCodeProblem } from "../../types";
import type { FindDupData } from "./algorithm";
import { findDuplicatesSteps } from "./algorithm";
import { CODE } from "./code";
import { FindDupRenderer } from "./FindDupRenderer";

export const findAllDuplicatesProblem: LeetCodeProblem<number[], FindDupData, Record<string, never>> = {
  id: "find-all-duplicates-in-an-array",
  number: 442,
  title: "Find All Duplicates in an Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
  summary: "Flip the sign at slot |v|-1 to mark values seen; a negative slot means a duplicate.",
  prompt:
    "Given an array nums of length n where every integer is in [1, n] and appears once or " +
    "twice, return all values that appear twice, using O(1) extra space and O(n) time.",
  topics: ["Array", "Hash Table"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 3, 2, 7, 8, 2, 3, 1],
  defaultOptions: {},
  buildSteps: (input) => findDuplicatesSteps(input),
  Renderer: FindDupRenderer,
};
