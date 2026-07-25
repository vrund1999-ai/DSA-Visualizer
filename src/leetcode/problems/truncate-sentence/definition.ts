import type { LeetCodeProblem } from "../../types";
import type { TruncateData } from "./algorithm";
import { truncateSteps } from "./algorithm";
import { CODE } from "./code";
import { TruncateRenderer } from "./TruncateRenderer";

interface TruncateInput {
  s: string;
  k: number;
}

export const truncateSentenceProblem: LeetCodeProblem<TruncateInput, TruncateData, Record<string, never>> = {
  id: "truncate-sentence",
  number: 1816,
  title: "Truncate Sentence",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/truncate-sentence/",
  summary: "Count spaces; cut the sentence when the k-th word boundary is reached.",
  prompt:
    "A sentence is words separated by single spaces. Return the sentence truncated to its " +
    "first k words.",
  topics: ["Array", "String"],
  tags: ["Array", "String"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "Hello how are you Contestant", k: 4 }),
  defaultOptions: {},
  buildSteps: (input) => truncateSteps(input.s, input.k),
  Renderer: TruncateRenderer,
};
