import type { LeetCodeProblem } from "../../types";
import type { GroupAnagramsData } from "./algorithm";
import { groupAnagramsSteps } from "./algorithm";
import { CODE } from "./code";
import { GroupAnagramsRenderer } from "./GroupAnagramsRenderer";

export const groupAnagramsProblem: LeetCodeProblem<
  string[],
  GroupAnagramsData,
  Record<string, never>
> = {
  id: "group-anagrams",
  number: 49,
  title: "Group Anagrams",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/group-anagrams/",
  summary: "Bucket words that are anagrams of each other.",
  prompt:
    "Given an array of strings `strs`, group the anagrams together. Two words " +
    "are anagrams if one is a rearrangement of the other's letters.",
  topics: ["Array", "Hash Table", "String", "Sorting"],
  tags: ["Array", "Hash Table", "String", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 69.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·k log k)", timeWorst: "O(n·k log k)", space: "O(n·k)" },
  inputSchema: [],
  makeDefaultInput: () => ["eat", "tea", "tan", "ate", "nat", "bat"],
  defaultOptions: {},
  buildSteps: (input) => groupAnagramsSteps(input),
  Renderer: GroupAnagramsRenderer,
};
