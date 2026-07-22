import type { LeetCodeProblem } from "../../types";
import type { DailyTempData } from "./algorithm";
import { dailyTempSteps } from "./algorithm";
import { CODE } from "./code";
import { DailyTempRenderer } from "./DailyTempRenderer";

export const dailyTemperaturesProblem: LeetCodeProblem<
  number[],
  DailyTempData,
  Record<string, never>
> = {
  id: "daily-temperatures",
  number: 739,
  title: "Daily Temperatures",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/daily-temperatures/",
  summary: "Days until a warmer temperature, via a monotonic stack.",
  prompt:
    "Given daily `temperatures`, return an array where answer[i] is the number " +
    "of days you must wait after day i for a warmer temperature, or 0 if none.",
  topics: ["Array", "Stack", "Monotonic Stack"],
  tags: ["Array", "Stack", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 54.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [73, 74, 75, 71, 69, 72, 76, 73],
  defaultOptions: {},
  buildSteps: (input) => dailyTempSteps(input),
  Renderer: DailyTempRenderer,
};
