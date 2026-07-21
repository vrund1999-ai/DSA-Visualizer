import type { LeetCodeProblem } from "../../types";
import type { FirstUniqData } from "./algorithm";
import { firstUniqSteps } from "./algorithm";
import { CODE } from "./code";
import { FirstUniqRenderer } from "./FirstUniqRenderer";

export const firstUniqueCharProblem: LeetCodeProblem<
  string,
  FirstUniqData,
  Record<string, never>
> = {
  id: "first-unique-character-in-a-string",
  number: 387,
  title: "First Unique Character in a String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
  summary: "Index of the first non-repeating character.",
  prompt:
    "Given a string `s`, return the index of the first character that does not " +
    "repeat anywhere in the string. If there is none, return -1.",
  topics: ["Hash Table", "String", "Queue", "Counting"],
  tags: ["Hash Table", "String", "Queue", "Counting"],
  companies: ["Bloomberg"],
  frequency: 67.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "loveleetcode",
  defaultOptions: {},
  buildSteps: (input) => firstUniqSteps(input),
  Renderer: FirstUniqRenderer,
};
