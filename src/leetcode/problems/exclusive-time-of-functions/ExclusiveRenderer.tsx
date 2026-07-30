import type { RendererProps } from "@/core/types";
import type { ExclusiveData } from "./algorithm";

export function ExclusiveRenderer({ step }: RendererProps<ExclusiveData>) {
  const { n, logs, logIndex, stack, times, answer } = step.data;
  const shown = answer ?? times;
  const maxTime = Math.max(1, ...shown);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {logs.map((log, i) => (
          <span
            key={i}
            className={`rounded border px-1.5 py-0.5 font-mono text-xs ${
              i === logIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            {log}
          </span>
        ))}
      </div>

      <div className="flex items-end gap-4">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">stack</span>
          <div className="flex flex-col-reverse gap-0.5">
            {stack.length === 0 ? (
              <span className="text-xs text-muted-foreground">(empty)</span>
            ) : (
              stack.map((id, i) => (
                <div
                  key={i}
                  className="flex size-8 items-center justify-center rounded border border-role-active bg-role-active/20 text-sm tabular-nums"
                >
                  {id}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex items-end gap-2">
          {Array.from({ length: n }).map((_, id) => (
            <div key={id} className="flex flex-col items-center gap-1">
              <div
                className="flex w-9 items-end justify-center rounded-t bg-role-sorted/60"
                style={{ height: `${16 + (shown[id] / maxTime) * 80}px` }}
              >
                <span className="pb-0.5 text-xs font-semibold">{shown[id]}</span>
              </div>
              <span className="text-xs tabular-nums text-muted-foreground">fn{id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
