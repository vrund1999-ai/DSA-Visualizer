import type { LeetCodeProblem } from "../../types";
import type { StringMatchData } from "./algorithm";
import { stringMatchSteps } from "./algorithm";
import { CODE } from "./code";
import { StringMatchRenderer } from "./StringMatchRenderer";

export const stringMatchingProblem: LeetCodeProblem<string[], StringMatchData, Record<string, never>> = {
  id: "string-matching-in-an-array",
  number: 1408,
  title: "String Matching in an Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/string-matching-in-an-array/",
  summary: "Return every word that appears as a substring of some other word in the array.",
  prompt: "Given an array of strings, return all strings that are a substring of another string in the array (in any order).",
  topics: ["Array", "String", "String Matching"],
  tags: ["String", "String Matching"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n² · L)", timeWorst: "O(n² · L)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ["mass", "as", "hero", "superhero"],
  defaultOptions: {},
  buildSteps: (input) => stringMatchSteps(input),
  Renderer: StringMatchRenderer,
};
