import type { RendererProps } from "@/core/types";
import type { FindRootData } from "./algorithm";

export function FindRootRenderer({ step }: RendererProps<FindRootData>) {
  const { nodes, active, xorSum, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {nodes.map((n, i) => {
          const isRoot = answer !== null && n.val === answer;
          return (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 rounded-md border px-3 py-1.5 ${
                isRoot ? "border-role-sorted bg-role-sorted/20" : i === active ? "border-role-current bg-role-current/20" : "border-border"
              }`}
            >
              <span className="text-sm font-semibold tabular-nums">{n.val}</span>
              <span className="text-[10px] text-muted-foreground">
                {n.children.length ? `→ ${n.children.join(", ")}` : "leaf"}
              </span>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm tabular-nums">
        running XOR = <b>{xorSum}</b>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        root value = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>
    </div>
  );
}
