import type { LeetCodeProblem } from "../../types";
import type { TopKWordsData } from "./algorithm";
import { topKWordsSteps } from "./algorithm";
import { CODE } from "./code";
import { TopKWordsRenderer } from "./TopKWordsRenderer";

interface TopKWordsInput {
  words: string[];
  k: number;
}

export const topKFrequentWordsProblem: LeetCodeProblem<TopKWordsInput, TopKWordsData, Record<string, never>> = {
  id: "top-k-frequent-words",
  number: 692,
  title: "Top K Frequent Words",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/top-k-frequent-words/",
  summary: "Count words, then sort by frequency desc with alphabetical tie-break.",
  prompt:
    "Given an array of words and an integer k, return the k most frequent words, sorted " +
    "by descending frequency and, for ties, in lexicographical (alphabetical) order.",
  topics: ["Hash Table", "String", "Sorting", "Heap", "Bucket Sort", "Counting"],
  tags: ["Hash Table", "String", "Sorting", "Heap"],
  companies: ["Bloomberg"],
  frequency: 46.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ words: ["i", "love", "leetcode", "i", "love", "coding"], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => topKWordsSteps(input.words, input.k),
  Renderer: TopKWordsRenderer,
};
