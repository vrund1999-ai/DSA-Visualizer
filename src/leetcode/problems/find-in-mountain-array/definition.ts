import type { LeetCodeProblem } from "../../types";
import type { MountainData } from "./algorithm";
import { mountainSteps } from "./algorithm";
import { CODE } from "./code";
import { MountainRenderer } from "./MountainRenderer";

interface MountainInput {
  target: number;
  arr: number[];
}

export const findInMountainArrayProblem: LeetCodeProblem<MountainInput, MountainData, Record<string, never>> = {
  id: "find-in-mountain-array",
  number: 1095,
  title: "Find in Mountain Array",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/find-in-mountain-array/",
  summary: "Find the peak, then binary search the ascending and descending halves.",
  prompt:
    "A mountain array strictly increases to a peak then strictly decreases. Return the " +
    "minimum index whose value equals target, or -1. Aim for O(log n) lookups.",
  topics: ["Array", "Binary Search", "Interactive"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ target: 3, arr: [1, 2, 3, 4, 5, 3, 1] }),
  defaultOptions: {},
  buildSteps: (input) => mountainSteps(input.target, input.arr),
  Renderer: MountainRenderer,
};
