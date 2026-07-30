import type { LeetCodeProblem } from "../../types";
import type { MountainData } from "./algorithm";
import { mountainSteps } from "./algorithm";
import { CODE } from "./code";
import { MountainRenderer } from "./MountainRenderer";

export const validMountainArrayProblem: LeetCodeProblem<number[], MountainData, Record<string, never>> = {
  id: "valid-mountain-array",
  number: 941,
  title: "Valid Mountain Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/valid-mountain-array/",
  summary: "Walk up to a single interior peak, then down; a valid mountain lands exactly on the last index.",
  prompt:
    "Return true if the array is a valid mountain: length ≥ 3, strictly increasing to a single peak " +
    "(not at either end), then strictly decreasing.",
  topics: ["Array"],
  tags: ["Array", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 3, 5, 4, 2, 1],
  defaultOptions: {},
  buildSteps: (input) => mountainSteps(input),
  Renderer: MountainRenderer,
};
