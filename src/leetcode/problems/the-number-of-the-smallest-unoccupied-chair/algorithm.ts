import type { Step } from "@/core/types";

export interface ChairData {
  times: number[][];
  targetFriend: number;
  /** occupant friend id per chair, or null if empty */
  chairs: (number | null)[];
  time: number | null;
  /** friend currently being seated */
  activeFriend: number | null;
  /** chair just assigned */
  assigned: number | null;
  answer: number | null;
}

export type ChairStep = Step<ChairData>;

/**
 * Everyone takes the smallest free chair on arrival, so processing friends in arrival order and, before
 * each seating, vacating chairs whose occupants have already left, reproduces the seating exactly. `line`
 * indexes CODE.
 */
export function chairSteps(times: number[][], targetFriend: number): ChairStep[] {
  const steps: ChairStep[] = [];
  const n = times.length;
  const chairs: (number | null)[] = new Array(n).fill(null);
  // [leaveTime, chair] currently occupied
  const busy: [number, number][] = [];

  const snap = (o: Partial<ChairData>): ChairData => ({ times, targetFriend, chairs: [...chairs], time: null, activeFriend: null, assigned: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ChairData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const order = times.map((t, i) => [t[0], t[1], i]).sort((a, b) => a[0] - b[0]);
  push(3, `Process friends by arrival time; target friend is ${targetFriend}.`);

  for (const [arrive, leave, id] of order) {
    // vacate
    for (let b = busy.length - 1; b >= 0; b--) {
      if (busy[b][0] <= arrive) {
        const chair = busy[b][1];
        chairs[chair] = null;
        busy.splice(b, 1);
        push(8, `At t=${arrive}, chair ${chair} is vacated.`, { time: arrive, activeFriend: id });
      }
    }
    // smallest free chair
    let chair = 0;
    while (chairs[chair] !== null) chair++;
    chairs[chair] = id;
    push(9, `Friend ${id} arrives at t=${arrive} → smallest free chair ${chair}.`, { time: arrive, activeFriend: id, assigned: chair });
    if (id === targetFriend) {
      push(10, `Target friend ${targetFriend} sits in chair ${chair}.`, { time: arrive, activeFriend: id, assigned: chair, answer: chair });
      return steps;
    }
    busy.push([leave, chair]);
  }

  push(13, "Target friend seated.", {});
  return steps;
}
