import type { Step } from "@/core/types";

export interface CalendarData {
  ops: [number, number][];
  opIndex: number | null;
  /** intervals accepted so far */
  booked: [number, number][];
  /** existing interval index that conflicted, if any */
  conflict: number | null;
  result: boolean | null;
  answers: (boolean | null)[];
}

export type CalendarStep = Step<CalendarData>;

/**
 * My Calendar I: a booking [start, end) is accepted only if it overlaps none of the existing events. Two
 * half-open intervals overlap iff start < e and s < end. `line` indexes CODE.
 */
export function calendarSteps(ops: [number, number][]): CalendarStep[] {
  const steps: CalendarStep[] = [];
  const booked: [number, number][] = [];
  const answers: (boolean | null)[] = ops.map(() => null);

  const snap = (o: Partial<CalendarData>): CalendarData => ({
    ops,
    opIndex: null,
    booked: booked.map((b) => [...b] as [number, number]),
    conflict: null,
    result: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<CalendarData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Book each event only if it doesn't overlap an existing one.`);

  for (let k = 0; k < ops.length; k++) {
    const [start, end] = ops[k];
    let conflict = -1;
    for (let i = 0; i < booked.length; i++) {
      const [s, e] = booked[i];
      if (start < e && s < end) {
        conflict = i;
        break;
      }
    }
    if (conflict >= 0) {
      answers[k] = false;
      push(5, `book(${start}, ${end}) overlaps [${booked[conflict][0]}, ${booked[conflict][1]}) → reject.`, { opIndex: k, conflict, result: false });
    } else {
      booked.push([start, end]);
      answers[k] = true;
      push(7, `book(${start}, ${end}) fits → accept.`, { opIndex: k, result: true });
    }
  }

  return steps;
}
