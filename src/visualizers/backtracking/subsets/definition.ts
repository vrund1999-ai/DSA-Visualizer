import type { VisualizerDefinition } from "@/core/types";
import type { SubsetsData } from "./types";
import { SubsetsRenderer } from "./SubsetsRenderer";
import { subsetsSteps } from "./algorithm";
import { SUBSETS_CODE } from "./code";

function makeSubsetsInput(): number[] {
  const pool = Array.from({ length: 9 }, (_, i) => i + 1);
  for (let i = 0; i < 4; i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 4).sort((a, b) => a - b);
}

export const subsetsDefinition: VisualizerDefinition<
  number[],
  SubsetsData,
  Record<string, never>
> = {
  id: "subsets",
  title: "Subsets (Power Set)",
  category: "backtracking",
  summary: "Generates every subset by choosing to exclude then include each element.",
  tags: ["enumeration", "backtracking"],
  code: SUBSETS_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(2ⁿ)",
    timeAverage: "O(2ⁿ)",
    timeWorst: "O(2ⁿ · n)",
    space: "O(n)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeSubsetsInput,
  defaultOptions: {},
  buildSteps: (input) => subsetsSteps(input),
  Renderer: SubsetsRenderer,
};
