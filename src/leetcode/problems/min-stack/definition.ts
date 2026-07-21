import type { LeetCodeProblem } from "../../types";
import type { MinStackData, MinStackOp } from "./algorithm";
import { minStackSteps } from "./algorithm";
import { CODE } from "./code";
import { MinStackRenderer } from "./MinStackRenderer";

export const minStackProblem: LeetCodeProblem<
  MinStackOp[],
  MinStackData,
  Record<string, never>
> = {
  id: "min-stack",
  number: 155,
  title: "Min Stack",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/min-stack/",
  summary: "Stack with O(1) getMin using a parallel min stack.",
  prompt:
    "Design a stack that supports push, pop, top, and retrieving the minimum " +
    "element — each in O(1) time.",
  topics: ["Stack", "Design"],
  tags: ["Stack", "Design"],
  companies: ["Bloomberg"],
  frequency: 70.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    { name: "push", arg: 5 },
    { name: "push", arg: 2 },
    { name: "push", arg: 7 },
    { name: "getMin" },
    { name: "pop" },
    { name: "pop" },
    { name: "getMin" },
    { name: "top" },
  ],
  defaultOptions: {},
  buildSteps: (input) => minStackSteps(input),
  Renderer: MinStackRenderer,
};
