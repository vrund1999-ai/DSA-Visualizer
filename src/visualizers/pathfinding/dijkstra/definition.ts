import type { VisualizerDefinition } from "@/core/types";
import type { GridData, GridInput, GridOptions } from "../types";
import { GridRenderer } from "../GridRenderer";
import { dijkstraSteps } from "./algorithm";
import { makeGrid } from "../grid";
import { DIJKSTRA_CODE } from "./code";

export const dijkstraDefinition: VisualizerDefinition<
  GridInput,
  GridData,
  GridOptions
> = {
  id: "dijkstra",
  title: "Dijkstra's Algorithm",
  category: "pathfinding",
  summary: "Settles the closest unsettled cell first, labeling each with its shortest distance.",
  tags: ["grid", "weighted", "shortest path"],
  code: DIJKSTRA_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(E log V)",
    timeAverage: "O(E log V)",
    timeWorst: "O(E log V)",
    space: "O(V)",
  },
  inputSchema: [{ kind: "grid", label: "Grid", rows: 10, cols: 22 }],
  makeDefaultInput: () => makeGrid(10, 22),
  defaultOptions: {},
  buildSteps: (input) => dijkstraSteps(input),
  Renderer: GridRenderer,
};
