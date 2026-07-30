import type { LeetCodeProblem } from "../../types";
import type { Nested, NestedIteratorData } from "./algorithm";
import { nestedIteratorSteps } from "./algorithm";
import { CODE } from "./code";
import { NestedIteratorRenderer } from "./NestedIteratorRenderer";

interface NestedIteratorInput {
  nestedList: Nested[];
}

export const flattenNestedIteratorProblem: LeetCodeProblem<NestedIteratorInput, NestedIteratorData, Record<string, never>> = {
  id: "flatten-nested-list-iterator",
  number: 341,
  title: "Flatten Nested List Iterator",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/flatten-nested-list-iterator/",
  summary: "A depth-first pass collects every integer from the nested structure; next()/hasNext() then walk that flat list.",
  prompt:
    "Given a nested list of integers, implement an iterator that flattens it: next() returns the next " +
    "integer in depth-first order and hasNext() reports whether any remain.",
  topics: ["Stack", "Tree", "Depth-First Search", "Design", "Iterator"],
  tags: ["Design", "DFS", "Stack"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nestedList: [[1, 1], 2, [1, 1]] }),
  defaultOptions: {},
  buildSteps: (input) => nestedIteratorSteps(input.nestedList),
  Renderer: NestedIteratorRenderer,
};
