import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { EventsData } from "./algorithm";

export function EventsRenderer({ step }: RendererProps<EventsData>) {
  const { events, lastDay, day, open, attendedEnd, count, answer } = step.data;
  const cols = lastDay;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-1">
        {events.map(([s, e], idx) => {
          const isOpen = day !== null && s <= day && e >= day;
          return (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-8 text-right text-xs text-muted-foreground">E{idx}</span>
              <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${cols}, 1.4rem)` }}>
                {Array.from({ length: cols }).map((_, d) => {
                  const dayNum = d + 1;
                  const inSpan = dayNum >= s && dayNum <= e;
                  const isToday = dayNum === day;
                  return (
                    <div key={d} className={`h-5 rounded-sm border text-center text-[9px] leading-5 ${inSpan ? (isOpen ? "border-role-active bg-role-active/30" : "border-border bg-muted/40") : "border-transparent"} ${isToday && inSpan ? "ring-2 ring-role-current" : ""}`}>
                      {inSpan ? "" : ""}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex items-center gap-2">
          <span className="w-8" />
          <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${cols}, 1.4rem)` }}>
            {Array.from({ length: cols }).map((_, d) => (
              <div key={d} className={`text-center text-[9px] ${d + 1 === day ? "font-bold text-role-current" : "text-muted-foreground"}`}>{d + 1}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm">
        {day !== null && <span className="rounded-md border px-3 py-1">day {day}</span>}
        <span className="rounded-md border px-3 py-1">open ends: {open.length ? open.join(", ") : "—"}</span>
        {attendedEnd !== null && <span className="rounded-md border border-role-sorted px-3 py-1">attended end {attendedEnd}</span>}
        <span className="rounded-md border px-3 py-1">attended = <b className="tabular-nums">{answer ?? count}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "Open today" }, { role: "current", label: "Current day" }]} />
    </div>
  );
}
