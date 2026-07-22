import type { LeetCodeProblem } from "../../types";
import type { TrieData, TrieOp } from "./algorithm";
import { trieSteps } from "./algorithm";
import { CODE } from "./code";
import { TrieRenderer } from "./TrieRenderer";

export const implementTrieProblem: LeetCodeProblem<
  TrieOp[],
  TrieData,
  Record<string, never>
> = {
  id: "implement-trie-prefix-tree",
  number: 208,
  title: "Implement Trie (Prefix Tree)",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
  summary: "A prefix tree supporting insert, search, and startsWith.",
  prompt:
    "Implement a trie with insert(word), search(word) (exact word present), and " +
    "startsWith(prefix) (any word with that prefix). Words share common prefix " +
    "paths.",
  topics: ["Hash Table", "String", "Design", "Trie"],
  tags: ["Hash Table", "String", "Design", "Trie"],
  companies: ["Bloomberg"],
  frequency: 48,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(L)", timeWorst: "O(L)", space: "O(total chars)" },
  inputSchema: [],
  makeDefaultInput: () => [
    { op: "insert", arg: "app" },
    { op: "insert", arg: "apple" },
    { op: "insert", arg: "bat" },
    { op: "search", arg: "app" },
    { op: "search", arg: "ap" },
    { op: "startsWith", arg: "ap" },
    { op: "startsWith", arg: "cat" },
  ],
  defaultOptions: {},
  buildSteps: (input) => trieSteps(input),
  Renderer: TrieRenderer,
};
