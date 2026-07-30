import type { RendererProps } from "@/core/types";
import type { IpoData } from "./algorithm";

export function IpoRenderer({ step }: RendererProps<IpoData>) {
  const { projects, heap, w, chosen, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col items-center rounded-md border px-3 py-1.5 text-xs ${
              p.picked
                ? "border-role-sorted bg-role-sorted/20"
                : p.unlocked
                  ? "border-role-active bg-role-active/15"
                  : "border-border opacity-60"
            }`}
          >
            <span className="font-semibold tabular-nums">+{p.profit}</span>
            <span className="text-muted-foreground tabular-nums">cap {p.capital}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">max-heap (affordable profits)</span>
        <div className="flex min-h-[2rem] flex-wrap justify-center gap-1.5">
          {heap.length === 0 ? (
            <span className="text-sm text-muted-foreground">(empty)</span>
          ) : (
            heap.map((v, i) => (
              <span
                key={i}
                className={`rounded-md border px-2 py-1 text-sm tabular-nums ${
                  v === chosen ? "border-role-current bg-role-current text-white" : "border-role-pivot bg-role-pivot/20"
                }`}
              >
                {v}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm tabular-nums">
        capital w = <b>{answer ?? w}</b>
      </div>
    </div>
  );
}
