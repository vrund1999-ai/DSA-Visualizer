import type { LeetCodeProblem } from "../../types";
import type { SimplifyPathData } from "./algorithm";
import { simplifyPathSteps } from "./algorithm";
import { CODE } from "./code";
import { SimplifyPathRenderer } from "./SimplifyPathRenderer";

export const simplifyPathProblem: LeetCodeProblem<string, SimplifyPathData, Record<string, never>> = {
  id: "simplify-path",
  number: 71,
  title: "Simplify Path",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/simplify-path/",
  summary: "A stack of directory names handles '.', '..', and redundant slashes.",
  prompt:
    "Given an absolute Unix-style path, return its canonical form: collapse '.', resolve " +
    "'..' by going up, and remove redundant slashes.",
  topics: ["String", "Stack"],
  tags: ["String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "/a/./b/../../c/",
  defaultOptions: {},
  buildSteps: (input) => simplifyPathSteps(input),
  Renderer: SimplifyPathRenderer,
};
