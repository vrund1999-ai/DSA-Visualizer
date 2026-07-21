import type { LeetCodeProblem } from "../../types";
import type { DecodeData } from "./algorithm";
import { decodeSteps } from "./algorithm";
import { CODE } from "./code";
import { DecodeRenderer } from "./DecodeRenderer";

export const decodeStringProblem: LeetCodeProblem<
  string,
  DecodeData,
  Record<string, never>
> = {
  id: "decode-string",
  number: 394,
  title: "Decode String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/decode-string/",
  summary: "Expand k[...] run-length encoding with two stacks.",
  prompt:
    "Given an encoded string like `3[a2[c]]`, decode it. The pattern k[encoded] " +
    "means the encoded substring repeats exactly k times; brackets may nest.",
  topics: ["String", "Stack", "Recursion"],
  tags: ["String", "Stack", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 75.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "3[a2[c]]",
  defaultOptions: {},
  buildSteps: (input) => decodeSteps(input),
  Renderer: DecodeRenderer,
};
