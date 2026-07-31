import type { LeetCodeProblem } from "../../types";
import type { DistanceValueData } from "./algorithm";
import { distanceValueSteps } from "./algorithm";
import { CODE } from "./code";
import { DistanceValueRenderer } from "./DistanceValueRenderer";

interface DistanceValueInput {
  arr1: number[];
  arr2: number[];
  d: number;
}

export const distanceValueProblem: LeetCodeProblem<DistanceValueInput, DistanceValueData, Record<string, never>> = {
  id: "find-the-distance-value-between-two-arrays",
  number: 1385,
  title: "Find the Distance Value Between Two Arrays",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-the-distance-value-between-two-arrays/",
  summary: "Count the arr1 values that have no arr2 value within distance d.",
  prompt:
    "The distance value is the number of elements a in arr1 such that there is no element b in arr2 with " +
    "|a − b| ≤ d. Return it.",
  topics: ["Array", "Two Pointers", "Binary Search", "Sorting"],
  tags: ["Array", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr1: [4, 5, 8], arr2: [10, 9, 1, 8], d: 2 }),
  defaultOptions: {},
  buildSteps: (input) => distanceValueSteps(input.arr1, input.arr2, input.d),
  Renderer: DistanceValueRenderer,
};
