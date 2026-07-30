import type { Step } from "@/core/types";

export interface GroupData {
  groupSizes: number[];
  /** person index currently placed */
  cur: number | null;
  /** open buckets: size -> people gathered so far */
  buckets: [number, number[]][];
  /** completed groups */
  groups: number[][];
  /** true when the current person just completed a group */
  flushed: boolean;
  answer: number[][] | null;
}

export type GroupStep = Step<GroupData>;

/**
 * Everyone in a group agrees on its size, so gather people by their required size in buckets; the moment
 * a bucket reaches that size it is a complete group and is flushed, leaving room for the next. `line`
 * indexes CODE.
 */
export function groupSteps(groupSizes: number[]): GroupStep[] {
  const steps: GroupStep[] = [];
  const buckets = new Map<number, number[]>();
  const groups: number[][] = [];

  const snap = (o: Partial<GroupData>): GroupData => ({ groupSizes, cur: null, buckets: [...buckets.entries()].map(([s, ppl]) => [s, [...ppl]]), groups: groups.map((g) => [...g]), flushed: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<GroupData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Gather people into buckets keyed by their required group size; flush a bucket when it fills.");

  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];
    if (!buckets.has(size)) buckets.set(size, []);
    const group = buckets.get(size)!;
    group.push(i);
    if (group.length === size) {
      groups.push([...group]);
      buckets.set(size, []);
      push(9, `Person ${i} fills a size-${size} bucket → emit group [${group.join(", ")}].`, { cur: i, flushed: true });
    } else {
      push(7, `Person ${i} joins the size-${size} bucket (${group.length}/${size}).`, { cur: i });
    }
  }

  push(13, `Formed ${groups.length} group(s).`, { answer: groups.map((g) => [...g]) });
  return steps;
}
