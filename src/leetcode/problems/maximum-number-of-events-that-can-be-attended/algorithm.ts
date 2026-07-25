import type { Step } from "@/core/types";

export interface EventsData {
  events: [number, number][];
  lastDay: number;
  day: number | null;
  /** end days of currently-open events (min-heap contents) */
  open: number[];
  /** end day attended today, if any */
  attendedEnd: number | null;
  count: number;
  answer: number | null;
}

export type EventsStep = Step<EventsData>;

/**
 * Sweep the calendar day by day. Every event whose start is reached joins a set of "open" events;
 * expired ones drop out. Each day we greedily attend the open event with the earliest end day —
 * the one most at risk of expiring — which maximizes the total attended. `line` indexes CODE.
 */
export function eventsSteps(input: number[][]): EventsStep[] {
  const steps: EventsStep[] = [];
  const events = input.map((e) => [e[0], e[1]] as [number, number]).sort((a, b) => a[0] - b[0]);
  const lastDay = Math.max(...events.map((e) => e[1]));
  const open: number[] = [];
  let count = 0;
  let i = 0;

  const snap = (o: Partial<EventsData>): EventsData => ({ events, lastDay, day: null, open: [...open].sort((a, b) => a - b), attendedEnd: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<EventsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Each day, attend the open event with the earliest deadline (end day).");

  const popMin = () => {
    let m = 0;
    for (let k = 1; k < open.length; k++) if (open[k] < open[m]) m = k;
    return open.splice(m, 1)[0];
  };

  for (let day = 1; day <= lastDay; day++) {
    while (i < events.length && events[i][0] === day) open.push(events[i++][1]);
    while (open.length && Math.min(...open) < day) popMin();
    if (open.length) {
      const attendedEnd = popMin();
      count++;
      push(10, `Day ${day}: attend the event ending on ${attendedEnd} (count ${count}).`, { day, attendedEnd, count });
    } else {
      push(5, `Day ${day}: no open event to attend.`, { day });
    }
  }

  push(12, `Maximum events attended: ${count}.`, { answer: count });
  return steps;
}
