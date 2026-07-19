import type {
  AnyVisualizerDefinition,
  CategoryId,
  CategoryMeta,
} from "./types";
import { sortingDefinitions } from "@/visualizers/sorting";
import { searchingDefinitions } from "@/visualizers/searching";
import { treeDefinitions } from "@/visualizers/trees";
import { pathfindingDefinitions } from "@/visualizers/pathfinding";
// Categories are added here as each is built:
// import { linearDefinitions } from "@/visualizers/linear";

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "sorting",
    label: "Sorting",
    description: "Comparison & distribution sorts",
    icon: "BarChart3",
    order: 1,
  },
  {
    id: "searching",
    label: "Searching",
    description: "Finding a target within a collection",
    icon: "Search",
    order: 2,
  },
  {
    id: "pathfinding",
    label: "Pathfinding",
    description: "Graph traversal & shortest paths",
    icon: "Route",
    order: 3,
  },
  {
    id: "trees",
    label: "Trees",
    description: "BSTs, traversals & balancing",
    icon: "GitBranch",
    order: 4,
  },
  {
    id: "linear",
    label: "Linear Structures",
    description: "Arrays, stacks, queues, lists & hash tables",
    icon: "List",
    order: 5,
  },
];

const ALL: AnyVisualizerDefinition[] = [
  ...sortingDefinitions,
  ...searchingDefinitions,
  ...pathfindingDefinitions,
  ...treeDefinitions,
  // ...linearDefinitions,
];

// Fail fast on duplicate slugs (dev safety).
const seen = new Set<string>();
for (const d of ALL) {
  if (seen.has(d.id)) throw new Error(`Duplicate visualizer id: ${d.id}`);
  seen.add(d.id);
}

export const registry = {
  all: (): AnyVisualizerDefinition[] => ALL,
  byId: (id: string): AnyVisualizerDefinition | undefined =>
    ALL.find((d) => d.id === id),
  byCategory: (cat: CategoryId): AnyVisualizerDefinition[] =>
    ALL.filter((d) => d.category === cat),
  /** Categories that actually have at least one visualizer, in display order. */
  categories: (): CategoryMeta[] =>
    [...CATEGORIES]
      .filter((c) => ALL.some((d) => d.category === c.id))
      .sort((a, b) => a.order - b.order),
};
