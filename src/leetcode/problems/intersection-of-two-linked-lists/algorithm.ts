import type { Step } from "@/core/types";

export interface ListNodeView {
  id: string;
  val: number;
}

export interface IntersectionData {
  a: ListNodeView[];
  b: ListNodeView[];
  /** pointer positions: index into a (0..len) then into b, tracked as node id | null */
  pA: string | null;
  pB: string | null;
  meetId: string | null;
  done: boolean;
}

export type IntersectionStep = Step<IntersectionData>;

/**
 * Two pointers start at each head and, on reaching the end, jump to the OTHER head.
 * After at most lenA + lenB steps they have walked equal distance and meet at the
 * intersection node (or both hit null together). `line` indexes CODE.
 */
export function intersectionSteps(a: ListNodeView[], b: ListNodeView[]): IntersectionStep[] {
  const steps: IntersectionStep[] = [];

  // build id -> next chains that share the common suffix by id
  const idAt = (list: ListNodeView[], i: number): string | null => (i < list.length ? list[i].id : null);

  let ia = 0;
  let ib = 0;
  let switchedA = false;
  let switchedB = false;

  const nodeId = (list: ListNodeView[], i: number) => idAt(list, i);

  const snap = (o: Partial<IntersectionData>): IntersectionData => ({ a, b, pA: null, pB: null, meetId: null, done: false, ...o });
  const push = (line: number, explanation: string, data: IntersectionData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const curA = () => (!switchedA ? nodeId(a, ia) : nodeId(b, ia));
  const curB = () => (!switchedB ? nodeId(b, ib) : nodeId(a, ib));

  push(1, "Two pointers start at the two heads.", snap({ pA: curA(), pB: curB() }));

  let guard = 0;
  const maxSteps = 2 * (a.length + b.length) + 4;
  while (curA() !== curB() && guard++ < maxSteps) {
    // advance A
    if (!switchedA) {
      ia++;
      if (nodeId(a, ia) === null && !switchedA) { switchedA = true; ia = 0; }
    } else {
      ia++;
    }
    // advance B
    if (!switchedB) {
      ib++;
      if (nodeId(b, ib) === null && !switchedB) { switchedB = true; ib = 0; }
    } else {
      ib++;
    }
    push(5, `Advance both pointers${switchedA || switchedB ? " (a pointer has switched lists)" : ""}.`, snap({ pA: curA(), pB: curB() }));
  }

  const meet = curA();
  push(8, meet !== null ? `Pointers meet at the intersection (value ${[...a, ...b].find((n) => n.id === meet)?.val}).` : "Both reach null — the lists do not intersect.", snap({ pA: meet, pB: meet, meetId: meet, done: true }));
  return steps;
}
