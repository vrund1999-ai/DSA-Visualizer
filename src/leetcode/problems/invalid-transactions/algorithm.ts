import type { Step } from "@/core/types";

export interface Transaction {
  name: string;
  time: number;
  amount: number;
  city: string;
}

export interface InvalidTxData {
  txs: Transaction[];
  raw: string[];
  i: number | null;
  j: number | null;
  invalid: number[];
  reason: string | null;
}

export type InvalidTxStep = Step<InvalidTxData>;

const parse = (s: string): Transaction => {
  const [name, time, amount, city] = s.split(",");
  return { name, time: Number(time), amount: Number(amount), city };
};

/**
 * A transaction is invalid if its amount exceeds 1000, or if the same name shows
 * up in a different city within 60 minutes. Scan pairs, flagging every index that
 * breaks either rule. `line` indexes CODE.
 */
export function invalidTxSteps(raw: string[]): InvalidTxStep[] {
  const txs = raw.map(parse);
  const steps: InvalidTxStep[] = [];
  const bad = new Set<number>();

  const snap = (i: number | null, j: number | null, reason: string | null): InvalidTxData => ({
    txs: txs.map((t) => ({ ...t })),
    raw: [...raw],
    i,
    j,
    invalid: [...bad].sort((a, b) => a - b),
    reason,
  });
  const push = (line: number, explanation: string, data: InvalidTxData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Flag transactions over $1000 or repeated in another city within 60 min.", snap(null, null, null));

  for (let i = 0; i < txs.length; i++) {
    if (txs[i].amount > 1000) {
      bad.add(i);
      push(4, `Transaction ${i} (${txs[i].name}, $${txs[i].amount}) exceeds $1000.`, snap(i, null, "amount > 1000"));
    }
    for (let j = i + 1; j < txs.length; j++) {
      if (txs[i].name === txs[j].name && txs[i].city !== txs[j].city && Math.abs(txs[i].time - txs[j].time) <= 60) {
        bad.add(i);
        bad.add(j);
        push(9, `${txs[i].name} in ${txs[i].city}@${txs[i].time} and ${txs[j].city}@${txs[j].time} within 60 min — both invalid.`, snap(i, j, "same name, ≤60 min apart, different cities"));
      }
    }
  }

  push(11, `${bad.size} invalid transaction(s).`, snap(null, null, null));
  return steps;
}
