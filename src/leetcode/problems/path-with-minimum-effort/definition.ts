import type { LeetCodeProblem } from "../../types";
import type { EffortData } from "./algorithm";
import { effortSteps } from "./algorithm";
import { CODE } from "./code";
import { EffortRenderer } from "./EffortRenderer";

export const pathWithMinimumEffortProblem: LeetCodeProblem<number[][], EffortData, Record<string, never>> = {
  id: "path-with-minimum-effort",
  number: 1631,
  title: "Path With Minimum Effort",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/path-with-minimum-effort/",
  summary: "Dijkstra with a minimax cost: a path's effort is its single largest adjacent height change.",
  prompt:
    "You start at the top-left of a heights grid and want to reach the bottom-right. A route's effort " +
    "is the maximum absolute height difference between consecutive cells. Return the minimum effort.",
  topics: ["Graph", "Heap", "Binary Search", "Union Find"],
  tags: ["Graph", "Heap", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC log(RC))", timeWorst: "O(RC log(RC))", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ],
  defaultOptions: {},
  buildSteps: (input) => effortSteps(input),
  Renderer: EffortRenderer,
};
