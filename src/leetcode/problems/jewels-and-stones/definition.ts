import type { LeetCodeProblem } from "../../types";
import type { JewelsData } from "./algorithm";
import { jewelsSteps } from "./algorithm";
import { CODE } from "./code";
import { JewelsRenderer } from "./JewelsRenderer";

interface JewelsInput {
  jewels: string;
  stones: string;
}

export const jewelsAndStonesProblem: LeetCodeProblem<JewelsInput, JewelsData, Record<string, never>> = {
  id: "jewels-and-stones",
  number: 771,
  title: "Jewels and Stones",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/jewels-and-stones/",
  summary: "Set of jewel types, then count matching stones in one pass.",
  prompt:
    "Given a string jewels (each character a type of jewel) and a string stones, return " +
    "how many of the stones are also jewels.",
  topics: ["Hash Table", "String"],
  tags: ["Hash Table", "String"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ jewels: "aA", stones: "aAAbbbb" }),
  defaultOptions: {},
  buildSteps: (input) => jewelsSteps(input.jewels, input.stones),
  Renderer: JewelsRenderer,
};
