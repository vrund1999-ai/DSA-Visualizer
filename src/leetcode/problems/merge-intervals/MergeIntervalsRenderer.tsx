import type { RendererProps } from "@/core/types";
import { Legend, roleLookup } from "@/leetcode/shared/viz";
import type { Interval, MergeData } from "./algorithm";

export function MergeIntervalsRenderer({ step }: RendererProps<MergeData>) {
  const { intervals, merged, activeMerged, min, max } = step.data;
  const roleFor = roleLookup(step.highlights);
  const span = Math.max(max - min, 1);

  const pos = (iv: Interval) => ({
    left: `${((iv.start - min) / span) * 100}%`,
    width: `${((iv.end - iv.start) / span) * 100}%`,
  });

  const barColor = (role: string) =>
    role === "compared"
      ? "bg-role-compared"
      : role === "current"
        ? "bg-role-current"
        : "bg-muted-foreground/40";

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Input (sorted by start)
        </span>
        {intervals.map((iv, i) => (
          <div key={i} className="relative h-6">
            <div
              className={`absolute flex h-6 min-w-[2rem] items-center justify-center rounded text-[11px] font-medium text-white ${barColor(
                roleFor(i),
              )}`}
              style={pos(iv)}
            >
              {iv.start},{iv.end}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Merged result
        </span>
        {merged.length === 0 ? (
          <span className="text-xs text-muted-foreground">none yet</span>
        ) : (
          merged.map((iv, k) => (
            <div key={k} className="relative h-6">
              <div
                className={`absolute flex h-6 min-w-[2rem] items-center justify-center rounded text-[11px] font-medium text-white ${
                  k === activeMerged ? "bg-role-sorted ring-2 ring-role-sorted/50" : "bg-role-sorted/80"
                }`}
                style={pos(iv)}
              >
                {iv.start},{iv.end}
              </div>
            </div>
          ))
        )}
      </div>

      <Legend
        items={[
          { role: "current", label: "New range" },
          { role: "compared", label: "Overlap (extends)" },
          { role: "sorted", label: "Merged" },
        ]}
      />
    </div>
  );
}
