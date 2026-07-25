import type { LeetCodeProblem } from "../../types";
import type { ConsecData } from "./algorithm";
import { consecSteps } from "./algorithm";
import { CODE } from "./code";
import { ConsecRenderer } from "./ConsecRenderer";

export const consecutiveCharactersProblem: LeetCodeProblem<string, ConsecData, Record<string, never>> = {
  id: "consecutive-characters",
  number: 1446,
  title: "Consecutive Characters",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/consecutive-characters/",
  summary: "One pass tracking the current same-character run length and its running maximum.",
  prompt:
    "The power of a string is the length of its longest substring made of a single repeated " +
    "character. Return the power of the given string s.",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "leetcode",
  defaultOptions: {},
  buildSteps: (input) => consecSteps(input),
  Renderer: ConsecRenderer,
};
