import type { LeetCodeProblem } from "../../types";
import type { EvalDivData } from "./algorithm";
import { evalDivSteps } from "./algorithm";
import { CODE } from "./code";
import { EvalDivRenderer } from "./EvalDivRenderer";

interface EvalDivInput {
  equations: [string, string][];
  values: number[];
  queries: [string, string][];
}

export const evaluateDivisionProblem: LeetCodeProblem<EvalDivInput, EvalDivData, Record<string, never>> = {
  id: "evaluate-division",
  number: 399,
  title: "Evaluate Division",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/evaluate-division/",
  summary: "Model ratios as a weighted graph; a query is a product along a path (DFS).",
  prompt:
    "You are given equations like a / b = 2.0 and must answer division queries such as " +
    "a / c. Return the value of each query, or -1 if it cannot be determined. " +
    "(This visualization walks the first query.)",
  topics: ["Array", "Depth-First Search", "Union Find", "Graph", "Shortest Path"],
  tags: ["Array", "Depth-First Search", "Union Find", "Graph"],
  companies: ["Bloomberg"],
  frequency: 60.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(q·(V+E))", timeWorst: "O(q·(V+E))", space: "O(V+E)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    equations: [
      ["a", "b"],
      ["b", "c"],
    ],
    values: [2.0, 3.0],
    queries: [
      ["a", "c"],
      ["b", "a"],
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => evalDivSteps(input.equations, input.values, input.queries),
  Renderer: EvalDivRenderer,
};
