import type { Step } from "@/core/types";

export interface LunchData {
  sandwiches: number[];
  /** how many students still want [circular(0), square(1)] */
  want: [number, number];
  /** index of the sandwich on top of the stack */
  top: number | null;
  /** true when nobody wants the top sandwich */
  stuck: boolean;
  answer: number | null;
}

export type LunchStep = Step<LunchData>;

/**
 * Order of students in the queue doesn't affect who eats — only the counts of each
 * preference matter. Serve sandwiches top-down: if any remaining student wants the top,
 * one takes it; otherwise the line is stuck and the leftover sandwiches equal the stuck
 * students. `line` indexes CODE.
 */
export function lunchSteps(students: number[], sandwiches: number[]): LunchStep[] {
  const steps: LunchStep[] = [];
  const want: [number, number] = [0, 0];
  for (const s of students) want[s]++;

  const snap = (o: Partial<LunchData>): LunchData => ({ sandwiches: [...sandwiches], want: [...want] as [number, number], top: null, stuck: false, answer: null, ...o });
  const push = (line: number, explanation: string, data: LunchData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Preferences: ${want[0]} want circular, ${want[1]} want square.`, snap({}));

  for (let i = 0; i < sandwiches.length; i++) {
    const top = sandwiches[i];
    if (want[top] === 0) {
      const left = sandwiches.length - i;
      push(6, `Nobody wants ${top === 0 ? "circular" : "square"} — ${left} student(s) stuck.`, snap({ top: i, stuck: true, answer: left }));
      return steps;
    }
    want[top]--;
    push(7, `A student takes ${top === 0 ? "circular" : "square"} sandwich ${i}.`, snap({ top: i }));
  }

  push(9, "Everyone ate → 0.", snap({ answer: 0 }));
  return steps;
}
