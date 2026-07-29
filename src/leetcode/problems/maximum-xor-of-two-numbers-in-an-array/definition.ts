import type { LeetCodeProblem } from "../../types";
import type { MaxXorData } from "./algorithm";
import { maxXorSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxXorRenderer } from "./MaxXorRenderer";

export const maximumXorProblem: LeetCodeProblem<number[], MaxXorData, Record<string, never>> = {
  id: "maximum-xor-of-two-numbers-in-an-array",
  number: 421,
  title: "Maximum XOR of Two Numbers in an Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
  summary: "Build the answer bit by bit; a hash set of masked prefixes tests each greedy 1-bit in O(1).",
  prompt: "Given an integer array nums, return the maximum result of nums[i] XOR nums[j] over all pairs.",
  topics: ["Bit Manipulation", "Trie", "Hash Table"],
  tags: ["Bit Manipulation", "Trie"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n · B)", timeWorst: "O(n · B)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 10, 5, 25, 2, 8],
  defaultOptions: {},
  buildSteps: (input) => maxXorSteps(input),
  Renderer: MaxXorRenderer,
};
