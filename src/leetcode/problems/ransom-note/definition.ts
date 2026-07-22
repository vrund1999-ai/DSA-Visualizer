import type { LeetCodeProblem } from "../../types";
import type { RansomData, RansomInput } from "./algorithm";
import { ransomSteps } from "./algorithm";
import { CODE } from "./code";
import { RansomRenderer } from "./RansomRenderer";

export const ransomNoteProblem: LeetCodeProblem<
  RansomInput,
  RansomData,
  Record<string, never>
> = {
  id: "ransom-note",
  number: 383,
  title: "Ransom Note",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/ransom-note/",
  summary: "Can a note be built from a magazine's letters? (counting)",
  prompt:
    "Given `ransomNote` and `magazine`, return true if `ransomNote` can be built " +
    "from the letters in `magazine`. Each letter in the magazine can be used " +
    "once.",
  topics: ["Hash Table", "String", "Counting"],
  tags: ["Hash Table", "String", "Counting"],
  companies: ["Bloomberg"],
  frequency: 39,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ ransom: "aa", magazine: "aab" }),
  defaultOptions: {},
  buildSteps: (input) => ransomSteps(input),
  Renderer: RansomRenderer,
};
