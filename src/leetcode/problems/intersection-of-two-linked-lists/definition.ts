import type { LeetCodeProblem } from "../../types";
import type { IntersectionData, ListNodeView } from "./algorithm";
import { intersectionSteps } from "./algorithm";
import { CODE } from "./code";
import { IntersectionRenderer } from "./IntersectionRenderer";

interface IntersectionInput {
  /** values unique to list A, before the shared tail */
  skipA: number[];
  /** values unique to list B, before the shared tail */
  skipB: number[];
  /** shared tail values (empty = no intersection) */
  common: number[];
}

function buildLists(input: IntersectionInput): { a: ListNodeView[]; b: ListNodeView[] } {
  const common: ListNodeView[] = input.common.map((v, i) => ({ id: `c${i}`, val: v }));
  const a: ListNodeView[] = [...input.skipA.map((v, i) => ({ id: `a${i}`, val: v })), ...common];
  const b: ListNodeView[] = [...input.skipB.map((v, i) => ({ id: `b${i}`, val: v })), ...common];
  return { a, b };
}

export const intersectionTwoListsProblem: LeetCodeProblem<IntersectionInput, IntersectionData, Record<string, never>> = {
  id: "intersection-of-two-linked-lists",
  number: 160,
  title: "Intersection of Two Linked Lists",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
  summary: "Two pointers swap lists at the end and meet at the shared node.",
  prompt:
    "Return the node at which two singly linked lists intersect (share the same node " +
    "objects), or null if they never intersect. Solve in O(1) extra space.",
  topics: ["Hash Table", "Linked List", "Two Pointers"],
  tags: ["Hash Table", "Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 46.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m + n)", timeWorst: "O(m + n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ skipA: [4, 1], skipB: [5, 6, 1], common: [8, 4, 5] }),
  defaultOptions: {},
  buildSteps: (input) => {
    const { a, b } = buildLists(input);
    return intersectionSteps(a, b);
  },
  Renderer: IntersectionRenderer,
};
