import type { LeetCodeProblem } from "../../types";
import type { LunchData } from "./algorithm";
import { lunchSteps } from "./algorithm";
import { CODE } from "./code";
import { LunchRenderer } from "./LunchRenderer";

interface LunchInput {
  students: number[];
  sandwiches: number[];
}

export const studentsUnableToEatProblem: LeetCodeProblem<LunchInput, LunchData, Record<string, never>> = {
  id: "number-of-students-unable-to-eat-lunch",
  number: 1700,
  title: "Number of Students Unable to Eat Lunch",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/",
  summary: "Only preference counts matter; serve the stack until nobody wants the top.",
  prompt:
    "Students (0 = circular, 1 = square preference) queue for a stack of sandwiches. A " +
    "student at the front takes the top sandwich if it matches, else goes to the back. " +
    "Return how many students never eat.",
  topics: ["Array", "Stack", "Queue", "Simulation"],
  tags: ["Array", "Stack", "Queue", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ students: [1, 1, 0, 0], sandwiches: [0, 1, 0, 1] }),
  defaultOptions: {},
  buildSteps: (input) => lunchSteps(input.students, input.sandwiches),
  Renderer: LunchRenderer,
};
