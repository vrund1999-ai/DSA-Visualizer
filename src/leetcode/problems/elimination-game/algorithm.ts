import type { Step } from "@/core/types";

export interface EliminationData {
  n: number;
  head: number;
  step: number;
  remaining: number;
  leftToRight: boolean;
  /** whether head moved on this pass */
  headMoved: boolean;
  answer: number | null;
}

export type EliminationStep = Step<EliminationData>;

/**
 * Instead of storing the list, we track only the first surviving number (`head`) and the
 * gap (`step`) between survivors. Each pass doubles the gap and halves the count; the head
 * advances whenever we sweep left→right, or right→left with an odd count. `line` indexes CODE.
 */
export function eliminationSteps(n: number): EliminationStep[] {
  const steps: EliminationStep[] = [];
  let head = 1;
  let step = 1;
  let remaining = n;
  let leftToRight = true;

  const snap = (o: Partial<EliminationData>): EliminationData => ({ n, head, step, remaining, leftToRight, headMoved: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<EliminationData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Track only head (first survivor) and step (gap) for n = ${n}.`);

  while (remaining > 1) {
    const moves = leftToRight || remaining % 2 === 1;
    push(4, `${leftToRight ? "Left→right" : "Right→left"}, ${remaining} left: head ${moves ? "is removed → advances" : "survives"}.`, { headMoved: moves });
    if (moves) head += step;
    remaining = Math.floor(remaining / 2);
    step *= 2;
    leftToRight = !leftToRight;
    push(8, `After pass: head = ${head}, step = ${step}, remaining = ${remaining}.`, { headMoved: moves });
  }

  push(10, `Last remaining number: ${head}.`, { answer: head });
  return steps;
}
