import type { Step } from "@/core/types";

export interface WatchData {
  turnedOn: number;
  /** current hour and minute being displayed */
  h: number | null;
  m: number | null;
  res: string[];
  answer: string[] | null;
}

export type WatchStep = Step<WatchData>;

const popcount = (x: number) => {
  let c = 0;
  while (x) {
    c += x & 1;
    x >>= 1;
  }
  return c;
};

/**
 * Each LED is one bit of the hour (4 bits, 0–11) or minute (6 bits, 0–59). A time is valid when the total
 * number of lit bits equals turnedOn, so enumerate every hour/minute pair and keep those whose combined
 * bit count matches. `line` indexes CODE.
 */
export function watchSteps(turnedOn: number): WatchStep[] {
  const steps: WatchStep[] = [];
  const res: string[] = [];

  const snap = (o: Partial<WatchData>): WatchData => ({ turnedOn, h: null, m: null, res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<WatchData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Find all times where the lit LEDs (hour + minute bits) total ${turnedOn}.`);

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (popcount(h) + popcount(m) === turnedOn) {
        res.push(`${h}:${String(m).padStart(2, "0")}`);
        push(7, `${h}:${String(m).padStart(2, "0")} lights ${popcount(h)}+${popcount(m)} = ${turnedOn} LEDs.`, { h, m });
      }
    }
  }

  push(10, `${res.length} valid time(s).`, { answer: [...res] });
  return steps;
}
