import type { Highlight, Step } from "@/core/types";

export interface DailyTempData {
  temps: number[];
  res: number[];
  i: number | null;
  stack: number[];
}

export type DailyTempStep = Step<DailyTempData>;

/**
 * A stack keeps indices of days still waiting for a warmer one, with decreasing
 * temperatures. When today is warmer than the stack top, that day's answer is the
 * gap to today; pop until the invariant holds. `line` indexes CODE.
 */
export function dailyTempSteps(temps: number[]): DailyTempStep[] {
  const steps: DailyTempStep[] = [];
  const res = new Array(temps.length).fill(0);
  const stack: number[] = [];

  const snap = (o: Partial<DailyTempData>): DailyTempData => ({
    temps: [...temps],
    res: [...res],
    i: null,
    stack: [...stack],
    ...o,
  });
  const push = (line: number, explanation: string, data: DailyTempData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(2, "A stack holds days still waiting for a warmer temperature.", snap({}), []);

  for (let i = 0; i < temps.length; i++) {
    push(4, `Day ${i}: ${temps[i]}°. Resolve any cooler days on the stack.`, snap({ i }), [{ ref: i, role: "current" }]);
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const j = stack.pop()!;
      res[j] = i - j;
      push(7, `${temps[i]}° > day ${j}'s ${temps[j]}° — wait was ${i - j} day(s).`, snap({ i }), [
        { ref: j, role: "sorted" },
        { ref: i, role: "compared" },
      ]);
    }
    stack.push(i);
    push(9, `Push day ${i} onto the stack.`, snap({ i }), [{ ref: i, role: "active" }]);
  }

  push(11, "Days left on the stack never get warmer — they stay 0.", snap({ i: null }), stack.map((j) => ({ ref: j, role: "visited" }) as Highlight));
  return steps;
}
