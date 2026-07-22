import type { LeetCodeProblem } from "../../types";
import type { ReverseWordsData } from "./algorithm";
import { reverseWordsSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseWordsRenderer } from "./ReverseWordsRenderer";

export const reverseWordsProblem: LeetCodeProblem<
  string,
  ReverseWordsData,
  Record<string, never>
> = {
  id: "reverse-words-in-a-string",
  number: 151,
  title: "Reverse Words in a String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/reverse-words-in-a-string/",
  summary: "Reverse word order, collapsing extra spaces.",
  prompt:
    "Given a string `s`, reverse the order of the words. Words are separated by " +
    "one or more spaces; the result should have words in reverse order joined by " +
    "single spaces, with no leading or trailing spaces.",
  topics: ["Two Pointers", "String"],
  tags: ["Two Pointers", "String"],
  companies: ["Bloomberg"],
  frequency: 56.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "  the sky  is blue  ",
  defaultOptions: {},
  buildSteps: (input) => reverseWordsSteps(input),
  Renderer: ReverseWordsRenderer,
};
