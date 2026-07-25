import type { LeetCodeProblem } from "../../types";
import type { ThreeCharsData } from "./algorithm";
import { threeCharsSteps } from "./algorithm";
import { CODE } from "./code";
import { ThreeCharsRenderer } from "./ThreeCharsRenderer";

export const numberOfSubstringsThreeCharsProblem: LeetCodeProblem<string, ThreeCharsData, Record<string, never>> = {
  id: "number-of-substrings-containing-all-three-characters",
  number: 1358,
  title: "Number of Substrings Containing All Three Characters",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
  summary: "Count substrings ending at i via the minimum last-seen index of a, b, c.",
  prompt:
    "Given a string s of only a, b and c, return the number of substrings that contain at " +
    "least one occurrence of all three characters.",
  topics: ["Hash Table", "String", "Sliding Window"],
  tags: ["Hash Table", "String", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "abcabc",
  defaultOptions: {},
  buildSteps: (input) => threeCharsSteps(input),
  Renderer: ThreeCharsRenderer,
};
