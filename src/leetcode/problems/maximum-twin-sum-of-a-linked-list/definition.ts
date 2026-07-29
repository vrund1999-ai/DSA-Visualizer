import type { LeetCodeProblem } from "../../types";
import type { TwinSumData } from "./algorithm";
import { twinSumSteps } from "./algorithm";
import { CODE } from "./code";
import { TwinSumRenderer } from "./TwinSumRenderer";

export const maximumTwinSumProblem: LeetCodeProblem<number[], TwinSumData, Record<string, never>> = {
  id: "maximum-twin-sum-of-a-linked-list",
  number: 2130,
  title: "Maximum Twin Sum of a Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/",
  summary: "Twins are symmetric about the middle; converge two pointers and take the max pair sum.",
  prompt:
    "In a linked list of even length n, node i's twin is node n−1−i. Return the maximum sum over all " +
    "twin pairs.",
  topics: ["Linked List", "Two Pointers", "Stack"],
  tags: ["Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 4, 2, 1],
  defaultOptions: {},
  buildSteps: (input) => twinSumSteps(input),
  Renderer: TwinSumRenderer,
};
