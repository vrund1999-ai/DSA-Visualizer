import type { LeetCodeProblem } from "../../types";
import type { MaxDiffChangeData } from "./algorithm";
import { maxDiffChangeSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxDiffChangeRenderer } from "./MaxDiffChangeRenderer";

interface MaxDiffChangeInput {
  num: number;
}

export const maxDiffChangeProblem: LeetCodeProblem<MaxDiffChangeInput, MaxDiffChangeData, Record<string, never>> = {
  id: "max-difference-you-can-get-from-changing-an-integer",
  number: 1432,
  title: "Max Difference You Can Get From Changing an Integer",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/",
  summary: "Maximize by turning the first non-9 digit into 9; minimize by turning the leading digit into 1 (avoiding leading zeros).",
  prompt:
    "Apply the operation twice to num (each time replace every occurrence of one digit with another). " +
    "Return the maximum minus the minimum results (no leading zeros, result stays positive).",
  topics: ["Math", "Greedy"],
  tags: ["Greedy", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(d)", timeWorst: "O(d)", space: "O(d)" },
  inputSchema: [],
  makeDefaultInput: () => ({ num: 555 }),
  defaultOptions: {},
  buildSteps: (input) => maxDiffChangeSteps(input.num),
  Renderer: MaxDiffChangeRenderer,
};
