import type { LeetCodeProblem } from "../../types";
import type { BullsData } from "./algorithm";
import { bullsSteps } from "./algorithm";
import { CODE } from "./code";
import { BullsRenderer } from "./BullsRenderer";

interface BullsInput {
  secret: string;
  guess: string;
}

export const bullsAndCowsProblem: LeetCodeProblem<BullsInput, BullsData, Record<string, never>> = {
  id: "bulls-and-cows",
  number: 299,
  title: "Bulls and Cows",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/bulls-and-cows/",
  summary: "Count exact-position matches (bulls); cows are the per-digit overlap among the remaining digits.",
  prompt:
    "Given a secret number and a guess (equal-length digit strings), return the hint 'xAyB' where x is " +
    "the count of bulls (correct digit and position) and y the cows (correct digit, wrong position).",
  topics: ["Hash Table", "String", "Counting"],
  tags: ["Hash Table", "String"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ secret: "1807", guess: "7810" }),
  defaultOptions: {},
  buildSteps: (input) => bullsSteps(input.secret, input.guess),
  Renderer: BullsRenderer,
};
