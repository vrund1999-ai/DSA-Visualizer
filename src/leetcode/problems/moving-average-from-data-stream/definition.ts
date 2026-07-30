import type { LeetCodeProblem } from "../../types";
import type { MovingAvgData } from "./algorithm";
import { movingAvgSteps } from "./algorithm";
import { CODE } from "./code";
import { MovingAvgRenderer } from "./MovingAvgRenderer";

interface MovingAvgInput {
  size: number;
  values: number[];
}

export const movingAverageProblem: LeetCodeProblem<MovingAvgInput, MovingAvgData, Record<string, never>> = {
  id: "moving-average-from-data-stream",
  number: 346,
  title: "Moving Average from Data Stream",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/moving-average-from-data-stream/",
  summary: "A fixed-size queue with a running sum returns the average of the most recent values on each next().",
  prompt:
    "Implement a class that, given a window size, returns the moving average of the last `size` values from " +
    "a data stream as each value arrives via next(val).",
  topics: ["Array", "Design", "Queue", "Data Stream"],
  tags: ["Design", "Queue", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) per next", timeWorst: "O(1)", space: "O(size)" },
  inputSchema: [],
  makeDefaultInput: () => ({ size: 3, values: [1, 10, 3, 5, 8] }),
  defaultOptions: {},
  buildSteps: (input) => movingAvgSteps(input.size, input.values),
  Renderer: MovingAvgRenderer,
};
