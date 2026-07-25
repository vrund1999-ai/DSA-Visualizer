import type { Step } from "@/core/types";

export type Trip = [number, number, number];

export interface CarPoolingData {
  trips: Trip[];
  capacity: number;
  maxLoc: number;
  /** difference array over locations 0..maxLoc */
  diff: number[];
  /** running occupancy per location 0..maxLoc */
  occ: number[];
  phase: "build" | "scan" | "done";
  /** location currently processed */
  loc: number | null;
  onboard: number;
  answer: boolean | null;
}

export type CarPoolingStep = Step<CarPoolingData>;

/**
 * A difference array records +passengers where a trip boards and −passengers where it alights.
 * Sweeping locations left to right and prefix-summing gives the occupancy at each point in O(range);
 * exceeding capacity anywhere means the trips can't all be served. `line` indexes CODE.
 */
export function carPoolingSteps(trips: Trip[], capacity: number): CarPoolingStep[] {
  const steps: CarPoolingStep[] = [];
  const maxLoc = Math.max(...trips.map((t) => t[2]));
  const diff = new Array(maxLoc + 1).fill(0);

  const occ = () => {
    const o: number[] = [];
    let run = 0;
    for (let i = 0; i <= maxLoc; i++) { run += diff[i]; o.push(run); }
    return o;
  };
  const snap = (o: Partial<CarPoolingData>): CarPoolingData => ({ trips, capacity, maxLoc, diff: [...diff], occ: [], phase: "build", loc: null, onboard: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<CarPoolingData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Difference array over locations; capacity ${capacity}.`);

  for (const [num, from, to] of trips) {
    diff[from] += num;
    diff[to] -= num;
    push(4, `Trip: ${num} board at ${from}, alight at ${to} → diff[${from}] += ${num}, diff[${to}] −= ${num}.`, { phase: "build" });
  }

  let onboard = 0;
  const occArr = occ();
  for (let i = 0; i <= maxLoc; i++) {
    onboard += diff[i];
    if (onboard > capacity) {
      push(9, `At location ${i}: onboard ${onboard} > capacity ${capacity} → false.`, { phase: "scan", loc: i, onboard, occ: occArr, answer: false });
      return steps;
    }
    if (diff[i] !== 0) push(8, `At location ${i}: onboard = ${onboard}.`, { phase: "scan", loc: i, onboard, occ: occArr });
  }

  push(11, `Occupancy never exceeds ${capacity} → true.`, { phase: "done", occ: occArr, answer: true });
  return steps;
}
