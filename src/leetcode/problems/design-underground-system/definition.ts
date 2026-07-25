import type { LeetCodeProblem } from "../../types";
import type { UndergroundData, UndergroundOp } from "./algorithm";
import { undergroundSteps } from "./algorithm";
import { CODE } from "./code";
import { UndergroundRenderer } from "./UndergroundRenderer";

export const designUndergroundSystemProblem: LeetCodeProblem<UndergroundOp[], UndergroundData, Record<string, never>> = {
  id: "design-underground-system",
  number: 1396,
  title: "Design Underground System",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/design-underground-system/",
  summary: "One map holds in-progress trips; another accumulates each route's total time and count.",
  prompt:
    "Design a system tracking passenger travel times: checkIn(id, station, t), checkOut(id, station, t), " +
    "and getAverageTime(startStation, endStation) returning the average trip duration on that route.",
  topics: ["Hash Table", "String", "Design"],
  tags: ["Hash Table", "Design"],
  companies: ["Bloomberg"],
  frequency: 71.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) per op", timeWorst: "O(1) per op", space: "O(P + R)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["checkIn", 45, "Leyton", 3],
    ["checkIn", 32, "Paradise", 8],
    ["checkOut", 45, "Waterloo", 15],
    ["checkOut", 32, "Cambridge", 22],
    ["getAverageTime", "Paradise", "Cambridge"],
    ["checkIn", 10, "Leyton", 24],
    ["checkOut", 10, "Waterloo", 38],
    ["getAverageTime", "Leyton", "Waterloo"],
  ],
  defaultOptions: {},
  buildSteps: (input) => undergroundSteps(input),
  Renderer: UndergroundRenderer,
};
