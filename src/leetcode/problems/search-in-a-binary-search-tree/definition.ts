import type { LeetCodeProblem } from "../../types";
import type { SearchBstData } from "./algorithm";
import { searchBstSteps } from "./algorithm";
import { CODE } from "./code";
import { SearchBstRenderer } from "./SearchBstRenderer";

interface SearchBstInput {
  heap: (number | null)[];
  val: number;
}

export const searchBstProblem: LeetCodeProblem<SearchBstInput, SearchBstData, Record<string, never>> = {
  id: "search-in-a-binary-search-tree",
  number: 700,
  title: "Search in a Binary Search Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
  summary: "Walk down the BST, branching left for smaller and right for larger, until the value matches or a null child is hit.",
  prompt: "Given the root of a binary search tree and a value, return the subtree rooted at the node whose value equals it (or null).",
  topics: ["Tree", "Binary Search Tree", "Binary Tree"],
  tags: ["BST", "Tree"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(h)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [4, 2, 7, 1, 3], val: 2 }),
  defaultOptions: {},
  buildSteps: (input) => searchBstSteps(input.heap, input.val),
  Renderer: SearchBstRenderer,
};
