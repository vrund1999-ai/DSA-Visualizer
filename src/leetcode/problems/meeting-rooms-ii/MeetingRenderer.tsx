import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MeetingData } from "./algorithm";

export function MeetingRenderer({ step }: RendererProps<MeetingData>) {
  const { starts, ends, s, e, rooms, maxRooms } = step.data;

  const chip = (vals: number[], active: number | null, activeRole: string) =>
    vals.map((v, i) => (
      <span
        key={i}
        className={`rounded-md border px-2 py-1 font-mono text-sm tabular-nums ${i === active ? activeRole : "border-border bg-muted/30 text-muted-foreground"}`}
      >
        {v}
      </span>
    ));

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Rooms in use</span>
        <span className="rounded-md border border-role-current bg-role-current/10 px-2.5 py-1 font-semibold tabular-nums">{rooms}</span>
        <span className="ml-3 text-muted-foreground">Peak</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{maxRooms}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Sorted start times</span>
        <div className="flex flex-wrap justify-center gap-1.5">{chip(starts, s, "border-role-current bg-role-current/15")}</div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Sorted end times</span>
        <div className="flex flex-wrap justify-center gap-1.5">{chip(ends, e, "border-role-sorted bg-role-sorted/15")}</div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Current start" },
          { role: "sorted", label: "Next end (frees a room)" },
          { role: "target", label: "Peak rooms" },
        ]}
      />
    </div>
  );
}
