import type { LeetCodeProblem } from "../../types";
import type { BitFlipsData } from "./algorithm";
import { bitFlipsSteps } from "./algorithm";
import { CODE } from "./code";
import { BitFlipsRenderer } from "./BitFlipsRenderer";

interface BitFlipsInput {
  start: number;
  goal: number;
}

export const minimumBitFlipsProblem: LeetCodeProblem<BitFlipsInput, BitFlipsData, Record<string, never>> = {
  id: "minimum-bit-flips-to-convert-number",
  number: 2220,
  title: "Minimum Bit Flips to Convert Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
  summary: "Count the set bits of start XOR goal — each differing bit is one required flip.",
  prompt: "Return the minimum number of bit flips needed to convert the integer start into goal.",
  topics: ["Bit Manipulation"],
  tags: ["Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ start: 10, goal: 7 }),
  defaultOptions: {},
  buildSteps: (input) => bitFlipsSteps(input.start, input.goal),
  Renderer: BitFlipsRenderer,
};
