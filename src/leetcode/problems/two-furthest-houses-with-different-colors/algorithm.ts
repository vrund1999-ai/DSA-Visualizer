import type { Step } from "@/core/types";

export interface TwoHousesData {
  colors: number[];
  scan: number | null;
  /** the best pair of indices found so far */
  bestPair: [number, number] | null;
  best: number;
  phase: "first" | "last";
  answer: number | null;
}

export type TwoHousesStep = Step<TwoHousesData>;

/**
 * Two Furthest Houses: the maximum distance between two differently-colored houses always involves an
 * endpoint. Compare the first house against every later house of a different color, and the last house
 * against every earlier one, keeping the largest gap. `line` indexes CODE.
 */
export function twoHousesSteps(colors: number[]): TwoHousesStep[] {
  const steps: TwoHousesStep[] = [];
  const n = colors.length;
  let best = 0;
  let bestPair: [number, number] | null = null;

  const snap = (o: Partial<TwoHousesData>): TwoHousesData => ({
    colors,
    scan: null,
    bestPair,
    best,
    phase: "first",
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<TwoHousesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `The furthest differing pair always includes an endpoint.`);

  for (let j = 0; j < n; j++) {
    if (colors[j] !== colors[0] && j > best) {
      best = j;
      bestPair = [0, j];
      push(6, `House ${j} differs from house 0 → distance ${j}.`, { scan: j, phase: "first" });
    }
  }

  for (let i = 0; i < n; i++) {
    if (colors[i] !== colors[n - 1] && n - 1 - i > best) {
      best = n - 1 - i;
      bestPair = [i, n - 1];
      push(9, `House ${i} differs from house ${n - 1} → distance ${n - 1 - i}.`, { scan: i, phase: "last" });
    }
  }

  push(10, `Maximum distance = ${best}.`, { answer: best });
  return steps;
}
