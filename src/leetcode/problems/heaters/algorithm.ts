import type { Step } from "@/core/types";

export interface HeatersData {
  houses: number[];
  heaters: number[];
  /** house index currently examined */
  house: number | null;
  /** heater index j (nearest so far) */
  j: number;
  /** distance from this house to its nearest heater */
  dist: number | null;
  radius: number;
  answer: number | null;
}

export type HeatersStep = Step<HeatersData>;

/**
 * Sort both. For each house (also sorted), advance a heater pointer to the closest
 * heater; the required radius is the max over all houses of that nearest distance.
 * `line` indexes CODE.
 */
export function heatersSteps(housesIn: number[], heatersIn: number[]): HeatersStep[] {
  const steps: HeatersStep[] = [];
  const houses = [...housesIn].sort((a, b) => a - b);
  const heaters = [...heatersIn].sort((a, b) => a - b);
  let radius = 0;
  let j = 0;

  const snap = (o: Partial<HeatersData>): HeatersData => ({ houses: [...houses], heaters: [...heaters], house: null, j, dist: null, radius, answer: null, ...o });
  const push = (line: number, explanation: string, data: HeatersData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Sort both; each house needs the nearest heater within the radius.", snap({}));

  for (let h = 0; h < houses.length; h++) {
    const house = houses[h];
    while (j + 1 < heaters.length && Math.abs(heaters[j + 1] - house) <= Math.abs(heaters[j] - house)) j++;
    const dist = Math.abs(heaters[j] - house);
    radius = Math.max(radius, dist);
    push(9, `House ${house}: nearest heater ${heaters[j]}, distance ${dist} → radius ${radius}.`, snap({ house: h, dist }));
  }

  push(11, `Minimum radius: ${radius}.`, snap({ answer: radius }));
  return steps;
}
