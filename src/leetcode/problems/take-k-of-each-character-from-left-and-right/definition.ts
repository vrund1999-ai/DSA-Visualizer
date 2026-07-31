import type { LeetCodeProblem } from "../../types";
import type { TakeCharsData } from "./algorithm";
import { takeCharsSteps } from "./algorithm";
import { CODE } from "./code";
import { TakeCharsRenderer } from "./TakeCharsRenderer";

interface TakeCharsInput {
  s: string;
  k: number;
}

export const takeKCharactersProblem: LeetCodeProblem<TakeCharsInput, TakeCharsData, Record<string, never>> = {
  id: "take-k-of-each-character-from-left-and-right",
  number: 2516,
  title: "Take K of Each Character From Left and Right",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/",
  summary: "Flip it: the fewest characters taken from the ends equals n minus the longest window whose outside still holds ≥ k of each.",
  prompt:
    "Each minute you may take one character from the left or right end of s (only 'a','b','c'). Return the " +
    "minimum minutes to collect at least k of each character, or -1 if impossible.",
  topics: ["Hash Table", "String", "Sliding Window"],
  tags: ["Sliding Window", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "aabaaaacaabc", k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => takeCharsSteps(input.s, input.k),
  Renderer: TakeCharsRenderer,
};
