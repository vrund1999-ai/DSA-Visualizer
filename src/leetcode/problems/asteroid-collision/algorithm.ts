import type { Step } from "@/core/types";

export interface AsteroidData {
  asteroids: number[];
  /** index of the incoming asteroid being processed */
  incoming: number | null;
  stack: number[];
  /** value(s) that exploded this step, for narration */
  exploded: number[];
  done: boolean;
}

export type AsteroidStep = Step<AsteroidData>;

/**
 * A stack holds surviving asteroids. A collision only happens when a left-moving
 * (negative) asteroid meets a right-moving (positive) one on top of the stack; the
 * smaller magnitude explodes (ties destroy both). `line` indexes CODE.
 */
export function asteroidSteps(asteroids: number[]): AsteroidStep[] {
  const steps: AsteroidStep[] = [];
  const stack: number[] = [];

  const snap = (o: Partial<AsteroidData>): AsteroidData => ({ asteroids: [...asteroids], incoming: null, stack: [...stack], exploded: [], done: false, ...o });
  const push = (line: number, explanation: string, data: AsteroidData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "A stack keeps the surviving asteroids; collisions happen at the top.", snap({}));

  for (let idx = 0; idx < asteroids.length; idx++) {
    const a = asteroids[idx];
    let alive = true;
    push(3, `Incoming ${a} (${a > 0 ? "→" : "←"}).`, snap({ incoming: idx }));
    while (alive && a < 0 && stack.length && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1];
      if (top < -a) {
        stack.pop();
        push(7, `${top} < ${-a} — top explodes.`, snap({ incoming: idx, exploded: [top] }));
      } else if (top === -a) {
        stack.pop();
        alive = false;
        push(8, `${top} == ${-a} — both explode.`, snap({ incoming: idx, exploded: [top, a] }));
      } else {
        alive = false;
        push(9, `${top} > ${-a} — incoming ${a} explodes.`, snap({ incoming: idx, exploded: [a] }));
      }
    }
    if (alive) {
      stack.push(a);
      push(11, `${a} survives — push onto the stack.`, snap({ incoming: idx }));
    }
  }

  push(13, `Survivors: [${stack.join(", ")}].`, snap({ done: true }));
  return steps;
}
