import type { LeetCodeProblem } from "../../types";
import type { EliminationData } from "./algorithm";
import { eliminationSteps } from "./algorithm";
import { CODE } from "./code";
import { EliminationRenderer } from "./EliminationRenderer";

export const eliminationGameProblem: LeetCodeProblem<number, EliminationData, Record<string, never>> = {
  id: "elimination-game",
  number: 390,
  title: "Elimination Game",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/elimination-game/",
  summary: "Track only the head survivor and gap; each pass doubles the gap and halves the count.",
  prompt:
    "Start with 1..n. Repeatedly remove every other number, alternating direction left→right " +
    "then right→left, until one remains. Return that number.",
  topics: ["Math"],
  tags: ["Math"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 9,
  defaultOptions: {},
  buildSteps: (input) => eliminationSteps(input),
  Renderer: EliminationRenderer,
};
