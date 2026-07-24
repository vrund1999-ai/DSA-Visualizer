import type { LeetCodeProblem } from "../../types";
import type { AsteroidData } from "./algorithm";
import { asteroidSteps } from "./algorithm";
import { CODE } from "./code";
import { AsteroidRenderer } from "./AsteroidRenderer";

export const asteroidCollisionProblem: LeetCodeProblem<number[], AsteroidData, Record<string, never>> = {
  id: "asteroid-collision",
  number: 735,
  title: "Asteroid Collision",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/asteroid-collision/",
  summary: "Stack simulation; a left-mover collides with the right-mover on top.",
  prompt:
    "Each asteroid's absolute value is its size and its sign its direction (positive = " +
    "right, negative = left). Same-size collisions destroy both; otherwise the smaller " +
    "explodes. Return the state after all collisions.",
  topics: ["Array", "Stack", "Simulation"],
  tags: ["Array", "Stack", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 10, -5, -12, 8, -8, 3],
  defaultOptions: {},
  buildSteps: (input) => asteroidSteps(input),
  Renderer: AsteroidRenderer,
};
