import type { RendererProps } from "@/core/types";
import type { RepeatMatchData } from "./algorithm";

export function RepeatMatchRenderer({ step }: RendererProps<RepeatMatchData>) {
  const { a, b, count, repeated, matchAt, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex gap-4 font-mono text-sm">
        <span>a = "{a}"</span>
        <span>b = "{b}"</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">a repeated ×{count}</span>
        <div className="flex max-w-2xl flex-wrap justify-center gap-0.5 font-mono">
          {repeated.split("").map((c, i) => {
            const inMatch = matchAt !== null && matchAt >= 0 && i >= matchAt && i < matchAt + b.length;
            const copyBoundary = i % a.length === 0;
            return (
              <span
                key={i}
                className={`flex size-6 items-center justify-center rounded text-sm ${
                  inMatch ? "bg-role-sorted text-white" : copyBoundary ? "bg-role-active/30" : "bg-muted/30"
                }`}
              >
                {c}
              </span>
            );
          })}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        min repeats = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>
    </div>
  );
}
