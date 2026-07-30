import type { LeetCodeProblem } from "../../types";
import type { ApplyOpsData } from "./algorithm";
import { applyOpsSteps } from "./algorithm";
import { CODE } from "./code";
import { ApplyOpsRenderer } from "./ApplyOpsRenderer";

export const applyOperationsProblem: LeetCodeProblem<number[], ApplyOpsData, Record<string, never>> = {
  id: "apply-operations-to-an-array",
  number: 2460,
  title: "Apply Operations to an Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/apply-operations-to-an-array/",
  summary: "Merge equal adjacent values left to right (double + zero), then stably shift all zeros to the end.",
  prompt:
    "Process nums left to right: if nums[i] equals nums[i+1], double nums[i] and set nums[i+1] to 0. After " +
    "all operations, shift every 0 to the end (keeping the order of non-zeros).",
  topics: ["Array", "Two Pointers", "Simulation"],
  tags: ["Array", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 2, 1, 1, 0],
  defaultOptions: {},
  buildSteps: (input) => applyOpsSteps(input),
  Renderer: ApplyOpsRenderer,
};
