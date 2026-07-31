import type { RendererProps } from "@/core/types";
import type { ClumsyData } from "./algorithm";

export function ClumsyRenderer({ step }: RendererProps<ClumsyData>) {
  const { n, i, op, stack, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">clumsy({n})</span>

      {op && (
        <div className="rounded-md border border-role-current bg-role-current/10 px-3 py-1 font-mono text-lg">
          {op} {i}
        </div>
      )}

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">stack</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {stack.map((v, idx) => (
            <span
              key={idx}
              className={`flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-sm tabular-nums ${
                idx === stack.length - 1 ? "border-role-active bg-role-active/20" : "border-border"
              }`}
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        result = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>
    </div>
  );
}
