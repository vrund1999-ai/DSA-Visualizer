import type { LeetCodeProblem } from "../../types";
import type { AlternatingData } from "./algorithm";
import { alternatingSteps } from "./algorithm";
import { CODE } from "./code";
import { AlternatingRenderer } from "./AlternatingRenderer";

interface AlternatingInput {
  colors: number[];
  k: number;
}

export const alternatingGroupsIIProblem: LeetCodeProblem<AlternatingInput, AlternatingData, Record<string, never>> = {
  id: "alternating-groups-ii",
  number: 3208,
  title: "Alternating Groups II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/alternating-groups-ii/",
  summary: "Slide a length-k window around the circular tile row and count windows whose adjacent colors all differ.",
  prompt:
    "Tiles are arranged in a circle, each colored 0 or 1. An alternating group is k contiguous tiles where " +
    "every pair of adjacent tiles has different colors. Return the number of alternating groups.",
  topics: ["Array", "Sliding Window"],
  tags: ["Sliding Window", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·k)", timeWorst: "O(n·k)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ colors: [0, 1, 0, 1, 0], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => alternatingSteps(input.colors, input.k),
  Renderer: AlternatingRenderer,
};
