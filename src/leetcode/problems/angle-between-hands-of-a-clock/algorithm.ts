import type { Step } from "@/core/types";

export interface ClockData {
  hour: number;
  minutes: number;
  minAngle: number;
  hrAngle: number;
  /** raw |difference| before choosing the smaller arc */
  rawDiff: number | null;
  answer: number | null;
}

export type ClockStep = Step<ClockData>;

/**
 * The minute hand sweeps 6°/min; the hour hand sweeps 30°/hour plus a 0.5°/min drift. The
 * angle between them is the absolute difference, and the answer is the smaller of that arc and
 * its 360° complement. `line` indexes CODE.
 */
export function clockSteps(hour: number, minutes: number): ClockStep[] {
  const steps: ClockStep[] = [];
  const minAngle = minutes * 6;
  const hrAngle = (hour % 12) * 30 + minutes * 0.5;

  const snap = (o: Partial<ClockData>): ClockData => ({ hour, minutes, minAngle, hrAngle, rawDiff: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ClockData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Minute hand: ${minutes} × 6° = ${minAngle}° from 12 o'clock.`);
  push(3, `Hour hand: ${hour % 12} × 30° + ${minutes} × 0.5° = ${hrAngle}°.`);

  const rawDiff = Math.abs(hrAngle - minAngle);
  push(4, `Absolute gap = |${hrAngle} − ${minAngle}| = ${rawDiff}°.`, { rawDiff });

  const answer = Math.min(rawDiff, 360 - rawDiff);
  push(5, `Smaller arc = min(${rawDiff}, ${360 - rawDiff}) = ${answer}°.`, { rawDiff, answer });
  return steps;
}
