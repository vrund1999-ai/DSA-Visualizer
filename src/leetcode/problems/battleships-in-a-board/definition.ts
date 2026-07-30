import type { LeetCodeProblem } from "../../types";
import type { BattleData } from "./algorithm";
import { battleSteps } from "./algorithm";
import { CODE } from "./code";
import { BattleRenderer } from "./BattleRenderer";

export const battleshipsInBoardProblem: LeetCodeProblem<string[][], BattleData, Record<string, never>> = {
  id: "battleships-in-a-board",
  number: 419,
  title: "Battleships in a Board",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/battleships-in-a-board/",
  summary: "Count each ship once at its top-left cell — an 'X' with no 'X' directly above or to the left.",
  prompt:
    "Count the battleships on a board. Ships are placed horizontally or vertically as runs of 'X' and " +
    "never touch each other. Solve in one pass without modifying the board.",
  topics: ["Array", "Matrix"],
  tags: ["Array", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["X", ".", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "X"],
  ],
  defaultOptions: {},
  buildSteps: (input) => battleSteps(input),
  Renderer: BattleRenderer,
};
