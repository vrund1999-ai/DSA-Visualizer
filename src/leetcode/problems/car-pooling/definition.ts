import type { LeetCodeProblem } from "../../types";
import type { CarPoolingData, Trip } from "./algorithm";
import { carPoolingSteps } from "./algorithm";
import { CODE } from "./code";
import { CarPoolingRenderer } from "./CarPoolingRenderer";

interface CarPoolingInput {
  trips: Trip[];
  capacity: number;
}

export const carPoolingProblem: LeetCodeProblem<CarPoolingInput, CarPoolingData, Record<string, never>> = {
  id: "car-pooling",
  number: 1094,
  title: "Car Pooling",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/car-pooling/",
  summary: "Mark +/− passengers on a difference array; prefix-sum occupancy must never exceed capacity.",
  prompt:
    "A car with a given capacity drives east picking up and dropping off passengers. Given trips " +
    "[passengers, from, to], return whether every trip can be completed without exceeding capacity.",
  topics: ["Array", "Prefix Sum", "Sorting", "Simulation"],
  tags: ["Array", "Prefix Sum", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + range)", timeWorst: "O(n + range)", space: "O(range)" },
  inputSchema: [],
  makeDefaultInput: () => ({ trips: [[2, 1, 5], [3, 3, 7]], capacity: 4 }),
  defaultOptions: {},
  buildSteps: (input) => carPoolingSteps(input.trips, input.capacity),
  Renderer: CarPoolingRenderer,
};
