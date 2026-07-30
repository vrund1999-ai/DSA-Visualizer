import type { LeetCodeProblem } from "../../types";
import type { GroupData } from "./algorithm";
import { groupSteps } from "./algorithm";
import { CODE } from "./code";
import { GroupRenderer } from "./GroupRenderer";

export const groupThePeopleProblem: LeetCodeProblem<number[], GroupData, Record<string, never>> = {
  id: "group-the-people-given-the-group-size-they-belong-to",
  number: 1282,
  title: "Group the People Given the Group Size They Belong To",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/",
  summary: "Bucket people by their required group size and flush a bucket into a group the moment it fills.",
  prompt:
    "Each person i belongs to a group of size groupSizes[i]. Partition everyone into groups so each " +
    "person's group has exactly their stated size. Return any valid grouping.",
  topics: ["Array", "Hash Table"],
  tags: ["Hash Table", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 3, 3, 3, 3, 1, 3],
  defaultOptions: {},
  buildSteps: (input) => groupSteps(input),
  Renderer: GroupRenderer,
};
