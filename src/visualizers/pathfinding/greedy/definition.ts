import type { VisualizerDefinition } from "@/core/types";
import type { GridData, GridInput, GridOptions } from "../types";
import { GridRenderer } from "../GridRenderer";
import { greedySteps } from "./algorithm";
import { makeGrid } from "../grid";
import { GREEDY_CODE } from "./code";

export const greedyDefinition: VisualizerDefinition<
  GridInput,
  GridData,
  GridOptions
> = {
  id: "greedy-best-first",
  title: "Greedy Best-First Search",
  category: "pathfinding",
  summary: "Always heads toward the target by heuristic alone — fast, but not always shortest.",
  tags: ["grid", "heuristic", "greedy"],
  code: GREEDY_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(E)",
    timeAverage: "O(E log V)",
    timeWorst: "O(E log V)",
    space: "O(V)",
  },
  inputSchema: [{ kind: "grid", label: "Grid", rows: 10, cols: 22 }],
  makeDefaultInput: () => makeGrid(10, 22),
  defaultOptions: {},
  buildSteps: (input) => greedySteps(input),
  Renderer: GridRenderer,
};
