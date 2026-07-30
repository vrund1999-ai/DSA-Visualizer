import type { Step } from "@/core/types";

export interface AlternatingData {
  colors: number[];
  k: number;
  /** window start currently tested */
  start: number | null;
  /** indices in the current window (circular) */
  window: number[];
  ok: boolean | null;
  count: number;
  answer: number | null;
}

export type AlternatingStep = Step<AlternatingData>;

const MAX_STEPS = 400;

/**
 * A circular tile row of colors; an alternating group is any k consecutive tiles whose adjacent colors all
 * differ. Slide a length-k window over every start (wrapping around) and count the ones that fully
 * alternate. `line` indexes CODE.
 */
export function alternatingSteps(colors: number[], k: number): AlternatingStep[] {
  const steps: AlternatingStep[] = [];
  const n = colors.length;
  let count = 0;

  const snap = (o: Partial<AlternatingData>): AlternatingData => ({
    colors,
    k,
    start: null,
    window: [],
    ok: null,
    count,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<AlternatingData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Count length-${k} circular windows whose colors fully alternate.`);

  for (let start = 0; start < n; start++) {
    const window = Array.from({ length: k }, (_, j) => (start + j) % n);
    let ok = true;
    for (let j = 1; j < k; j++) {
      if (colors[(start + j - 1) % n] === colors[(start + j) % n]) {
        ok = false;
        break;
      }
    }
    if (ok) count++;
    push(ok ? 10 : 8, `Window from ${start} ${ok ? "alternates → count " + count : "has a repeat → skip"}.`, {
      start,
      window,
      ok,
    });
  }

  push(12, `Total alternating groups = ${count}.`, { answer: count });
  return steps;
}
