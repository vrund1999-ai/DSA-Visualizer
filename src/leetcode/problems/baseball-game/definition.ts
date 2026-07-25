import type { LeetCodeProblem } from "../../types";
import type { BaseballData } from "./algorithm";
import { baseballSteps } from "./algorithm";
import { CODE } from "./code";
import { BaseballRenderer } from "./BaseballRenderer";

export const baseballGameProblem: LeetCodeProblem<string[], BaseballData, Record<string, never>> = {
  id: "baseball-game",
  number: 682,
  title: "Baseball Game",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/baseball-game/",
  summary: "Replay operations on a score stack: number pushes, 'D' doubles, '+' sums two, 'C' cancels.",
  prompt:
    "Given a list of operations (an integer, 'C', 'D', or '+') applied to a running record of " +
    "scores, return the sum of all scores remaining after all operations.",
  topics: ["Array", "Stack", "Simulation"],
  tags: ["Array", "Stack", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ["5", "2", "C", "D", "+"],
  defaultOptions: {},
  buildSteps: (input) => baseballSteps(input),
  Renderer: BaseballRenderer,
};
