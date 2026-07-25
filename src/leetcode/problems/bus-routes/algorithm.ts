import type { Step } from "@/core/types";

export interface BusData {
  routes: number[][];
  source: number;
  target: number;
  /** route indices currently in the BFS frontier */
  frontier: number[];
  /** route being expanded */
  cur: number | null;
  seen: number[];
  buses: number;
  /** stop found equal to target, if any */
  hitStop: number | null;
  answer: number | null;
}

export type BusStep = Step<BusData>;

/**
 * Model each bus route as a node; two routes are adjacent if they share a stop. BFS from the routes
 * containing the source, one "bus" per level, until a route contains the target. The level count is
 * the fewest buses needed. `line` indexes CODE.
 */
export function busSteps(routes: number[][], source: number, target: number): BusStep[] {
  const steps: BusStep[] = [];

  const snap = (o: Partial<BusData>): BusData => ({ routes, source, target, frontier: [], cur: null, seen: [], buses: 0, hitStop: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BusData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (source === target) {
    push(1, `Source equals target (${source}) → 0 buses.`, { answer: 0 });
    return steps;
  }

  const stopToRoutes = new Map<number, number[]>();
  routes.forEach((route, r) => route.forEach((stop) => {
    if (!stopToRoutes.has(stop)) stopToRoutes.set(stop, []);
    stopToRoutes.get(stop)!.push(r);
  }));

  const seen = new Set<number>();
  let queue = [...(stopToRoutes.get(source) ?? [])];
  queue.forEach((r) => seen.add(r));
  let buses = 1;
  push(4, `Board any route through source ${source}: routes {${queue.join(", ")}} (1 bus).`, { frontier: [...queue], seen: [...seen], buses });

  while (queue.length) {
    const next: number[] = [];
    for (const r of queue) {
      for (const stop of routes[r]) {
        if (stop === target) {
          push(10, `Route ${r} reaches target ${target} → ${buses} bus(es).`, { frontier: [...queue], cur: r, seen: [...seen], buses, hitStop: stop, answer: buses });
          return steps;
        }
        for (const nr of stopToRoutes.get(stop) ?? []) {
          if (!seen.has(nr)) { seen.add(nr); next.push(nr); }
        }
      }
      push(9, `Expand route ${r} (stops ${routes[r].join(", ")}); target not here yet.`, { frontier: [...queue], cur: r, seen: [...seen], buses });
    }
    queue = next;
    buses++;
    if (queue.length) push(17, `Transfer: next frontier routes {${queue.join(", ")}} (${buses} buses).`, { frontier: [...queue], seen: [...seen], buses });
  }

  push(19, `Target ${target} is unreachable → -1.`, { answer: -1 });
  return steps;
}
