import type { Step } from "@/core/types";

export interface FurthestData {
  moves: string;
  scan: number | null;
  L: number;
  R: number;
  wild: number;
  answer: number | null;
}

export type FurthestStep = Step<FurthestData>;

/**
 * Each '_' is a wildcard that can step left or right. To be furthest from the origin, spend every wildcard
 * in the direction the fixed moves already lean, so the max distance is |L − R| + (number of '_').
 * `line` indexes CODE.
 */
export function furthestSteps(moves: string): FurthestStep[] {
  const steps: FurthestStep[] = [];
  let L = 0;
  let R = 0;
  let wild = 0;

  const snap = (o: Partial<FurthestData>): FurthestData => ({ moves, scan: null, L, R, wild, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FurthestData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Count L, R and wildcard '_' moves in "${moves}".`);

  for (let i = 0; i < moves.length; i++) {
    const c = moves[i];
    if (c === "L") {
      L++;
      push(3, `moves[${i}] = 'L' → L = ${L}.`, { scan: i });
    } else if (c === "R") {
      R++;
      push(4, `moves[${i}] = 'R' → R = ${R}.`, { scan: i });
    } else {
      wild++;
      push(5, `moves[${i}] = '_' wildcard → wild = ${wild}.`, { scan: i });
    }
  }

  const answer = Math.abs(L - R) + wild;
  push(7, `|${L} − ${R}| + ${wild} wildcard(s) = ${answer}.`, { answer });
  return steps;
}
