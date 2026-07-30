import type { LeetCodeProblem } from "../../types";
import type { PathSum3Data } from "./algorithm";
import { pathSum3Steps } from "./algorithm";
import { CODE } from "./code";
import { PathSum3Renderer } from "./PathSum3Renderer";

interface PathSum3Input {
  heap: (number | null)[];
  target: number;
}

export const pathSumIIIProblem: LeetCodeProblem<PathSum3Input, PathSum3Data, Record<string, never>> = {
  id: "path-sum-iii",
  number: 437,
  title: "Path Sum III",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/path-sum-iii/",
  summary: "Carry a running prefix-sum count down the tree; a target path exists where two prefixes differ by target.",
  prompt:
    "Count the downward paths (any start and end node, moving parent→child) in a binary tree whose node " +
    "values sum to a given target.",
  topics: ["Tree", "DFS", "Hash Table", "Prefix Sum"],
  tags: ["Tree", "DFS", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], target: 8 }),
  defaultOptions: {},
  buildSteps: (input) => pathSum3Steps(input.heap, input.target),
  Renderer: PathSum3Renderer,
};
