import type { LeetCodeProblem } from "../../types";
import type { RankData } from "./algorithm";
import { rankSteps } from "./algorithm";
import { CODE } from "./code";
import { RankRenderer } from "./RankRenderer";

export const rankTeamsByVotesProblem: LeetCodeProblem<string[], RankData, Record<string, never>> = {
  id: "rank-teams-by-votes",
  number: 1366,
  title: "Rank Teams by Votes",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/rank-teams-by-votes/",
  summary: "Tally each team's votes per position, then sort by that count vector, ties broken alphabetically.",
  prompt:
    "Each voter ranks all teams. Rank the teams by the number of first-place votes; break ties by " +
    "second-place votes, then third, and so on; a final tie is broken alphabetically.",
  topics: ["Array", "Hash Table", "Sorting", "Counting"],
  tags: ["Sorting", "Counting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(V·T + T² log T)", timeWorst: "O(V·T + T² log T)", space: "O(T²)" },
  inputSchema: [],
  makeDefaultInput: () => ["ABC", "ACB", "ABC", "ACB", "ACB"],
  defaultOptions: {},
  buildSteps: (input) => rankSteps(input),
  Renderer: RankRenderer,
};
