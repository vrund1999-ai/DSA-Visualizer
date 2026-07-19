import type { HighlightRole, RendererProps } from "@/core/types";
import type { SearchData } from "./types";

const ROLE_CLASS: Record<string, string> = {
  active: "bg-role-active/20 border-role-active text-foreground",
  current: "bg-role-current text-white border-role-current",
  compared: "bg-role-compared text-white border-role-compared",
  visited: "bg-role-visited/15 border-role-visited/40 text-muted-foreground",
  target: "bg-role-sorted text-white border-role-sorted",
  default: "bg-muted/30 border-border text-foreground",
};

const LEGEND: { role: HighlightRole | "default"; label: string }[] = [
  { role: "active", label: "Search window" },
  { role: "current", label: "Mid / cursor" },
  { role: "visited", label: "Eliminated" },
  { role: "target", label: "Found" },
];

const LEGEND_SWATCH: Record<string, string> = {
  active: "bg-role-active",
  current: "bg-role-current",
  visited: "bg-role-visited",
  target: "bg-role-sorted",
  default: "bg-muted-foreground/40",
};

/** Shared by every searching visualizer — a row of value cells, colored by role. */
export function SearchRenderer({ step }: RendererProps<SearchData>) {
  const { values, target, foundIndex } = step.data;

  const roleFor = (i: number): string =>
    step.highlights.find((h) => h.ref === i)?.role ?? "default";
  const badgeFor = (i: number): string | undefined =>
    step.highlights.find((h) => h.ref === i && h.badge)?.badge;

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">
          {target}
        </span>
        <span className="ml-3 text-muted-foreground">
          {foundIndex === null
            ? "searching…"
            : foundIndex < 0
              ? "not present"
              : `found at index ${foundIndex}`}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center overflow-x-auto">
        <div className="flex flex-wrap items-start justify-center gap-1.5">
          {values.map((v, i) => {
            const role = roleFor(i);
            const badge = badgeFor(i);
            return (
              <div key={i} className="flex w-10 flex-col items-center gap-1">
                <span className="h-4 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  {badge ?? ""}
                </span>
                <div
                  className={`flex aspect-square w-full items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${
                    ROLE_CLASS[role] ?? ROLE_CLASS.default
                  }`}
                >
                  {v}
                </div>
                <span className="text-[10px] tabular-nums text-muted-foreground">
                  {i}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {LEGEND.map(({ role, label }) => (
          <span
            key={role}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span
              className={`inline-block size-3 rounded-sm ${LEGEND_SWATCH[role]}`}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
