import type { LeetCodeProblem } from "../../types";
import type { UnitsData } from "./algorithm";
import { unitsSteps } from "./algorithm";
import { CODE } from "./code";
import { UnitsRenderer } from "./UnitsRenderer";

interface UnitsInput {
  boxTypes: number[][];
  truckSize: number;
}

export const maximumUnitsProblem: LeetCodeProblem<UnitsInput, UnitsData, Record<string, never>> = {
  id: "maximum-units-on-a-truck",
  number: 1710,
  title: "Maximum Units on a Truck",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/maximum-units-on-a-truck/",
  summary: "Load the densest boxes first: sort by units per box descending and fill the truck greedily.",
  prompt:
    "Each box type has a count and units per box. A truck holds at most truckSize boxes total. Return the " +
    "maximum total units that can be loaded.",
  topics: ["Array", "Greedy", "Sorting"],
  tags: ["Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ boxTypes: [[1, 3], [2, 2], [3, 1]], truckSize: 4 }),
  defaultOptions: {},
  buildSteps: (input) => unitsSteps(input.boxTypes, input.truckSize),
  Renderer: UnitsRenderer,
};
