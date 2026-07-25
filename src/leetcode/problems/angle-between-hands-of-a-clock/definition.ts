import type { LeetCodeProblem } from "../../types";
import type { ClockData } from "./algorithm";
import { clockSteps } from "./algorithm";
import { CODE } from "./code";
import { ClockRenderer } from "./ClockRenderer";

interface ClockInput {
  hour: number;
  minutes: number;
}

export const angleBetweenClockHandsProblem: LeetCodeProblem<ClockInput, ClockData, Record<string, never>> = {
  id: "angle-between-hands-of-a-clock",
  number: 1344,
  title: "Angle Between Hands of a Clock",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/angle-between-hands-of-a-clock/",
  summary: "Convert each hand to degrees (minute drifts the hour hand), take the smaller arc.",
  prompt:
    "Given the hour and minutes shown on an analog clock, return the smaller angle (in degrees) " +
    "between the hour and minute hands.",
  topics: ["Math"],
  tags: ["Math"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ hour: 3, minutes: 30 }),
  defaultOptions: {},
  buildSteps: (input) => clockSteps(input.hour, input.minutes),
  Renderer: ClockRenderer,
};
