import type { LeetCodeProblem } from "../../types";
import type { CompressData } from "./algorithm";
import { compressSteps } from "./algorithm";
import { CODE } from "./code";
import { CompressRenderer } from "./CompressRenderer";

export const stringCompressionProblem: LeetCodeProblem<
  string[],
  CompressData,
  Record<string, never>
> = {
  id: "string-compression",
  number: 443,
  title: "String Compression",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/string-compression/",
  summary: "Run-length compress a char array in place (two pointers).",
  prompt:
    "Compress a character array in place: each group of consecutive repeats " +
    "becomes the character followed by the group length (omitted when 1). Return " +
    "the new length.",
  topics: ["Two Pointers", "String"],
  tags: ["Two Pointers", "String"],
  companies: ["Bloomberg"],
  frequency: 54.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ["a", "a", "b", "b", "c", "c", "c"],
  defaultOptions: {},
  buildSteps: (input) => compressSteps(input),
  Renderer: CompressRenderer,
};
