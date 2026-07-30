import type { LeetCodeProblem } from "../../types";
import type { WatchData } from "./algorithm";
import { watchSteps } from "./algorithm";
import { CODE } from "./code";
import { WatchRenderer } from "./WatchRenderer";

export const binaryWatchProblem: LeetCodeProblem<number, WatchData, Record<string, never>> = {
  id: "binary-watch",
  number: 401,
  title: "Binary Watch",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/binary-watch/",
  summary: "Each LED is a bit of the hour or minute; enumerate all times whose total lit-bit count equals turnedOn.",
  prompt:
    "A binary watch has 4 LEDs for the hour (0–11) and 6 for the minutes (0–59), each showing a bit. Given " +
    "the number of LEDs currently on, return all possible times.",
  topics: ["Backtracking", "Bit Manipulation"],
  tags: ["Bit Manipulation", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(720)", timeWorst: "O(720)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 2,
  defaultOptions: {},
  buildSteps: (input) => watchSteps(input),
  Renderer: WatchRenderer,
};
