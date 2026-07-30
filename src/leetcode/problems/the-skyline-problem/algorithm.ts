import type { Step } from "@/core/types";

export interface SkylineData {
  buildings: number[][];
  /** current sweep x-coordinate */
  x: number | null;
  /** whether the event is a building start */
  isStart: boolean;
  /** active heights (multiset) */
  active: number[];
  curMax: number;
  /** key points emitted so far */
  res: number[][];
  answer: number[][] | null;
}

export type SkylineStep = Step<SkylineData>;

/**
 * A skyline changes only at building edges, so sweep left to right over sorted edge events. A multiset of
 * currently-active heights gives the tallest building over each x; whenever that maximum changes, the new
 * height starts a key point. `line` indexes CODE.
 */
export function skylineSteps(buildings: number[][]): SkylineStep[] {
  const steps: SkylineStep[] = [];
  const events: number[][] = [];
  for (const [l, r, h] of buildings) {
    events.push([l, -h]);
    events.push([r, h]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const active = [0];
  const res: number[][] = [];
  let prev = 0;

  const snap = (o: Partial<SkylineData>): SkylineData => ({ buildings, x: null, isStart: false, active: [...active], curMax: Math.max(...active), res: res.map((p) => [...p]), answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<SkylineData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(6, "Sort building edges left to right; track the tallest active building.");

  for (const [x, h] of events) {
    const isStart = h < 0;
    if (isStart) active.push(-h);
    else active.splice(active.indexOf(h), 1);
    const cur = Math.max(...active);
    if (cur !== prev) {
      res.push([x, cur]);
      prev = cur;
      push(15, `x=${x}: tallest active changes to ${cur} → key point [${x}, ${cur}].`, { x, isStart, curMax: cur });
    } else {
      push(13, `x=${x}: ${isStart ? "start" : "end"} of height ${Math.abs(h)}; tallest stays ${cur}.`, { x, isStart, curMax: cur });
    }
  }

  push(19, `Skyline: ${res.map((p) => `[${p}]`).join(", ")}.`, { answer: res.map((p) => [...p]) });
  return steps;
}
