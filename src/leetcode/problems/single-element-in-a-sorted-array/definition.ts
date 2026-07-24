import type { LeetCodeProblem } from "../../types";
import type { SingleElementData } from "./algorithm";
import { singleElementSteps } from "./algorithm";
import { CODE } from "./code";
import { SingleElementRenderer } from "./SingleElementRenderer";

export const singleElementProblem: LeetCodeProblem<
  number[],
  SingleElementData,
  Record<string, never>
> = {
  id: "single-element-in-a-sorted-array",
  number: 540,
  title: "Single Element in a Sorted Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
  summary: "Find the unpaired value in O(log n) via pair parity.",
  prompt:
    "A sorted array has every element appearing exactly twice except one. Find " +
    "that single element in O(log n) time and O(1) space.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 60.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 2, 3, 3, 4, 4, 8, 8],
  defaultOptions: {},
  buildSteps: (input) => singleElementSteps(input),
  Renderer: SingleElementRenderer,
};
