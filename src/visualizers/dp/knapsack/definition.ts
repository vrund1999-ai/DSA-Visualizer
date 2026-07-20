import type { VisualizerDefinition } from "@/core/types";
import type { TableData } from "../types";
import { TableRenderer } from "../TableRenderer";
import { knapsackSteps, type KnapsackInput } from "./algorithm";
import { KNAPSACK_CODE } from "./code";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function makeKnapsackInput(): KnapsackInput {
  const n = 4;
  return {
    weights: Array.from({ length: n }, () => randInt(1, 5)),
    values: Array.from({ length: n }, () => randInt(1, 9)),
    capacity: randInt(6, 9),
  };
}

export const knapsackDefinition: VisualizerDefinition<
  KnapsackInput,
  TableData,
  Record<string, never>
> = {
  id: "knapsack",
  title: "0/1 Knapsack",
  category: "dp",
  summary: "Maximizes value within a weight capacity, one item choice per row.",
  tags: ["2D table", "optimization"],
  code: KNAPSACK_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(nW)",
    timeAverage: "O(nW)",
    timeWorst: "O(nW)",
    space: "O(nW)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeKnapsackInput,
  defaultOptions: {},
  buildSteps: (input) => knapsackSteps(input),
  Renderer: TableRenderer,
};
