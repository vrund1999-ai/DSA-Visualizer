import type { LeetCodeProblem } from "../../types";
import type { DiMatchData } from "./algorithm";
import { diMatchSteps } from "./algorithm";
import { CODE } from "./code";
import { DiMatchRenderer } from "./DiMatchRenderer";

export const diStringMatchProblem: LeetCodeProblem<string, DiMatchData, Record<string, never>> = {
  id: "di-string-match",
  number: 942,
  title: "DI String Match",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/di-string-match/",
  summary: "Greedily take the smallest available value on 'I' and the largest on 'D'; either keeps a valid range.",
  prompt:
    "Given a string of 'I' (increasing) and 'D' (decreasing), return any permutation of 0…n whose adjacent " +
    "comparisons match the string.",
  topics: ["Array", "Math", "Two Pointers", "String", "Greedy"],
  tags: ["Greedy", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "IDID",
  defaultOptions: {},
  buildSteps: (input) => diMatchSteps(input),
  Renderer: DiMatchRenderer,
};
