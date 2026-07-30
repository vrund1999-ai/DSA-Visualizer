import type { LeetCodeProblem } from "../../types";
import type { RobotData } from "./algorithm";
import { robotSteps } from "./algorithm";
import { CODE } from "./code";
import { RobotRenderer } from "./RobotRenderer";

export const robotBoundedProblem: LeetCodeProblem<string, RobotData, Record<string, never>> = {
  id: "robot-bounded-in-circle",
  number: 1041,
  title: "Robot Bounded In Circle",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/robot-bounded-in-circle/",
  summary: "Simulate one cycle; the robot stays bounded iff it returns to the origin or no longer faces north.",
  prompt:
    "A robot at the origin facing north follows a string of instructions ('G' forward, 'L' turn left, " +
    "'R' turn right), repeated forever. Return true if it stays within some circle.",
  topics: ["Math", "Simulation"],
  tags: ["Math", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "GLRLLGLL",
  defaultOptions: {},
  buildSteps: (input) => robotSteps(input),
  Renderer: RobotRenderer,
};
