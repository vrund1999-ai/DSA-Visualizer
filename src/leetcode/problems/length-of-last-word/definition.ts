import type { LeetCodeProblem } from "../../types";
import type { LastWordData } from "./algorithm";
import { lastWordSteps } from "./algorithm";
import { CODE } from "./code";
import { LastWordRenderer } from "./LastWordRenderer";

export const lengthOfLastWordProblem: LeetCodeProblem<
  string,
  LastWordData,
  Record<string, never>
> = {
  id: "length-of-last-word",
  number: 58,
  title: "Length of Last Word",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/length-of-last-word/",
  summary: "Length of the final word, scanning from the right.",
  prompt:
    "Given a string `s` of words and spaces, return the length of the last word " +
    "(a maximal substring of non-space characters).",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "   fly me   to   the moon  ",
  defaultOptions: {},
  buildSteps: (input) => lastWordSteps(input),
  Renderer: LastWordRenderer,
};
