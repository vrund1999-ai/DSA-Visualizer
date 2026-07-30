import type { LeetCodeProblem } from "../../types";
import type { TimeDiffData } from "./algorithm";
import { timeDiffSteps } from "./algorithm";
import { CODE } from "./code";
import { TimeDiffRenderer } from "./TimeDiffRenderer";

export const minimumTimeDifferenceProblem: LeetCodeProblem<string[], TimeDiffData, Record<string, never>> = {
  id: "minimum-time-difference",
  number: 539,
  title: "Minimum Time Difference",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-time-difference/",
  summary: "Sort the minute values; the closest pair is adjacent in sorted order or wraps around midnight.",
  prompt:
    "Given a list of 24-hour times in 'HH:MM' format, return the minimum difference in minutes between any " +
    "two times (treating the clock as circular).",
  topics: ["Array", "Math", "String", "Sorting"],
  tags: ["Sorting", "Math"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ["23:59", "00:00", "12:30", "06:15"],
  defaultOptions: {},
  buildSteps: (input) => timeDiffSteps(input),
  Renderer: TimeDiffRenderer,
};
