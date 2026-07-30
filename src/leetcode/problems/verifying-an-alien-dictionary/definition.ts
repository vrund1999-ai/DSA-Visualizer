import type { LeetCodeProblem } from "../../types";
import type { AlienData } from "./algorithm";
import { alienSteps } from "./algorithm";
import { CODE } from "./code";
import { AlienRenderer } from "./AlienRenderer";

interface AlienInput {
  words: string[];
  order: string;
}

export const verifyingAlienDictionaryProblem: LeetCodeProblem<AlienInput, AlienData, Record<string, never>> = {
  id: "verifying-an-alien-dictionary",
  number: 953,
  title: "Verifying an Alien Dictionary",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/verifying-an-alien-dictionary/",
  summary: "Rank letters by the alien order, then confirm every adjacent word pair is non-decreasing.",
  prompt:
    "Given a list of words and the order of the alphabet in an alien language, return true if the words " +
    "are sorted lexicographically according to that order.",
  topics: ["Array", "Hash Table", "String"],
  tags: ["Array", "String"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(total chars)", timeWorst: "O(total chars)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ words: ["word", "world", "row"], order: "worldabcefghijkmnpqstuvxyz" }),
  defaultOptions: {},
  buildSteps: (input) => alienSteps(input.words, input.order),
  Renderer: AlienRenderer,
};
