import type { LeetCodeProblem } from "../../types";
import type { PrePostData } from "./algorithm";
import { prePostSteps } from "./algorithm";
import { CODE } from "./code";
import { PrePostRenderer } from "./PrePostRenderer";

interface PrePostInput {
  pre: number[];
  post: number[];
}

export const constructFromPrePostProblem: LeetCodeProblem<PrePostInput, PrePostData, Record<string, never>> = {
  id: "construct-binary-tree-from-preorder-and-postorder-traversal",
  number: 889,
  title: "Construct Binary Tree from Preorder and Postorder Traversal",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/",
  summary: "Preorder's second value is the left child; its postorder position splits the left and right subtrees.",
  prompt:
    "Given the preorder and postorder traversals of a binary tree with distinct values, reconstruct any " +
    "tree consistent with both.",
  topics: ["Array", "Hash Table", "Divide and Conquer", "Tree"],
  tags: ["Tree", "Divide and Conquer"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ pre: [1, 2, 4, 5, 3, 6, 7], post: [4, 5, 2, 6, 7, 3, 1] }),
  defaultOptions: {},
  buildSteps: (input) => prePostSteps(input.pre, input.post),
  Renderer: PrePostRenderer,
};
