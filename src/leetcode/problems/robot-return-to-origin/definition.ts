import type { LeetCodeProblem } from "../../types";
import type { RobotData } from "./algorithm";
import { robotSteps } from "./algorithm";
import { CODE } from "./code";
import { RobotRenderer } from "./RobotRenderer";

export const robotReturnToOriginProblem: LeetCodeProblem<string, RobotData, Record<string, never>> = {
  id: "robot-return-to-origin",
  number: 657,
  title: "Robot Return to Origin",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/robot-return-to-origin/",
  summary: "Track (x, y) through the moves; the robot returns iff the net displacement is zero.",
  prompt:
    "A robot at (0, 0) follows a string of moves ('U', 'D', 'L', 'R'). Return true if it ends back at " +
    "the origin.",
  topics: ["String", "Simulation"],
  tags: ["String", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "UDLRUURD",
  defaultOptions: {},
  buildSteps: (input) => robotSteps(input),
  Renderer: RobotRenderer,
};
