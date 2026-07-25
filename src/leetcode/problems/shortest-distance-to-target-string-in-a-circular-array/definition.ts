import type { LeetCodeProblem } from "../../types";
import type { CircularDistData } from "./algorithm";
import { circularDistSteps } from "./algorithm";
import { CODE } from "./code";
import { CircularDistRenderer } from "./CircularDistRenderer";

interface CircularDistInput {
  words: string[];
  target: string;
  startIndex: number;
}

export const circularDistanceProblem: LeetCodeProblem<CircularDistInput, CircularDistData, Record<string, never>> = {
  id: "shortest-distance-to-target-string-in-a-circular-array",
  number: 2515,
  title: "Shortest Distance to Target String in a Circular Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/",
  summary: "Circular distance min(|i−start|, n−|i−start|) over every target occurrence.",
  prompt:
    "In a circular array of words, return the minimum number of steps (moving left or " +
    "right) from startIndex to reach any occurrence of target, or -1 if absent.",
  topics: ["Array", "String"],
  tags: ["Array", "String"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ words: ["hello", "i", "am", "leetcode", "hello"], target: "hello", startIndex: 1 }),
  defaultOptions: {},
  buildSteps: (input) => circularDistSteps(input.words, input.target, input.startIndex),
  Renderer: CircularDistRenderer,
};
