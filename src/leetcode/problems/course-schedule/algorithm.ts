import type { Step } from "@/core/types";

export interface CourseScheduleInput {
  numCourses: number;
  prerequisites: [number, number][];
}

export interface CourseData {
  n: number;
  edges: [number, number][];
  indeg: number[];
  queue: number[];
  order: number[];
  current: number | null;
  result: boolean | null;
}

export type CourseStep = Step<CourseData>;

/**
 * Kahn's topological sort: repeatedly take a course with no unmet prerequisites
 * (in-degree 0), then relax its dependents. If every course gets ordered there
 * is no cycle, so the schedule is possible. `line` indexes CODE.
 */
export function courseSteps(input: CourseScheduleInput): CourseStep[] {
  const { numCourses: n, prerequisites } = input;
  const steps: CourseStep[] = [];
  const adj: number[][] = Array.from({ length: n }, () => []);
  const indeg = new Array(n).fill(0);
  for (const [a, b] of prerequisites) {
    adj[b].push(a);
    indeg[a]++;
  }
  const queue: number[] = [];
  const order: number[] = [];
  let result: boolean | null = null;

  const snap = (line: number, explanation: string, current: number | null = null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: {
        n,
        edges: prerequisites.map((e) => [...e] as [number, number]),
        indeg: [...indeg],
        queue: [...queue],
        order: [...order],
        current,
        result,
      },
      highlights: [],
      metrics: { ordered: order.length },
    });
  };

  snap(5, "Compute each course's in-degree (number of prerequisites).");
  for (let i = 0; i < n; i++) if (indeg[i] === 0) queue.push(i);
  snap(7, `Queue the courses with no prerequisites: [${queue.join(", ")}].`);

  while (queue.length) {
    const node = queue.shift()!;
    order.push(node);
    snap(10, `Take course ${node} — all its prerequisites are done.`, node);
    for (const next of adj[node]) {
      indeg[next]--;
      if (indeg[next] === 0) {
        queue.push(next);
        snap(12, `Course ${next} now has no remaining prerequisites — queue it.`, node);
      } else {
        snap(12, `Course ${next} still needs ${indeg[next]} more prerequisite(s).`, node);
      }
    }
  }

  result = order.length === n;
  snap(14, result ? `Ordered all ${n} courses — schedule is possible.` : `Only ordered ${order.length}/${n} — a cycle blocks the rest.`);
  return steps;
}
