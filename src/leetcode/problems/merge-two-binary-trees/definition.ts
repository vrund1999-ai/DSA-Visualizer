import type { LeetCodeProblem } from "../../types";
import type { MergeTreesData } from "./algorithm";
import { mergeTreesSteps } from "./algorithm";
import { CODE } from "./code";
import { MergeTreesRenderer } from "./MergeTreesRenderer";

interface MergeTreesInput {
  t1: (number | null)[];
  t2: (number | null)[];
}

export const mergeTwoTreesProblem: LeetCodeProblem<MergeTreesInput, MergeTreesData, Record<string, never>> = {
  id: "merge-two-binary-trees",
  number: 617,
  title: "Merge Two Binary Trees",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/merge-two-binary-trees/",
  summary: "Overlapping nodes add their values; a node in only one tree carries over unchanged.",
  prompt:
    "Merge two binary trees by overlaying them: where both have a node, sum the values; otherwise use the " +
    "non-null node. Return the merged tree.",
  topics: ["Tree", "DFS", "BFS", "Binary Tree"],
  tags: ["Tree", "DFS"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ t1: [1, 3, 2, 5], t2: [2, 1, 3, null, 4, null, 7] }),
  defaultOptions: {},
  buildSteps: (input) => mergeTreesSteps(input.t1, input.t2),
  Renderer: MergeTreesRenderer,
};
