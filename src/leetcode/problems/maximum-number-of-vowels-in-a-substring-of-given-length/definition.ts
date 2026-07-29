import type { LeetCodeProblem } from "../../types";
import type { MaxVowelsData } from "./algorithm";
import { maxVowelsSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxVowelsRenderer } from "./MaxVowelsRenderer";

interface MaxVowelsInput {
  s: string;
  k: number;
}

export const maximumVowelsSubstringProblem: LeetCodeProblem<MaxVowelsInput, MaxVowelsData, Record<string, never>> = {
  id: "maximum-number-of-vowels-in-a-substring-of-given-length",
  number: 1456,
  title: "Maximum Number of Vowels in a Substring of Given Length",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
  summary: "Slide a length-k window, adding the entering vowel and removing the exiting one.",
  prompt: "Given a string s and integer k, return the maximum number of vowels in any substring of s of length k.",
  topics: ["String", "Sliding Window"],
  tags: ["String", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "abciiidef", k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => maxVowelsSteps(input.s, input.k),
  Renderer: MaxVowelsRenderer,
};
