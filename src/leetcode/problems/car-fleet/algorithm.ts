import type { Step } from "@/core/types";

export interface Car {
  position: number;
  speed: number;
  time: number;
}

export interface CarFleetData {
  target: number;
  /** cars sorted by descending position (closest to target first) */
  cars: Car[];
  idx: number | null;
  lead: number;
  /** whether the current car starts a new fleet */
  newFleet: boolean | null;
  /** fleet id assigned to each car so far */
  fleetOf: number[];
  fleets: number;
  answer: number | null;
}

export type CarFleetStep = Step<CarFleetData>;

/**
 * Process cars from the one closest to the target backwards. A car needs `time` to reach the target;
 * if that exceeds the current fleet leader's time it can never catch up and forms a new fleet
 * (becoming the new, slowest leader), otherwise it merges into the fleet ahead. `line` indexes CODE.
 */
export function carFleetSteps(target: number, position: number[], speed: number[]): CarFleetStep[] {
  const steps: CarFleetStep[] = [];
  const cars: Car[] = position
    .map((p, i) => ({ position: p, speed: speed[i], time: (target - p) / speed[i] }))
    .sort((a, b) => b.position - a.position);

  const fleetOf = new Array(cars.length).fill(-1);
  let fleets = 0;
  let lead = 0;

  const snap = (o: Partial<CarFleetData>): CarFleetData => ({ target, cars, idx: null, lead, newFleet: null, fleetOf: [...fleetOf], fleets, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CarFleetData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Sort by position (closest to target ${target} first); compare arrival times.`);

  for (let i = 0; i < cars.length; i++) {
    const { position: p, time } = cars[i];
    const newFleet = time > lead;
    if (newFleet) {
      const prevLead = lead;
      fleets++;
      lead = time;
      fleetOf[i] = fleets;
      push(8, `Car at ${p} needs ${time.toFixed(2)} > lead ${prevLead.toFixed(2)} → new fleet #${fleets}.`, { idx: i, newFleet: true });
    } else {
      fleetOf[i] = fleets;
      push(6, `Car at ${p} needs ${time.toFixed(2)} ≤ lead ${lead.toFixed(2)} → merges into fleet #${fleets}.`, { idx: i, newFleet: false });
    }
  }

  push(11, `Number of car fleets: ${fleets}.`, { answer: fleets });
  return steps;
}
