import type { Step } from "@/core/types";

export interface DominoesData {
  dominoes: string;
  force: number[];
  phase: "right" | "left" | "done";
  idx: number | null;
  /** partial result string once known */
  result: string;
  answer: string | null;
}

export type DominoesStep = Step<DominoesData>;

/**
 * Model each domino as a signed force: a rightward pass adds decaying positive force after every 'R',
 * a leftward pass subtracts decaying force after every 'L'. The net sign at each position decides
 * whether it ends up 'R', 'L', or upright '.'. `line` indexes CODE.
 */
export function dominoesSteps(dominoes: string): DominoesStep[] {
  const steps: DominoesStep[] = [];
  const n = dominoes.length;
  const force = new Array(n).fill(0);

  const resultStr = () => force.map((v) => (v > 0 ? "R" : v < 0 ? "L" : ".")).join("");
  const snap = (o: Partial<DominoesData>): DominoesData => ({ dominoes, force: [...force], phase: "right", idx: null, result: "", answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DominoesData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Rightward push builds positive force; leftward push subtracts. Net sign decides.");

  let f = 0;
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === "R") f = n;
    else if (dominoes[i] === "L") f = 0;
    else f = Math.max(f - 1, 0);
    force[i] += f;
    push(7, `Right pass i=${i} ('${dominoes[i]}'): force ${f} → total ${force[i]}.`, { phase: "right", idx: i });
  }

  f = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (dominoes[i] === "L") f = n;
    else if (dominoes[i] === "R") f = 0;
    else f = Math.max(f - 1, 0);
    force[i] -= f;
    push(14, `Left pass i=${i} ('${dominoes[i]}'): −${f} → total ${force[i]}.`, { phase: "left", idx: i });
  }

  const answer = resultStr();
  push(16, `Final: "${answer}".`, { phase: "done", result: answer, answer });
  return steps;
}
