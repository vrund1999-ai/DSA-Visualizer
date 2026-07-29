import type { LeetCodeProblem } from "../../types";
import type { AltitudeData } from "./algorithm";
import { altitudeSteps } from "./algorithm";
import { CODE } from "./code";
import { AltitudeRenderer } from "./AltitudeRenderer";

export const findHighestAltitudeProblem: LeetCodeProblem<number[], AltitudeData, Record<string, never>> = {
  id: "find-the-highest-altitude",
  number: 1732,
  title: "Find the Highest Altitude",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-the-highest-altitude/",
  summary: "Accumulate the gains into a running altitude (prefix sum) and track the maximum.",
  prompt:
    "A biker starts at altitude 0. gain[i] is the net gain over the i-th step. Return the highest " +
    "altitude reached at any point.",
  topics: ["Array", "Prefix Sum"],
  tags: ["Array", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [-5, 1, 5, 0, -7],
  defaultOptions: {},
  buildSteps: (input) => altitudeSteps(input),
  Renderer: AltitudeRenderer,
};
