import type { LeetCodeProblem } from "../../types";
import type { CarFleetData } from "./algorithm";
import { carFleetSteps } from "./algorithm";
import { CODE } from "./code";
import { CarFleetRenderer } from "./CarFleetRenderer";

interface CarFleetInput {
  target: number;
  position: number[];
  speed: number[];
}

export const carFleetProblem: LeetCodeProblem<CarFleetInput, CarFleetData, Record<string, never>> = {
  id: "car-fleet",
  number: 853,
  title: "Car Fleet",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/car-fleet/",
  summary: "Sort cars by position; a car forms a new fleet only if its arrival time exceeds the leader's.",
  prompt:
    "Cars head to a target along a one-lane road (no passing). Given the target, each car's position " +
    "and speed, return how many car fleets arrive (cars that catch up form one fleet).",
  topics: ["Array", "Stack", "Sorting", "Monotonic Stack"],
  tags: ["Array", "Stack", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ target: 12, position: [10, 8, 0, 5, 3], speed: [2, 4, 1, 1, 3] }),
  defaultOptions: {},
  buildSteps: (input) => carFleetSteps(input.target, input.position, input.speed),
  Renderer: CarFleetRenderer,
};
