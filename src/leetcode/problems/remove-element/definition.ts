import type { LeetCodeProblem } from "../../types";
import type { RemoveElementData, RemoveElementInput } from "./algorithm";
import { removeElementSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveElementRenderer } from "./RemoveElementRenderer";

export const removeElementProblem: LeetCodeProblem<
  RemoveElementInput,
  RemoveElementData,
  Record<string, never>
> = {
  id: "remove-element",
  number: 27,
  title: "Remove Element",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/remove-element/",
  summary: "Remove all occurrences of a value in-place (two pointers).",
  prompt:
    "Given an array `nums` and a value `val`, remove all occurrences of val " +
    "in-place and return the count k of remaining elements (which must fill the " +
    "first k slots).",
  topics: ["Array", "Two Pointers"],
  tags: ["Array", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 60.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [3, 2, 2, 3, 4, 3], val: 3 }),
  defaultOptions: {},
  buildSteps: (input) => removeElementSteps(input),
  Renderer: RemoveElementRenderer,
};
