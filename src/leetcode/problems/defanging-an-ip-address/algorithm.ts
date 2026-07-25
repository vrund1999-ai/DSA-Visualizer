import type { Step } from "@/core/types";

export interface DefangData {
  address: string;
  idx: number | null;
  out: string;
  isDot: boolean;
  answer: string | null;
}

export type DefangStep = Step<DefangData>;

/**
 * Defanging just rewrites each character, replacing every '.' with the literal "[.]" so the
 * address can't be clicked, and copying everything else unchanged. `line` indexes CODE.
 */
export function defangSteps(address: string): DefangStep[] {
  const steps: DefangStep[] = [];
  let out = "";

  const snap = (o: Partial<DefangData>): DefangData => ({ address, idx: null, out, isDot: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DefangData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Copy each character, expanding every '.' into '[.]'.");

  for (let i = 0; i < address.length; i++) {
    const ch = address[i];
    if (ch === ".") {
      out += "[.]";
      push(4, `'.' at ${i} → append "[.]".`, { idx: i, isDot: true });
    } else {
      out += ch;
      push(6, `'${ch}' at ${i} → append as-is.`, { idx: i });
    }
  }

  push(8, `Defanged address: "${out}".`, { answer: out });
  return steps;
}
