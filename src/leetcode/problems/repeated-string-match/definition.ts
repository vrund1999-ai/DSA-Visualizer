import type { LeetCodeProblem } from "../../types";
import type { RepeatMatchData } from "./algorithm";
import { repeatMatchSteps } from "./algorithm";
import { CODE } from "./code";
import { RepeatMatchRenderer } from "./RepeatMatchRenderer";

interface RepeatMatchInput {
  a: string;
  b: string;
}

export const repeatedStringMatchProblem: LeetCodeProblem<RepeatMatchInput, RepeatMatchData, Record<string, never>> = {
  id: "repeated-string-match",
  number: 686,
  title: "Repeated String Match",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/repeated-string-match/",
  summary: "Repeat a to reach b's length (⌈|b|/|a|⌉), and at most one extra copy suffices; otherwise b is impossible.",
  prompt:
    "Return the minimum number of times string a must be repeated so that b is a substring of the result, or " +
    "-1 if it is impossible.",
  topics: ["String", "String Matching"],
  tags: ["String Matching", "String"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((m+n)·n)", timeWorst: "O((m+n)·n)", space: "O(m+n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ a: "abcd", b: "cdabcdab" }),
  defaultOptions: {},
  buildSteps: (input) => repeatMatchSteps(input.a, input.b),
  Renderer: RepeatMatchRenderer,
};
