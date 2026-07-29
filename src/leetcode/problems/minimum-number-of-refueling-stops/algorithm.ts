import type { Step } from "@/core/types";

export interface RefuelData {
  target: number;
  stations: number[][];
  fuel: number;
  /** fuels of stations passed but not yet used (max-heap contents) */
  heap: number[];
  /** station index just made reachable, or the one refueled from */
  event: "reach" | "refuel" | "stuck" | null;
  refuelAmount: number | null;
  stops: number;
  answer: number | null;
}

export type RefuelStep = Step<RefuelData>;

/**
 * Greedily drive as far as the current fuel allows, banking the fuel of every station passed. When we
 * can't proceed, we retroactively "stop" at the largest banked station — the choice that extends range
 * the most — and repeat. The number of such refuels is minimal. `line` indexes CODE.
 */
export function refuelSteps(target: number, startFuel: number, stations: number[][]): RefuelStep[] {
  const steps: RefuelStep[] = [];
  const heap: number[] = [];
  let fuel = startFuel;
  let i = 0;
  let stops = 0;

  const snap = (o: Partial<RefuelData>): RefuelData => ({ target, stations, fuel, heap: [...heap].sort((a, b) => b - a), event: null, refuelAmount: null, stops, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RefuelData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const popMax = () => {
    let m = 0;
    for (let k = 1; k < heap.length; k++) if (heap[k] > heap[m]) m = k;
    return heap.splice(m, 1)[0];
  };

  push(2, `Start with ${startFuel} fuel; reach as far as possible, banking passed stations.`);

  while (fuel < target) {
    while (i < stations.length && stations[i][0] <= fuel) {
      heap.push(stations[i][1]);
      push(6, `Reach station at ${stations[i][0]} (fuel ${stations[i][1]}) → bank it.`, { event: "reach" });
      i++;
    }
    if (heap.length === 0) {
      push(8, `Can't reach ${target} and no banked fuel → impossible (-1).`, { event: "stuck", answer: -1 });
      return steps;
    }
    const amt = popMax();
    fuel += amt;
    stops++;
    push(9, `Refuel from the biggest banked station (+${amt}) → fuel ${fuel}, stops ${stops}.`, { event: "refuel", refuelAmount: amt });
  }

  push(12, `Reached ${target} in ${stops} stop(s).`, { answer: stops });
  return steps;
}
