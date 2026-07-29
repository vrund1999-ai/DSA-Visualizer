import type { Step } from "@/core/types";

export interface AltitudeData {
  gain: number[];
  idx: number | null;
  /** altitude prefix values including the leading 0 */
  altitudes: number[];
  altitude: number;
  highest: number;
  highestIdx: number;
  answer: number | null;
}

export type AltitudeStep = Step<AltitudeData>;

/**
 * Altitudes are the running (prefix) sum of the gains, starting at 0. Sweeping once accumulates the
 * current altitude and keeps the maximum seen. `line` indexes CODE.
 */
export function altitudeSteps(gain: number[]): AltitudeStep[] {
  const steps: AltitudeStep[] = [];
  const altitudes = [0];
  let altitude = 0;
  let highest = 0;
  let highestIdx = 0;

  const snap = (o: Partial<AltitudeData>): AltitudeData => ({ gain, idx: null, altitudes: [...altitudes], altitude, highest, highestIdx, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<AltitudeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Altitude starts at 0; accumulate gains and track the highest point.");

  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    altitudes.push(altitude);
    if (altitude > highest) { highest = altitude; highestIdx = i + 1; }
    push(4, `+${gain[i]} → altitude ${altitude}; highest ${highest}.`, { idx: i + 1 });
  }

  push(6, `Highest altitude reached: ${highest}.`, { answer: highest });
  return steps;
}
