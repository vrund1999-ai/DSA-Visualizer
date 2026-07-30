import type { LeetCodeProblem } from "../../types";
import type { TargetArrayData } from "./algorithm";
import { targetArraySteps } from "./algorithm";
import { CODE } from "./code";
import { TargetArrayRenderer } from "./TargetArrayRenderer";

interface TargetArrayInput {
  nums: number[];
  index: number[];
}

export const createTargetArrayProblem: LeetCodeProblem<TargetArrayInput, TargetArrayData, Record<string, never>> = {
  id: "create-target-array-in-the-given-order",
  number: 1389,
  title: "Create Target Array in the Given Order",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/create-target-array-in-the-given-order/",
  summary: "Insert each value at its given index in order, shifting later elements right.",
  prompt:
    "Given arrays nums and index, build target by inserting nums[i] at position index[i] for each i in " +
    "order. Return the final target array.",
  topics: ["Array", "Simulation"],
  tags: ["Simulation", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [0, 1, 2, 3, 4], index: [0, 1, 2, 2, 1] }),
  defaultOptions: {},
  buildSteps: (input) => targetArraySteps(input.nums, input.index),
  Renderer: TargetArrayRenderer,
};
