import type { LeetCodeProblem } from "../../types";
import type { ScoreData } from "./algorithm";
import { scoreSteps } from "./algorithm";
import { CODE } from "./code";
import { ScoreRenderer } from "./ScoreRenderer";

export const scoreOfStringProblem: LeetCodeProblem<string, ScoreData, Record<string, never>> = {
  id: "score-of-a-string",
  number: 3110,
  title: "Score of a String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/score-of-a-string/",
  summary: "Sum the absolute ASCII difference between each pair of adjacent characters.",
  prompt:
    "The score of a string is the sum of the absolute differences between the ASCII values of " +
    "adjacent characters. Return the score of the given string s.",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "hello",
  defaultOptions: {},
  buildSteps: (input) => scoreSteps(input),
  Renderer: ScoreRenderer,
};
