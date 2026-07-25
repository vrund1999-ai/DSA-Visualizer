import type { LeetCodeProblem } from "../../types";
import type { PartitionListData } from "./algorithm";
import { partitionListSteps } from "./algorithm";
import { CODE } from "./code";
import { PartitionListRenderer } from "./PartitionListRenderer";

interface PartitionListInput {
  values: number[];
  x: number;
}

export const partitionListProblem: LeetCodeProblem<PartitionListInput, PartitionListData, Record<string, never>> = {
  id: "partition-list",
  number: 86,
  title: "Partition List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/partition-list/",
  summary: "Two lists collect nodes < x and ≥ x in order, then concatenate.",
  prompt:
    "Given the head of a linked list and a value x, partition it so all nodes less than x " +
    "come before nodes greater than or equal to x, preserving the original relative order " +
    "within each partition.",
  topics: ["Linked List", "Two Pointers"],
  tags: ["Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [1, 4, 3, 2, 5, 2], x: 3 }),
  defaultOptions: {},
  buildSteps: (input) => partitionListSteps(input.values, input.x),
  Renderer: PartitionListRenderer,
};
