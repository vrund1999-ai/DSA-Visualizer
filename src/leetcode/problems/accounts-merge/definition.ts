import type { LeetCodeProblem } from "../../types";
import type { AccountsData } from "./algorithm";
import { accountsSteps } from "./algorithm";
import { CODE } from "./code";
import { AccountsRenderer } from "./AccountsRenderer";

export const accountsMergeProblem: LeetCodeProblem<string[][], AccountsData, Record<string, never>> = {
  id: "accounts-merge",
  number: 721,
  title: "Accounts Merge",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/accounts-merge/",
  summary: "Union-Find on shared emails merges accounts that belong to one person.",
  prompt:
    "Each account is a name followed by emails. Two accounts belong to the same person if " +
    "they share any email. Merge them, returning each person's name with all their emails " +
    "in sorted order.",
  topics: ["Array", "Hash Table", "String", "Union Find", "Sorting"],
  tags: ["Array", "Hash Table", "Union Find", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(N·α + N log N)", timeWorst: "O(N log N)", space: "O(N)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["John", "a@x.com", "b@x.com"],
    ["John", "b@x.com", "c@x.com"],
    ["Mary", "m@x.com"],
    ["John", "d@x.com"],
  ],
  defaultOptions: {},
  buildSteps: (input) => accountsSteps(input),
  Renderer: AccountsRenderer,
};
