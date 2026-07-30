import type { LeetCodeProblem } from "../../types";
import type { HappyData } from "./algorithm";
import { happySteps } from "./algorithm";
import { CODE } from "./code";
import { HappyRenderer } from "./HappyRenderer";

interface HappyInput {
  a: number;
  b: number;
  c: number;
}

export const longestHappyStringProblem: LeetCodeProblem<HappyInput, HappyData, Record<string, never>> = {
  id: "longest-happy-string",
  number: 1405,
  title: "Longest Happy String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-happy-string/",
  summary: "Greedily append the most-available letter, skipping it when it would form three in a row.",
  prompt:
    "Using at most a 'a's, b 'b's, and c 'c's, build the longest string with no substring 'aaa', 'bbb', or " +
    "'ccc'. Return any such longest string.",
  topics: ["String", "Greedy", "Heap"],
  tags: ["Greedy", "Heap"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((a+b+c) log 3)", timeWorst: "O((a+b+c) log 3)", space: "O(a+b+c)" },
  inputSchema: [],
  makeDefaultInput: () => ({ a: 1, b: 1, c: 7 }),
  defaultOptions: {},
  buildSteps: (input) => happySteps(input.a, input.b, input.c),
  Renderer: HappyRenderer,
};
