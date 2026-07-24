import type { Step } from "@/core/types";

export interface CourseOrderData {
  numCourses: number;
  edges: [number, number][];
  indeg: number[];
  queue: number[];
  /** course just dequeued */
  current: number | null;
  order: number[];
  answer: number[] | null;
}

export type CourseOrderStep = Step<CourseOrderData>;

/**
 * Kahn's algorithm: repeatedly take a course with no remaining prerequisites, append
 * it to the order, and decrement its dependents' in-degrees. If every course is
 * emitted there is a valid order; otherwise a cycle exists. `line` indexes CODE.
 */
export function courseOrderSteps(numCourses: number, prerequisites: [number, number][]): CourseOrderStep[] {
  const steps: CourseOrderStep[] = [];
  const adj: number[][] = Array.from({ length: numCourses }, () => []);
  const indeg = new Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
    adj[b].push(a);
    indeg[a]++;
  }
  const queue: number[] = [];
  const order: number[] = [];

  const snap = (o: Partial<CourseOrderData>): CourseOrderData => ({ numCourses, edges: prerequisites.map((e) => [...e] as [number, number]), indeg: [...indeg], queue: [...queue], current: null, order: [...order], answer: null, ...o });
  const push = (line: number, explanation: string, data: CourseOrderData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  for (let i = 0; i < numCourses; i++) if (indeg[i] === 0) queue.push(i);
  push(8, `Seed the queue with courses that have no prerequisites: [${queue.join(", ")}].`, snap({}));

  while (queue.length) {
    const c = queue.shift()!;
    order.push(c);
    push(12, `Take course ${c}; add to the order.`, snap({ current: c }));
    for (const nxt of adj[c]) {
      indeg[nxt]--;
      if (indeg[nxt] === 0) queue.push(nxt);
    }
    push(14, `Release dependents of ${c}; queue now [${queue.join(", ")}].`, snap({ current: c }));
  }

  const answer = order.length === numCourses ? order : [];
  push(16, answer.length ? `Valid order: [${answer.join(", ")}].` : "A cycle prevents any valid order → [].", snap({ answer }));
  return steps;
}
