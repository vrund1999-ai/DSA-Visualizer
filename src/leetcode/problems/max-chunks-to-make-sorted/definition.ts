import type { LeetCodeProblem } from "../../types";
import type { MaxChunksData } from "./algorithm";
import { maxChunksSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxChunksRenderer } from "./MaxChunksRenderer";

export const maxChunksToSortedProblem: LeetCodeProblem<number[], MaxChunksData, Record<string, never>> = {
  id: "max-chunks-to-make-sorted",
  number: 769,
  title: "Max Chunks To Make Sorted",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/max-chunks-to-make-sorted/",
  summary: "For a permutation of 0..n−1, cut a chunk whenever the running maximum equals the index.",
  prompt:
    "Given a permutation of 0..n−1, split it into the most chunks such that sorting each chunk " +
    "individually and concatenating yields the fully sorted array. Return that maximum number of chunks.",
  topics: ["Array", "Stack", "Greedy", "Sorting", "Monotonic Stack"],
  tags: ["Array", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 0, 2, 3, 4],
  defaultOptions: {},
  buildSteps: (input) => maxChunksSteps(input),
  Renderer: MaxChunksRenderer,
};
