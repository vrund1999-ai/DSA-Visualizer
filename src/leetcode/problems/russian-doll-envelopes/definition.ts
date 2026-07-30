import type { LeetCodeProblem } from "../../types";
import type { EnvelopeData } from "./algorithm";
import { envelopeSteps } from "./algorithm";
import { CODE } from "./code";
import { EnvelopeRenderer } from "./EnvelopeRenderer";

export const russianDollEnvelopesProblem: LeetCodeProblem<number[][], EnvelopeData, Record<string, never>> = {
  id: "russian-doll-envelopes",
  number: 354,
  title: "Russian Doll Envelopes",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/russian-doll-envelopes/",
  summary: "Sort by width asc, height desc; the answer is the longest strictly increasing subsequence of heights.",
  prompt:
    "Each envelope has a width and height; one fits inside another only if both dimensions are strictly " +
    "greater. Return the maximum number of envelopes you can nest (Russian doll style).",
  topics: ["Array", "Binary Search", "Dynamic Programming", "Sorting"],
  tags: ["Binary Search", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
  ],
  defaultOptions: {},
  buildSteps: (input) => envelopeSteps(input),
  Renderer: EnvelopeRenderer,
};
