import type { LeetCodeProblem } from "../../types";
import type { ExclusiveData } from "./algorithm";
import { exclusiveSteps } from "./algorithm";
import { CODE } from "./code";
import { ExclusiveRenderer } from "./ExclusiveRenderer";

interface ExclusiveInput {
  n: number;
  logs: string[];
}

export const exclusiveTimeProblem: LeetCodeProblem<ExclusiveInput, ExclusiveData, Record<string, never>> = {
  id: "exclusive-time-of-functions",
  number: 636,
  title: "Exclusive Time of Functions",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/exclusive-time-of-functions/",
  summary: "A call stack over start/end logs: each start credits the gap to the running fn; each end credits the popped fn inclusively.",
  prompt:
    "Given n functions and their start/end logs on a single-threaded CPU, return the exclusive time of each " +
    "function (time spent in it, excluding time in nested calls).",
  topics: ["Array", "Stack"],
  tags: ["Stack", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m)", timeWorst: "O(m)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 2, logs: ["0:start:0", "1:start:2", "1:end:5", "0:end:6"] }),
  defaultOptions: {},
  buildSteps: (input) => exclusiveSteps(input.n, input.logs),
  Renderer: ExclusiveRenderer,
};
