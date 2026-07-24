import type { LeetCodeProblem } from "../../types";
import type { LexData } from "./algorithm";
import { lexSteps } from "./algorithm";
import { CODE } from "./code";
import { LexRenderer } from "./LexRenderer";

export const lexicographicalNumbersProblem: LeetCodeProblem<number, LexData, Record<string, never>> = {
  id: "lexicographical-numbers",
  number: 386,
  title: "Lexicographical Numbers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/lexicographical-numbers/",
  summary: "Preorder walk of the digit trie to list 1..n in lexicographic order.",
  prompt:
    "Given an integer n, return all numbers in the range [1, n] sorted in " +
    "lexicographical order, using O(n) time and O(1) extra space.",
  topics: ["Depth-First Search", "Trie"],
  tags: ["Depth-First Search", "Trie"],
  companies: ["Bloomberg"],
  frequency: 51.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 13,
  defaultOptions: {},
  buildSteps: (input) => lexSteps(input),
  Renderer: LexRenderer,
};
