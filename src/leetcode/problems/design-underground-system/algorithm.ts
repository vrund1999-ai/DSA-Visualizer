import type { Step } from "@/core/types";

export type UndergroundOp =
  | ["checkIn", number, string, number]
  | ["checkOut", number, string, number]
  | ["getAverageTime", string, string];

export interface UndergroundData {
  /** passenger id -> [startStation, startTime] */
  ongoing: [number, [string, number]][];
  /** route "a->b" -> [totalTime, count] */
  routes: [string, [number, number]][];
  op: string;
  /** route key touched this op */
  activeRoute: string | null;
  result: number | null;
  answer: (number | null)[] | null;
}

export type UndergroundStep = Step<UndergroundData>;

/**
 * Two maps do the work: `ongoing` remembers where and when each passenger boarded, and `routes`
 * accumulates the total travel time and trip count for every start→end pair. A checkout finalizes one
 * trip; the average query is then a single division. `line` indexes CODE.
 */
export function undergroundSteps(ops: UndergroundOp[]): UndergroundStep[] {
  const steps: UndergroundStep[] = [];
  const ongoing = new Map<number, [string, number]>();
  const routes = new Map<string, [number, number]>();
  const results: (number | null)[] = [];

  const snap = (op: string, o: Partial<UndergroundData>): UndergroundData => ({ ongoing: [...ongoing.entries()], routes: [...routes.entries()], op, activeRoute: null, result: null, answer: null, ...o });
  const push = (line: number, explanation: string, op: string, o: Partial<UndergroundData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(op, o), highlights: [] });
  };

  push(2, "Track ongoing trips and per-route (total time, count).", "init");

  for (const op of ops) {
    if (op[0] === "checkIn") {
      const [, id, station, t] = op;
      ongoing.set(id, [station, t]);
      push(4, `checkIn(${id}, ${station}, ${t}) → passenger ${id} boards at ${station}.`, `checkIn(${id}, ${station}, ${t})`);
    } else if (op[0] === "checkOut") {
      const [, id, station, t] = op;
      const [start, t0] = ongoing.get(id)!;
      const key = `${start}->${station}`;
      const [sum, n] = routes.get(key) ?? [0, 0];
      routes.set(key, [sum + (t - t0), n + 1]);
      ongoing.delete(id);
      push(10, `checkOut(${id}, ${station}, ${t}) → trip ${key} took ${t - t0}; route total ${sum + (t - t0)}/${n + 1}.`, `checkOut(${id}, ${station}, ${t})`, { activeRoute: key });
    } else {
      const [, start, end] = op;
      const key = `${start}->${end}`;
      const [sum, n] = routes.get(key) ?? [0, 0];
      const avg = n ? sum / n : 0;
      results.push(avg);
      push(15, `getAverageTime(${start}, ${end}) = ${sum}/${n} = ${avg}.`, `getAverageTime(${start}, ${end})`, { activeRoute: key, result: avg });
    }
  }

  steps.push({ id: steps.length, line: 17, explanation: `Processed ${ops.length} operations.`, data: snap("done", { answer: results }), highlights: [] });
  return steps;
}
