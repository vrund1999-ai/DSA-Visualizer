import type { Step } from "@/core/types";

export interface NetworkData {
  n: number;
  connections: number[][];
  /** component root per node */
  root: number[];
  /** edge index currently processed */
  edge: number | null;
  redundant: boolean;
  components: number;
  answer: number | null;
}

export type NetworkStep = Step<NetworkData>;

/**
 * A spanning connection needs at least n−1 cables. With enough cables, each extra (redundant) one inside
 * an already-connected component can be reused to link a separate component, so the answer is
 * (components − 1). Union-find counts the components. `line` indexes CODE.
 */
export function networkSteps(n: number, connections: number[][]): NetworkStep[] {
  const steps: NetworkStep[] = [];
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])));
  let components = n;

  const roots = () => Array.from({ length: n }, (_, i) => find(i));
  const snap = (o: Partial<NetworkData>): NetworkData => ({ n, connections, root: roots(), edge: null, redundant: false, components, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<NetworkData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (connections.length < n - 1) {
    push(1, `Only ${connections.length} cable(s) for ${n} computers (need ≥ ${n - 1}) → impossible.`, { answer: -1 });
    return steps;
  }

  push(5, `${n} computers start as ${n} separate components; union each cable.`);

  for (let e = 0; e < connections.length; e++) {
    const [a, b] = connections[e];
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) {
      parent[ra] = rb;
      components--;
      push(9, `Cable ${a}–${b} merges two components → ${components} left.`, { edge: e });
    } else {
      push(11, `Cable ${a}–${b} is redundant (already connected) — reusable.`, { edge: e, redundant: true });
    }
  }

  const answer = components - 1;
  push(13, `${components} component(s) → ${answer} cable move(s) needed.`, { answer });
  return steps;
}
