import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { IntersectionData } from "./algorithm";

export function IntersectionRenderer({ step }: RendererProps<IntersectionData>) {
  const { a, b, pA, pB, meetId, done } = step.data;

  const chain = (list: typeof a, ptr: string | null, ptrLabel: string) =>
    list.map((n) => ({
      key: n.id,
      value: n.val,
      role: n.id === meetId && done ? "target" : n.id === ptr ? "current" : n.id.startsWith("c") ? "active" : "default",
      label: n.id === ptr ? ptrLabel : "",
    }));

  return (
    <div className="flex h-full flex-col justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">list A</span>
        <NodeChain nodes={chain(a, pA, "a")} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">list B</span>
        <NodeChain nodes={chain(b, pB, "b")} />
      </div>

      {done && (
        <div className={`text-center text-base font-semibold ${meetId ? "text-role-target" : "text-muted-foreground"}`}>
          {meetId ? "Intersection found" : "No intersection"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Pointer" }, { role: "active", label: "Shared tail" }, { role: "target", label: "Intersection" }]} />
    </div>
  );
}
