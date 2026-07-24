import type { LeetCodeProblem } from "../../types";
import type { RecentCallsData } from "./algorithm";
import { recentCallsSteps } from "./algorithm";
import { CODE } from "./code";
import { RecentCallsRenderer } from "./RecentCallsRenderer";

export const numberOfRecentCallsProblem: LeetCodeProblem<number[], RecentCallsData, Record<string, never>> = {
  id: "number-of-recent-calls",
  number: 933,
  title: "Number of Recent Calls",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/number-of-recent-calls/",
  summary: "A queue evicts timestamps older than 3000 ms; its size is the answer.",
  prompt:
    "Implement RecentCounter.ping(t): given strictly increasing timestamps, return how " +
    "many pings occurred in the inclusive range [t − 3000, t].",
  topics: ["Design", "Queue", "Data Stream"],
  tags: ["Design", "Queue", "Data Stream"],
  companies: ["Bloomberg"],
  frequency: 51.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) amortized", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 100, 3001, 3002, 6500],
  defaultOptions: {},
  buildSteps: (input) => recentCallsSteps(input),
  Renderer: RecentCallsRenderer,
};
