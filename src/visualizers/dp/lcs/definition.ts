import type { VisualizerDefinition } from "@/core/types";
import type { TableData } from "../types";
import { TableRenderer } from "../TableRenderer";
import { lcsSteps, type LCSInput } from "./algorithm";
import { LCS_CODE } from "./code";

const ALPHABET = "ABCD";
const randStr = (len: number) =>
  Array.from(
    { length: len },
    () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)],
  ).join("");

function makeLCSInput(): LCSInput {
  return { a: randStr(6), b: randStr(6) };
}

export const lcsDefinition: VisualizerDefinition<
  LCSInput,
  TableData,
  Record<string, never>
> = {
  id: "lcs",
  title: "Longest Common Subsequence",
  category: "dp",
  summary: "Finds the longest subsequence shared by two strings via a 2D table.",
  tags: ["2D table", "strings"],
  code: LCS_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(mn)",
    timeAverage: "O(mn)",
    timeWorst: "O(mn)",
    space: "O(mn)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeLCSInput,
  defaultOptions: {},
  buildSteps: (input) => lcsSteps(input),
  Renderer: TableRenderer,
};
