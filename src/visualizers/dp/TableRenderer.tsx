import { Fragment } from "react";
import type { HighlightRole, RendererProps } from "@/core/types";
import { cellRef, type TableData } from "./types";

const ROLE_CLASS: Record<string, string> = {
  current: "bg-role-current text-white border-role-current",
  compared: "bg-role-compared/30 border-role-compared",
  target: "bg-role-sorted text-white border-role-sorted",
  visited: "bg-role-visited/15 border-border",
  default: "bg-card border-border",
};

const LEGEND: { role: HighlightRole; label: string; swatch: string }[] = [
  { role: "current", label: "Filling", swatch: "bg-role-current" },
  { role: "compared", label: "Depends on", swatch: "bg-role-compared" },
  { role: "target", label: "Answer", swatch: "bg-role-sorted" },
];

/** Shared by every DP visualizer — a 2D table with optional row/column labels. */
export function TableRenderer({ step }: RendererProps<TableData>) {
  const { rows, cols, cells, rowLabels, colLabels } = step.data;
  const roleFor = (r: number, c: number): string =>
    step.highlights.find((h) => h.ref === cellRef(r, c))?.role ?? "default";

  const hasRowLabels = !!rowLabels;
  const templateColumns = `${hasRowLabels ? "auto " : ""}repeat(${cols}, minmax(2.25rem, 1fr))`;

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex flex-1 items-center justify-center overflow-auto">
        <div
          className="grid gap-1 text-sm"
          style={{ gridTemplateColumns: templateColumns }}
        >
          {colLabels && (
            <Fragment>
              {hasRowLabels && <div />}
              {colLabels.map((label, c) => (
                <div
                  key={`col-${c}`}
                  className="flex h-6 items-center justify-center text-xs font-semibold text-muted-foreground"
                >
                  {label}
                </div>
              ))}
            </Fragment>
          )}

          {Array.from({ length: rows }).map((_, r) => (
            <Fragment key={`row-${r}`}>
              {hasRowLabels && (
                <div className="flex items-center justify-end pr-1 text-xs font-semibold text-muted-foreground">
                  {rowLabels![r]}
                </div>
              )}
              {Array.from({ length: cols }).map((__, c) => {
                const v = cells[r]?.[c];
                return (
                  <div
                    key={`${r},${c}`}
                    className={`flex aspect-square min-w-[2.25rem] items-center justify-center rounded-md border-2 tabular-nums transition-colors ${
                      ROLE_CLASS[roleFor(r, c)] ?? ROLE_CLASS.default
                    }`}
                  >
                    {v === null || v === undefined ? "" : v}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {LEGEND.map(({ role, label, swatch }) => (
          <span
            key={role}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span className={`inline-block size-3 rounded-sm ${swatch}`} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
