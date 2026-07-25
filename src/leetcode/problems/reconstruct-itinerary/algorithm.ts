import type { Step } from "@/core/types";

export interface ItineraryData {
  /** remaining outgoing destinations per airport (sorted) */
  graph: [string, string[]][];
  stack: string[];
  route: string[];
  cur: string | null;
  action: "walk" | "backtrack" | null;
  answer: string[] | null;
}

export type ItineraryStep = Step<ItineraryData>;

/**
 * Using every ticket exactly once is an Eulerian path. Hierholzer's algorithm walks greedily to the
 * lexicographically smallest unused destination; when an airport has no outgoing tickets left it's a
 * dead end and gets prepended to the route. Reversing the collected dead-ends yields the itinerary.
 * `line` indexes CODE.
 */
export function itinerarySteps(tickets: string[][]): ItineraryStep[] {
  const steps: ItineraryStep[] = [];
  const graph = new Map<string, string[]>();
  for (const [f, t] of [...tickets].sort((a, b) => (a[0] + a[1]).localeCompare(b[0] + b[1]))) {
    if (!graph.has(f)) graph.set(f, []);
    graph.get(f)!.push(t);
  }
  for (const list of graph.values()) list.sort();

  const route: string[] = [];
  const stack = ["JFK"];

  const entries = (): [string, string[]][] => [...graph.entries()].map(([k, v]) => [k, [...v]]);
  const push = (line: number, explanation: string, o: Partial<ItineraryData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: { graph: entries(), stack: [...stack], route: [...route], cur: null, action: null, answer: null, ...o }, highlights: [] });
  };

  push(3, "Hierholzer: walk to the smallest unused destination; dead ends build the route.");

  while (stack.length) {
    const u = stack[stack.length - 1];
    const outgoing = graph.get(u);
    if (outgoing && outgoing.length) {
      const next = outgoing.shift()!;
      stack.push(next);
      push(7, `At ${u}: fly to smallest option ${next}.`, { cur: u, action: "walk" });
    } else {
      route.push(stack.pop()!);
      push(9, `${u} has no tickets left → dead end, prepend to route.`, { cur: u, action: "backtrack" });
    }
  }

  const answer = [...route].reverse();
  push(12, `Itinerary: ${answer.join(" → ")}.`, { answer });
  return steps;
}
