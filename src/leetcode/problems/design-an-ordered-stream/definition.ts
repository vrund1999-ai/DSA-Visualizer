import type { LeetCodeProblem } from "../../types";
import type { OrderedStreamData } from "./algorithm";
import { orderedStreamSteps } from "./algorithm";
import { CODE } from "./code";
import { OrderedStreamRenderer } from "./OrderedStreamRenderer";

interface OrderedStreamInput {
  n: number;
  inserts: [number, string][];
}

export const designOrderedStreamProblem: LeetCodeProblem<OrderedStreamInput, OrderedStreamData, Record<string, never>> = {
  id: "design-an-ordered-stream",
  number: 1656,
  title: "Design an Ordered Stream",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/design-an-ordered-stream/",
  summary: "Store values by id; a pointer emits the contiguous prefix after each insert.",
  prompt:
    "Values arrive as (id, value) pairs in arbitrary order. Each insert returns the " +
    "largest possible chunk of values in id order that can now be output contiguously " +
    "from the current pointer.",
  topics: ["Array", "Hash Table", "Design", "Data Stream"],
  tags: ["Array", "Hash Table", "Design", "Data Stream"],
  companies: ["Bloomberg"],
  frequency: 57.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) amortized", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    n: 5,
    inserts: [
      [3, "ccccc"],
      [1, "aaaaa"],
      [2, "bbbbb"],
      [5, "eeeee"],
      [4, "ddddd"],
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => orderedStreamSteps(input.n, input.inserts),
  Renderer: OrderedStreamRenderer,
};
