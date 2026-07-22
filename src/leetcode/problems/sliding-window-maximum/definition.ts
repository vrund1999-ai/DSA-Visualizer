import type { LeetCodeProblem } from "../../types";
import type { SlidingMaxData, SlidingMaxInput } from "./algorithm";
import { slidingMaxSteps } from "./algorithm";
import { CODE } from "./code";
import { SlidingMaxRenderer } from "./SlidingMaxRenderer";

export const slidingWindowMaximumProblem: LeetCodeProblem<
  SlidingMaxInput,
  SlidingMaxData,
  Record<string, never>
> = {
  id: "sliding-window-maximum",
  number: 239,
  title: "Sliding Window Maximum",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/sliding-window-maximum/",
  summary: "Max of every k-window, via a monotonic deque.",
  prompt:
    "Given an array `nums` and a window size `k`, return the maximum of each " +
    "contiguous window of k elements as the window slides from left to right.",
  topics: ["Array", "Queue", "Sliding Window", "Monotonic Queue"],
  tags: ["Array", "Queue", "Sliding Window", "Monotonic Queue"],
  companies: ["Bloomberg"],
  frequency: 49.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => slidingMaxSteps(input),
  Renderer: SlidingMaxRenderer,
};
