import type { LeetCodeProblem } from "../../types";
import type { GeneData } from "./algorithm";
import { geneSteps } from "./algorithm";
import { CODE } from "./code";
import { GeneRenderer } from "./GeneRenderer";

interface GeneInput {
  start: string;
  end: string;
  bank: string[];
}

export const minimumGeneticMutationProblem: LeetCodeProblem<GeneInput, GeneData, Record<string, never>> = {
  id: "minimum-genetic-mutation",
  number: 433,
  title: "Minimum Genetic Mutation",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-genetic-mutation/",
  summary: "Shortest path in a graph of genes linked by single-character mutations — BFS by levels.",
  prompt:
    "A gene is an 8-char string over {A,C,G,T}. One mutation changes a single character and must land " +
    "on a gene in the bank. Return the minimum mutations from start to end, or -1.",
  topics: ["BFS", "Hash Table", "String"],
  tags: ["BFS", "String"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(B · L)", timeWorst: "O(B · L)", space: "O(B)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    start: "AACCGGTT",
    end: "AAACGGTA",
    bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"],
  }),
  defaultOptions: {},
  buildSteps: (input) => geneSteps(input.start, input.end, input.bank),
  Renderer: GeneRenderer,
};
