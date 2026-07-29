import type { Step } from "@/core/types";

export interface PartitionData {
  s: string;
  /** last-occurrence index per character */
  last: [string, number][];
  i: number | null;
  start: number;
  end: number;
  /** partition sizes produced so far */
  result: number[];
  /** boundary just cut, or null */
  cut: boolean;
  answer: number[] | null;
}

export type PartitionStep = Step<PartitionData>;

/**
 * Every character must stay within one partition, so a partition can only close once we pass the last
 * occurrence of every character seen inside it. Extending the window's end to the max last-occurrence
 * and cutting when the index reaches it gives the greedy partitions. `line` indexes CODE.
 */
export function partitionSteps(s: string): PartitionStep[] {
  const steps: PartitionStep[] = [];
  const last = new Map<string, number>();
  for (let i = 0; i < s.length; i++) last.set(s[i], i);
  const result: number[] = [];
  let start = 0;
  let end = 0;

  const snap = (o: Partial<PartitionData>): PartitionData => ({ s, last: [...last.entries()], i: null, start, end, result: [...result], cut: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PartitionData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Record each character's last index; a partition closes when the index reaches its reach.");

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last.get(s[i])!);
    if (i === end) {
      result.push(i - start + 1);
      push(8, `'${s[i]}' at ${i} = reach ${end} → cut partition of size ${i - start + 1}.`, { i, cut: true });
      start = i + 1;
    } else {
      push(6, `'${s[i]}' at ${i}: extend reach to ${end}.`, { i });
    }
  }

  push(12, `Partition sizes: [${result.join(", ")}].`, { answer: [...result] });
  return steps;
}
