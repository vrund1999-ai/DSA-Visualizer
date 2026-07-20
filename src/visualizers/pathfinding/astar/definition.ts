import type { VisualizerDefinition } from "@/core/types";
import type { GridData, GridInput, GridOptions } from "../types";
import { GridRenderer } from "../GridRenderer";
import { aStarSteps } from "./algorithm";
import { makeGrid } from "../grid";
import { ASTAR_CODE } from "./code";

export const astarDefinition: VisualizerDefinition<
  GridInput,
  GridData,
  GridOptions
> = {
  id: "astar",
  title: "A* Search",
  category: "pathfinding",
  summary: "Guides the search toward the target with a heuristic, finding a shortest path fast.",
  tags: ["grid", "heuristic", "shortest path"],
  code: ASTAR_CODE,
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
  buildSteps: (input) => aStarSteps(input),
  Renderer: GridRenderer,
};
