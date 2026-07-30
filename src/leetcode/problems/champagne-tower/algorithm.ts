import type { Step } from "@/core/types";

export interface ChampagneData {
  /** fill amount per glass, per row (already poured through) */
  tower: number[][];
  qRow: number;
  qGlass: number;
  /** row currently overflowing */
  activeRow: number | null;
  answer: number | null;
}

export type ChampagneStep = Step<ChampagneData>;

/**
 * Each glass holds 1 unit; anything beyond that splits equally to the two glasses below. Simulating row
 * by row, a glass with value v > 1 sends (v−1)/2 to each child. The queried glass's answer is capped at
 * 1. `line` indexes CODE.
 */
export function champagneSteps(poured: number, qRow: number, qGlass: number): ChampagneStep[] {
  const steps: ChampagneStep[] = [];
  const tower: number[][] = [[poured]];

  const snap = (o: Partial<ChampagneData>): ChampagneData => ({ tower: tower.map((r) => [...r]), qRow, qGlass, activeRow: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ChampagneData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Pour ${poured} unit(s) into the top glass.`, { activeRow: 0 });

  let row = [poured];
  for (let r = 0; r < qRow; r++) {
    const next = new Array(r + 2).fill(0);
    for (let i = 0; i <= r; i++) {
      const excess = (row[i] - 1) / 2;
      if (excess > 0) {
        next[i] += excess;
        next[i + 1] += excess;
      }
    }
    row = next;
    tower.push([...row]);
    push(11, `Row ${r} overflows into row ${r + 1}: [${row.map((v) => v.toFixed(2)).join(", ")}].`, { activeRow: r + 1 });
  }

  const answer = Math.min(1, row[qGlass]);
  push(13, `Glass (${qRow}, ${qGlass}) holds ${answer.toFixed(4)} (capped at 1).`, { activeRow: qRow, answer });
  return steps;
}
