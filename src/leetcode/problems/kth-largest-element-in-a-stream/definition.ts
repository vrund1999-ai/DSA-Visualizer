import type { LeetCodeProblem } from "../../types";
import type { KthStreamData, KthStreamInput } from "./algorithm";
import { kthStreamSteps } from "./algorithm";
import { CODE } from "./code";
import { KthStreamRenderer } from "./KthStreamRenderer";

export const kthLargestStreamProblem: LeetCodeProblem<
  KthStreamInput,
  KthStreamData,
  Record<string, never>
> = {
  id: "kth-largest-element-in-a-stream",
  number: 703,
  title: "Kth Largest Element in a Stream",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
  summary: "Streaming kth largest via a size-k min-heap.",
  prompt:
    "Design a class that reports the kth largest element seen so far as values " +
    "stream in. The constructor takes k and an initial array; add(val) inserts a " +
    "value and returns the current kth largest.",
  topics: ["Tree", "Design", "Binary Search Tree", "Heap (Priority Queue)", "Data Stream"],
  tags: ["Tree", "Design", "Binary Search Tree", "Heap (Priority Queue)", "Data Stream"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log k)", timeWorst: "O(log k)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ k: 3, initial: [4, 5, 8, 2], adds: [3, 5, 10, 9, 4] }),
  defaultOptions: {},
  buildSteps: (input) => kthStreamSteps(input),
  Renderer: KthStreamRenderer,
};
