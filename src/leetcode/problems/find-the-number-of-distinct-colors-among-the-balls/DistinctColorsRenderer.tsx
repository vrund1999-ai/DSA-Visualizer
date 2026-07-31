import type { RendererProps } from "@/core/types";
import type { DistinctColorsData } from "./algorithm";

const PALETTE = ["bg-role-active", "bg-role-pivot", "bg-role-target", "bg-role-sorted", "bg-amber-400", "bg-role-compared", "bg-role-visited"];

export function DistinctColorsRenderer({ step }: RendererProps<DistinctColorsData>) {
  const { queries, opIndex, balls, activeBall, distinct } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {queries.map((q, i) => (
          <span
            key={i}
            className={`rounded border px-1.5 py-0.5 font-mono text-xs ${
              i === opIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            [{q[0]},{q[1]}]
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {balls.length === 0 ? (
          <span className="text-sm text-muted-foreground">(no painted balls)</span>
        ) : (
          balls.map((b) => (
            <div key={b.ball} className="flex flex-col items-center gap-1">
              <div
                className={`flex size-9 items-center justify-center rounded-full text-xs font-bold text-white ${PALETTE[b.color % PALETTE.length]} ${
                  b.ball === activeBall ? "ring-2 ring-role-current ring-offset-1" : ""
                }`}
              >
                {b.color}
              </div>
              <span className="text-[10px] text-muted-foreground">ball {b.ball}</span>
            </div>
          ))
        )}
      </div>

      {distinct !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          distinct colors = <b className="tabular-nums">{distinct}</b>
        </div>
      )}
    </div>
  );
}
