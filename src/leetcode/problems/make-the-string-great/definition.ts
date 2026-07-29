import type { LeetCodeProblem } from "../../types";
import type { MakeGoodData } from "./algorithm";
import { makeGoodSteps } from "./algorithm";
import { CODE } from "./code";
import { MakeGoodRenderer } from "./MakeGoodRenderer";

export const makeTheStringGreatProblem: LeetCodeProblem<string, MakeGoodData, Record<string, never>> = {
  id: "make-the-string-great",
  number: 1544,
  title: "Make The String Great",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/make-the-string-great/",
  summary: "Use a stack; an incoming char equal to the top letter but opposite case cancels the pair.",
  prompt:
    "Repeatedly remove adjacent characters that are the same letter in opposite cases (e.g. 'a' and " +
    "'A') until none remain, and return the resulting string.",
  topics: ["String", "Stack"],
  tags: ["String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "leEeetcode",
  defaultOptions: {},
  buildSteps: (input) => makeGoodSteps(input),
  Renderer: MakeGoodRenderer,
};
