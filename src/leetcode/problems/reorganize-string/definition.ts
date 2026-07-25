import type { LeetCodeProblem } from "../../types";
import type { ReorganizeData } from "./algorithm";
import { reorganizeSteps } from "./algorithm";
import { CODE } from "./code";
import { ReorganizeRenderer } from "./ReorganizeRenderer";

export const reorganizeStringProblem: LeetCodeProblem<string, ReorganizeData, Record<string, never>> = {
  id: "reorganize-string",
  number: 767,
  title: "Reorganize String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/reorganize-string/",
  summary: "Place the most frequent characters into even indices, then odd, to spread them.",
  prompt:
    "Rearrange the characters of s so no two adjacent characters are the same. Return any " +
    "valid arrangement, or an empty string if it's impossible.",
  topics: ["Hash Table", "String", "Greedy", "Sorting", "Heap", "Counting"],
  tags: ["Hash Table", "String", "Greedy", "Heap"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log k)", timeWorst: "O(n log k)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "aab",
  defaultOptions: {},
  buildSteps: (input) => reorganizeSteps(input),
  Renderer: ReorganizeRenderer,
};
