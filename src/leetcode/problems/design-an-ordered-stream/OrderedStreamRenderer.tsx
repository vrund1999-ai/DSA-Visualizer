import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { OrderedStreamData } from "./algorithm";

export function OrderedStreamRenderer({ step }: RendererProps<OrderedStreamData>) {
  const { data, ptr, inserted, emitted } = step.data;
  const n = data.length - 1;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-start justify-center gap-1.5">
        {Array.from({ length: n }, (_, k) => k + 1).map((id) => {
          const v = data[id];
          const isPtr = id === ptr;
          const isInserted = id === inserted;
          const cls = isInserted
            ? "border-role-current bg-role-current/25"
            : v != null
              ? "border-role-visited bg-role-visited/10"
              : isPtr
                ? "border-role-target border-dashed bg-card"
                : "border-border bg-card";
          return (
            <div key={id} className="flex flex-col items-center gap-1">
              <span className="h-4 text-[10px] font-semibold uppercase text-role-target">{isPtr ? "ptr" : ""}</span>
              <div className={`flex size-11 items-center justify-center rounded-md border-2 text-sm font-medium ${cls}`}>{v ?? "·"}</div>
              <span className="text-[10px] tabular-nums text-muted-foreground">{id}</span>
            </div>
          );
        })}
      </div>

      <div className="text-sm">
        returned chunk: <b className="font-mono text-role-visited">[{emitted.join(", ")}]</b>
      </div>

      <Legend items={[{ role: "current", label: "Just inserted" }, { role: "visited", label: "Stored" }, { role: "target", label: "Pointer" }]} />
    </div>
  );
}
