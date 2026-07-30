import type { LeetCodeProblem } from "../../types";
import type { DivideData } from "./algorithm";
import { divideSteps } from "./algorithm";
import { CODE } from "./code";
import { DivideRenderer } from "./DivideRenderer";

interface DivideInput {
  nums: number[];
  k: number;
}

export const divideArrayMaxDiffProblem: LeetCodeProblem<DivideInput, DivideData, Record<string, never>> = {
  id: "divide-array-into-arrays-with-max-difference",
  number: 2966,
  title: "Divide Array Into Arrays With Max Difference",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/",
  summary: "Sort and group consecutive triples; each is valid iff its max minus min is at most k.",
  prompt:
    "Divide an array of 3m integers into m groups of three such that each group's max minus min is at most " +
    "k. Return any valid division, or an empty array if impossible.",
  topics: ["Array", "Greedy", "Sorting"],
  tags: ["Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 3, 4, 8, 7, 9, 3, 5, 1], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => divideSteps(input.nums, input.k),
  Renderer: DivideRenderer,
};
