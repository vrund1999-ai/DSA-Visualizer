import type { LeetCodeProblem } from "../../types";
import type { CoinsData } from "./algorithm";
import { coinsSteps } from "./algorithm";
import { CODE } from "./code";
import { CoinsRenderer } from "./CoinsRenderer";

export const distributeCoinsProblem: LeetCodeProblem<(number | null)[], CoinsData, Record<string, never>> = {
  id: "distribute-coins-in-binary-tree",
  number: 979,
  title: "Distribute Coins in Binary Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/distribute-coins-in-binary-tree/",
  summary: "Post-order DFS returns each subtree's coin surplus; the moves are the summed absolute flow across edges.",
  prompt:
    "A binary tree of n nodes holds n coins in total. In one move you may shift a coin between adjacent " +
    "nodes. Return the minimum moves so every node holds exactly one coin.",
  topics: ["Tree", "DFS", "Binary Tree"],
  tags: ["Tree", "DFS"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 0, 0, null, 3],
  defaultOptions: {},
  buildSteps: (input) => coinsSteps(input),
  Renderer: CoinsRenderer,
};
