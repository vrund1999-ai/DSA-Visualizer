import type { VisualizerDefinition } from "@/core/types";
import type { TableData } from "../types";
import { TableRenderer } from "../TableRenderer";
import { fibonacciSteps } from "./algorithm";
import { FIBONACCI_CODE } from "./code";

export const fibonacciDefinition: VisualizerDefinition<number, TableData, Record<string, never>> = {
  id: "fibonacci",
  title: "Fibonacci (Tabulation)",
  category: "dp",
  summary: "Builds Fibonacci numbers bottom-up, each cell summing the previous two.",
  tags: ["1D table", "tabulation"],
  code: FIBONACCI_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(n)",
    timeAverage: "O(n)",
    timeWorst: "O(n)",
    space: "O(n)",
  },
  inputSchema: [{ kind: "number", label: "n", min: 2, max: 15, default: 10 }],
  makeDefaultInput: () => 10,
  defaultOptions: {},
  buildSteps: (input) => fibonacciSteps(input),
  Renderer: TableRenderer,
};
