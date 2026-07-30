import type { LeetCodeProblem } from "../../types";
import type { ShortCharData } from "./algorithm";
import { shortCharSteps } from "./algorithm";
import { CODE } from "./code";
import { ShortCharRenderer } from "./ShortCharRenderer";

interface ShortCharInput {
  s: string;
  c: string;
}

export const shortestDistanceToCharProblem: LeetCodeProblem<ShortCharInput, ShortCharData, Record<string, never>> = {
  id: "shortest-distance-to-a-character",
  number: 821,
  title: "Shortest Distance to a Character",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/shortest-distance-to-a-character/",
  summary: "Two sweeps — one from each side — record the distance to the nearest target character.",
  prompt:
    "Given a string s and a character c that occurs in s, return an array where each entry is the " +
    "distance from that index to the nearest occurrence of c.",
  topics: ["Array", "Two Pointers", "String"],
  tags: ["Array", "String"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "loveleetcode", c: "e" }),
  defaultOptions: {},
  buildSteps: (input) => shortCharSteps(input.s, input.c),
  Renderer: ShortCharRenderer,
};
