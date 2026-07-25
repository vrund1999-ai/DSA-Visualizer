import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TimeMapData } from "./algorithm";

export function TimeMapRenderer({ step }: RendererProps<TimeMapData>) {
  const { store, op, mid, candidate, result } = step.data;
  // which key is being queried/updated (parse from op label)
  const activeKey = op.match(/"([^"]+)"/)?.[1] ?? null;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-current px-3 py-1 font-mono">{op}</span>
        {result !== null && <span className="rounded-md border px-3 py-1">→ "{result || "(empty)"}"</span>}
        {result === null && candidate !== null && <span className="rounded-md border px-3 py-1 text-muted-foreground">candidate "{candidate}"</span>}
      </div>

      <div className="flex flex-col gap-2">
        {store.length === 0 ? (
          <span className="text-sm text-muted-foreground">empty store</span>
        ) : (
          store.map(([key, list]) => (
            <div key={key} className={`flex items-center gap-2 rounded-md px-2 py-1 ${key === activeKey ? "bg-role-current/10 ring-1 ring-role-current" : ""}`}>
              <span className="w-12 text-right font-mono text-sm font-semibold">{key}</span>
              <span className="text-muted-foreground">→</span>
              <div className="flex gap-1">
                {list.map(([ts, value], i) => {
                  const isMid = key === activeKey && i === mid;
                  return (
                    <div key={i} className={`flex flex-col items-center rounded-md border-2 px-2 py-0.5 ${isMid ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>
                      <span className="font-mono text-sm">{value}</span>
                      <span className="text-[10px] tabular-nums text-muted-foreground">t={ts}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      <Legend items={[{ role: "current", label: "Active key / probed entry" }]} />
    </div>
  );
}
