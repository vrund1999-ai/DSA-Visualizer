import { Fragment } from "react";
import { ROLE_CLASS } from "./viz";

export interface ChainNode {
  key: string | number;
  value: string | number;
  /** Highlight role, or "default". */
  role?: string;
  /** Pointer label drawn above the node, e.g. "cur", "prev". */
  label?: string;
}

/**
 * A horizontal linked-list rendering: node boxes joined by → arrows, ending in
 * ∅. Shared by the linked-list problems (reverse / merge / add two numbers).
 */
export function NodeChain({
  nodes,
  showNull = true,
  emptyLabel = "∅ (empty)",
}: {
  nodes: ChainNode[];
  showNull?: boolean;
  emptyLabel?: string;
}) {
  if (nodes.length === 0) {
    return <span className="text-xs text-muted-foreground">{emptyLabel}</span>;
  }
  return (
    <div className="flex items-start justify-center gap-1 overflow-x-auto">
      {nodes.map((n) => (
        <Fragment key={n.key}>
          <div className="flex flex-col items-center gap-1">
            <span className="h-4 text-[10px] font-semibold uppercase tracking-wide text-role-current">
              {n.label ?? ""}
            </span>
            <div
              className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${
                ROLE_CLASS[n.role ?? "default"] ?? ROLE_CLASS.default
              }`}
            >
              {n.value}
            </div>
          </div>
          <span className="mt-6 text-muted-foreground">→</span>
        </Fragment>
      ))}
      {showNull && <span className="mt-6 text-muted-foreground">∅</span>}
    </div>
  );
}
