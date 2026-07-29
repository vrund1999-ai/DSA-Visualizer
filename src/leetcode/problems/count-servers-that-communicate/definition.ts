import type { LeetCodeProblem } from "../../types";
import type { ServersData } from "./algorithm";
import { serversSteps } from "./algorithm";
import { CODE } from "./code";
import { ServersRenderer } from "./ServersRenderer";

export const countServersProblem: LeetCodeProblem<number[][], ServersData, Record<string, never>> = {
  id: "count-servers-that-communicate",
  number: 1267,
  title: "Count Servers that Communicate",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-servers-that-communicate/",
  summary: "Tally servers per row and column; a server communicates if its row or column holds more than one.",
  prompt:
    "In a grid where 1 marks a server, two servers communicate if they share a row or column. Return " +
    "the number of servers that can communicate with at least one other server.",
  topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix", "Counting"],
  tags: ["Array", "Matrix", "Counting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m + n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => serversSteps(input),
  Renderer: ServersRenderer,
};
