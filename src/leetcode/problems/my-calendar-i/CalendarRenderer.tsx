import type { RendererProps } from "@/core/types";
import type { CalendarData } from "./algorithm";

export function CalendarRenderer({ step }: RendererProps<CalendarData>) {
  const { ops, opIndex, booked, conflict, result } = step.data;
  const current = opIndex !== null ? ops[opIndex] : null;
  const maxT = Math.max(1, ...ops.flat());
  const pct = (v: number) => `${(v / maxT) * 100}%`;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {ops.map((op, i) => (
          <span
            key={i}
            className={`rounded border px-1.5 py-0.5 font-mono text-xs ${
              i === opIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            [{op[0]},{op[1]})
          </span>
        ))}
      </div>

      <div className="flex w-full max-w-md flex-col gap-1.5">
        {booked.map((b, i) => (
          <div key={i} className="relative h-5 w-full rounded bg-muted/20">
            <div
              className={`absolute h-full rounded ${i === conflict ? "bg-role-swapped" : "bg-role-active/70"}`}
              style={{ left: pct(b[0]), width: pct(b[1] - b[0]) }}
            />
          </div>
        ))}
        {current && (
          <div className="relative h-5 w-full rounded border border-dashed border-role-current bg-muted/10">
            <div
              className={`absolute h-full rounded ${result === false ? "bg-role-swapped/60" : "bg-role-sorted/70"}`}
              style={{ left: pct(current[0]), width: pct(current[1] - current[0]) }}
            />
          </div>
        )}
      </div>

      {result !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          book → <b>{result ? "true (accepted)" : "false (rejected)"}</b>
        </div>
      )}
    </div>
  );
}
