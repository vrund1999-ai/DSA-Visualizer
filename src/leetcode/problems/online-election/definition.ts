import type { LeetCodeProblem } from "../../types";
import type { ElectionData } from "./algorithm";
import { electionSteps } from "./algorithm";
import { CODE } from "./code";
import { ElectionRenderer } from "./ElectionRenderer";

interface ElectionInput {
  persons: number[];
  times: number[];
  queries: number[];
}

export const onlineElectionProblem: LeetCodeProblem<ElectionInput, ElectionData, Record<string, never>> = {
  id: "online-election",
  number: 911,
  title: "Online Election",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/online-election/",
  summary: "Precompute the leader after each vote (ties to the most recent); a query binary-searches the last vote time ≤ t.",
  prompt:
    "Given votes cast at increasing times, answer queries q(t): who was leading at time t? Ties go to the " +
    "most recently leading candidate.",
  topics: ["Array", "Hash Table", "Binary Search", "Design"],
  tags: ["Design", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + q log n)", timeWorst: "O(n + q log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    persons: [0, 1, 1, 0, 0, 1, 0],
    times: [0, 5, 10, 15, 20, 25, 30],
    queries: [3, 12, 25, 15, 24, 8],
  }),
  defaultOptions: {},
  buildSteps: (input) => electionSteps(input.persons, input.times, input.queries),
  Renderer: ElectionRenderer,
};
