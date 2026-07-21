import type { HighlightRole, RendererProps } from "@/core/types";
import type { TwoSumData } from "./types";

const ROLE_CLASS: Record<string, string> = {
  current: "bg-role-current text-white border-role-current",
  compared: "bg-role-compared text-white border-role-compared",
  visited: "bg-role-visited/15 border-role-visited/40 text-muted-foreground",
  target: "bg-role-sorted text-white border-role-sorted",
  default: "bg-muted/30 border-border text-foreground",
};

const LEGEND: { role: HighlightRole; label: string }[] = [
  { role: "current", label: "Current index" },
  { role: "visited", label: "In hash map" },
  { role: "compared", label: "Complement match" },
  { role: "target", label: "Answer pair" },
];

const LEGEND_SWATCH: Record<string, string> = {
  current: "bg-role-current",
  compared: "bg-role-compared",
  visited: "bg-role-visited",
  target: "bg-role-sorted",
};

export function TwoSumRenderer({ step }: RendererProps<TwoSumData>) {
  const { nums, target, map, current, complement, activeMapIndex, found, status } =
    step.data;

  const roleFor = (i: number): string =>
    step.highlights.find((h) => h.ref === i)?.role ?? "default";

  return (
    <div className="flex h-full flex-col gap-5">
      {/* Target + status */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">
          {target}
        </span>
        <span className="ml-3 text-muted-foreground">
          {status === "found" && found
            ? `found: indices [${found[0]}, ${found[1]}]`
            : status === "none"
              ? "no solution"
              : "scanning…"}
        </span>
      </div>

      {/* Array of value cells */}
      <div className="flex items-center justify-center overflow-x-auto">
        <div className="flex flex-wrap items-start justify-center gap-1.5">
          {nums.map((v, i) => {
            const role = roleFor(i);
            return (
              <div key={i} className="flex w-11 flex-col items-center gap-1">
                <span className="h-4 text-[10px] font-semibold uppercase tracking-wide text-role-current">
                  {i === current ? "i" : ""}
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

      {/* Complement lookup */}
      <div className="flex items-center justify-center">
        {complement === null ? (
          <p className="text-sm text-muted-foreground">
            Building the hash map as we scan…
          </p>
        ) : (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Need</span>
            <span className="font-mono text-muted-foreground">
              {target} − {current !== null ? nums[current] : "?"} =
            </span>
            <span className="rounded-md border border-role-active bg-role-active/15 px-2 py-0.5 font-semibold tabular-nums">
              {complement}
            </span>
          </div>
        )}
      </div>

      {/* Hash map panel */}
      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Hash map (value → index)
        </span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {map.length === 0 ? (
            <span className="text-xs text-muted-foreground">empty</span>
          ) : (
            map.map((e) => {
              const active = e.index === activeMapIndex;
              return (
                <span
                  key={e.index}
                  className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums transition-colors ${
                    active
                      ? "border-role-compared bg-role-compared/15 text-foreground"
                      : "border-border bg-muted/30 text-muted-foreground"
                  }`}
                >
                  {e.value} → {e.index}
                </span>
              );
            })
          )}
        </div>
      </div>

      {/* Legend */}
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
