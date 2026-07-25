import type { Step } from "@/core/types";

export interface AccountsData {
  accounts: string[][];
  /** union step being shown: two emails joined */
  joining: [string, string] | null;
  /** current DSU edges as email -> root pairs */
  roots: [string, string][];
  /** merged result groups: [name, ...sorted emails] */
  groups: string[][];
  phase: "union" | "group" | "done";
}

export type AccountsStep = Step<AccountsData>;

/**
 * Union-Find over email addresses: every email in one account is unioned with the
 * account's first email, so shared emails transitively merge accounts. Finally each
 * DSU root collects its emails (sorted) under the owner's name. `line` indexes CODE.
 */
export function accountsSteps(accounts: string[][]): AccountsStep[] {
  const steps: AccountsStep[] = [];
  const parent: Record<string, string> = {};
  const owner: Record<string, string> = {};

  const find = (e: string): string => {
    while (parent[e] !== e) {
      parent[e] = parent[parent[e]];
      e = parent[e];
    }
    return e;
  };
  const union = (a: string, b: string) => {
    parent[find(a)] = find(b);
  };

  const rootsList = () => Object.keys(parent).map((e) => [e, find(e)] as [string, string]);
  const snap = (o: Partial<AccountsData>): AccountsData => ({ accounts: accounts.map((a) => [...a]), joining: null, roots: rootsList(), groups: [], phase: "union", ...o });
  const push = (line: number, explanation: string, data: AccountsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Union every email in an account with the account's first email.", snap({}));

  for (const [name, ...emails] of accounts) {
    for (const e of emails) {
      if (parent[e] === undefined) parent[e] = e;
      owner[e] = name;
      union(emails[0], e);
      push(8, `Union "${emails[0]}" with "${e}".`, snap({ joining: [emails[0], e] }));
    }
  }

  // group by root
  const byRoot = new Map<string, string[]>();
  for (const e of Object.keys(parent)) {
    const r = find(e);
    if (!byRoot.has(r)) byRoot.set(r, []);
    byRoot.get(r)!.push(e);
  }
  const groups = [...byRoot.entries()].map(([r, es]) => [owner[r], ...es.sort()]);
  push(12, `Merged into ${groups.length} account(s).`, snap({ groups, phase: "done" }));
  return steps;
}
