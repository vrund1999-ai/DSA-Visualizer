import type { LeetCodeProblem } from "../../types";
import type { RotateArrayData, RotateArrayInput } from "./algorithm";
import { rotateArraySteps } from "./algorithm";
import { CODE } from "./code";
import { RotateArrayRenderer } from "./RotateArrayRenderer";

export const rotateArrayProblem: LeetCodeProblem<
  RotateArrayInput,
  RotateArrayData,
  Record<string, never>
> = {
  id: "rotate-array",
  number: 189,
  title: "Rotate Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/rotate-array/",
  summary: "Rotate an array right by k using three reversals.",
  prompt:
    "Given an integer array `nums`, rotate it to the right by `k` steps, " +
    "in-place with O(1) extra space.",
  topics: ["Array", "Math", "Two Pointers"],
  tags: ["Array", "Math", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 65.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 3, 4, 5, 6, 7], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => rotateArraySteps(input),
  Renderer: RotateArrayRenderer,
};
