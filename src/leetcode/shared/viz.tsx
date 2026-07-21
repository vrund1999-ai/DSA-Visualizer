import type { ReactNode } from "react";
import type { Highlight } from "@/core/types";

/**
 * Shared rendering primitives for LeetCode visualizers. Every renderer maps the
 * current step's semantic `HighlightRole`s onto these Tailwind classes, so the
 * whole section stays visually consistent (and matches the algorithm catalog's
 * `role-*` palette). Extracted from the per-renderer ROLE_CLASS/LEGEND maps.
 */
export const ROLE_CLASS: Record<string, string> = {
  current: "bg-role-current text-white border-role-current",
  compared: "bg-role-compared text-white border-role-compared",
  swapped: "bg-role-swapped text-white border-role-swapped",
  visited: "bg-role-visited/15 border-role-visited/40 text-muted-foreground",
  active: "bg-role-active/20 border-role-active text-foreground",
  sorted: "bg-role-sorted text-white border-role-sorted",
  path: "bg-role-path text-black border-role-path",
  pivot: "bg-role-pivot text-white border-role-pivot",
  wall: "bg-role-wall text-white border-role-wall",
  target: "bg-role-target text-white border-role-target",
  default: "bg-muted/30 border-border text-foreground",
};

export const SWATCH_CLASS: Record<string, string> = {
  current: "bg-role-current",
  compared: "bg-role-compared",
  swapped: "bg-role-swapped",
  visited: "bg-role-visited",
  active: "bg-role-active",
  sorted: "bg-role-sorted",
  path: "bg-role-path",
  pivot: "bg-role-pivot",
  wall: "bg-role-wall",
  target: "bg-role-target",
};

/** Build a `roleFor(ref)` lookup from a step's highlights (last one wins). */
export function roleLookup(highlights: Highlight[]): (ref: string | number) => string {
  const map = new Map<string | number, string>();
  for (const h of highlights) map.set(h.ref, h.role);
  return (ref) => map.get(ref) ?? "default";
}

export interface ArrayCellsProps {
  values: (number | string)[];
  /** Role name (e.g. "current") or "default" per index. */
  roleFor: (i: number) => string;
  /** Pointer label drawn above a cell, e.g. "i", "L", "R". */
  topLabel?: (i: number) => string;
  /** Small badge drawn below the index, e.g. a running value. */
  badge?: (i: number) => string | undefined;
  showIndex?: boolean;
  cellWidth?: string;
}

/** A horizontal row of value cells with optional pointer labels + index labels. */
export function ArrayCells({
  values,
  roleFor,
  topLabel,
  badge,
  showIndex = true,
  cellWidth = "w-11",
}: ArrayCellsProps) {
  return (
    <div className="flex items-center justify-center overflow-x-auto">
      <div className="flex flex-wrap items-start justify-center gap-1.5">
        {values.map((v, i) => {
          const role = roleFor(i);
          const label = topLabel?.(i) ?? "";
          const b = badge?.(i);
          return (
            <div key={i} className={`flex flex-col items-center gap-1 ${cellWidth}`}>
              <span className="h-4 text-[10px] font-semibold uppercase tracking-wide text-role-current">
                {label}
              </span>
              <div
                className={`flex aspect-square w-full items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${
                  ROLE_CLASS[role] ?? ROLE_CLASS.default
                }`}
              >
                {v}
              </div>
              {showIndex && (
                <span className="text-[10px] tabular-nums text-muted-foreground">
                  {b ?? i}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export interface LegendItem {
  role: string;
  label: string;
}

/** The color key shown under a visualization. */
export function Legend({ items }: { items: LegendItem[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map(({ role, label }) => (
        <span
          key={`${role}-${label}`}
          className="flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <span
            className={`inline-block size-3 rounded-sm ${SWATCH_CLASS[role] ?? "bg-muted"}`}
          />
          {label}
        </span>
      ))}
    </div>
  );
}

/** A titled panel wrapper used by several renderers. */
export function StagePanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </span>
      {children}
    </div>
  );
}
