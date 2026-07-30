import type { LeetCodeProblem } from "../../types";
import type { DistinctIslandsData } from "./algorithm";
import { distinctIslandsSteps } from "./algorithm";
import { CODE } from "./code";
import { DistinctIslandsRenderer } from "./DistinctIslandsRenderer";

export const numberDistinctIslandsProblem: LeetCodeProblem<number[][], DistinctIslandsData, Record<string, never>> = {
  id: "number-of-distinct-islands",
  number: 694,
  title: "Number of Distinct Islands",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-distinct-islands/",
  summary: "Flood-fill each island and record its cell offsets from an anchor; count the distinct shape signatures.",
  prompt:
    "Count the number of distinct island shapes in a binary grid, where two islands are the same if one can " +
    "be translated (not rotated/reflected) onto the other.",
  topics: ["Array", "Hash Table", "DFS", "BFS", "Matrix"],
  tags: ["DFS", "Hash Table", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => distinctIslandsSteps(input),
  Renderer: DistinctIslandsRenderer,
};
