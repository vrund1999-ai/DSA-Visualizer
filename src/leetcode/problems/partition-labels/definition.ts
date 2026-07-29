import type { LeetCodeProblem } from "../../types";
import type { PartitionData } from "./algorithm";
import { partitionSteps } from "./algorithm";
import { CODE } from "./code";
import { PartitionRenderer } from "./PartitionRenderer";

export const partitionLabelsProblem: LeetCodeProblem<string, PartitionData, Record<string, never>> = {
  id: "partition-labels",
  number: 763,
  title: "Partition Labels",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/partition-labels/",
  summary: "Extend each partition to the farthest last-occurrence of its characters; cut when reached.",
  prompt:
    "Partition the string into as many parts as possible so that each letter appears in at most one " +
    "part. Return the sizes of these parts in order.",
  topics: ["Hash Table", "Two Pointers", "String", "Greedy"],
  tags: ["Hash Table", "Two Pointers", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "ababcbacadefegdehijhklij",
  defaultOptions: {},
  buildSteps: (input) => partitionSteps(input),
  Renderer: PartitionRenderer,
};
