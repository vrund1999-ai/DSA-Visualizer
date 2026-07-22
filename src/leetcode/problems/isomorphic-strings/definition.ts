import type { LeetCodeProblem } from "../../types";
import type { IsomorphicData, IsomorphicInput } from "./algorithm";
import { isomorphicSteps } from "./algorithm";
import { CODE } from "./code";
import { IsomorphicRenderer } from "./IsomorphicRenderer";

export const isomorphicStringsProblem: LeetCodeProblem<
  IsomorphicInput,
  IsomorphicData,
  Record<string, never>
> = {
  id: "isomorphic-strings",
  number: 205,
  title: "Isomorphic Strings",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/isomorphic-strings/",
  summary: "Consistent one-to-one character mapping between strings.",
  prompt:
    "Two strings are isomorphic if the characters in `s` can be replaced to get " +
    "`t`, with a consistent one-to-one mapping (no two characters map to the " +
    "same one). Return true if `s` and `t` are isomorphic.",
  topics: ["Hash Table", "String"],
  tags: ["Hash Table", "String"],
  companies: ["Bloomberg"],
  frequency: 54.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "egg", t: "add" }),
  defaultOptions: {},
  buildSteps: (input) => isomorphicSteps(input),
  Renderer: IsomorphicRenderer,
};
