import type { VisualizerDefinition } from "@/core/types";
import type { TableData } from "../types";
import { TableRenderer } from "../TableRenderer";
import { editDistanceSteps, type EditDistanceInput } from "./algorithm";
import { EDIT_DISTANCE_CODE } from "./code";

const ALPHABET = "abcde";
const randStr = (len: number) =>
  Array.from(
    { length: len },
    () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)],
  ).join("");

function makeEditDistanceInput(): EditDistanceInput {
  return { a: randStr(5), b: randStr(5) };
}

export const editDistanceDefinition: VisualizerDefinition<
  EditDistanceInput,
  TableData,
  Record<string, never>
> = {
  id: "edit-distance",
  title: "Edit Distance (Levenshtein)",
  category: "dp",
  summary: "Minimum insert/delete/replace edits to turn one string into another.",
  tags: ["2D table", "strings"],
  code: EDIT_DISTANCE_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(mn)",
    timeAverage: "O(mn)",
    timeWorst: "O(mn)",
    space: "O(mn)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeEditDistanceInput,
  defaultOptions: {},
  buildSteps: (input) => editDistanceSteps(input),
  Renderer: TableRenderer,
};
