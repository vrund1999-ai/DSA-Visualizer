import type { Step } from "@/core/types";

export interface MeetingData {
  starts: number[];
  ends: number[];
  s: number | null;
  e: number;
  rooms: number;
  maxRooms: number;
}

export type MeetingStep = Step<MeetingData>;

/**
 * Sort start and end times separately, then sweep: each start before the next
 * end needs a new room, otherwise a meeting has ended and frees one. The peak
 * concurrent count is the answer. `line` indexes CODE.
 */
export function meetingSteps(intervals: [number, number][]): MeetingStep[] {
  const starts = intervals.map((i) => i[0]).sort((a, b) => a - b);
  const ends = intervals.map((i) => i[1]).sort((a, b) => a - b);
  const steps: MeetingStep[] = [];
  let rooms = 0;
  let maxRooms = 0;
  let e = 0;

  const snap = (o: Partial<MeetingData>): MeetingData => ({
    starts: [...starts],
    ends: [...ends],
    s: null,
    e,
    rooms,
    maxRooms,
    ...o,
  });
  const push = (line: number, explanation: string, data: MeetingData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { rooms, maxRooms } });
  };

  push(3, "Sort starts and ends; sweep through time counting concurrent meetings.", snap({}));

  for (let s = 0; s < starts.length; s++) {
    if (starts[s] < ends[e]) {
      rooms++;
      push(5, `Meeting starts at ${starts[s]} before ${ends[e]} ends — open a room (now ${rooms}).`, snap({ s }));
    } else {
      e++;
      push(6, `A meeting ended by ${starts[s]} (end ${ends[e - 1]}) — reuse its room.`, snap({ s }));
    }
    if (rooms > maxRooms) maxRooms = rooms;
    push(7, `Peak rooms so far: ${maxRooms}.`, snap({ s }));
  }

  push(9, `Minimum meeting rooms required: ${maxRooms}.`, snap({}));
  return steps;
}
