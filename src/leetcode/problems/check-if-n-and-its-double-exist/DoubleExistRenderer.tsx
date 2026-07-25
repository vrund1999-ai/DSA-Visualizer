import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DoubleExistData } from "./algorithm";

export function DoubleExistRenderer({ step }: RendererProps<DoubleExistData>) {
  const { arr, idx, seen, match, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (match !== null && arr[i] === match && i !== idx) return "compared";
    if (idx !== null && i < idx) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={arr} roleFor={roleFor} showIndex cellWidth="w-12" />

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">seen set</span>
        <div className="flex min-h-9 max-w-xl flex-wrap justify-center gap-1.5">
          {seen.length === 0 ? (
            <span className="text-sm text-muted-foreground">empty</span>
          ) : (
            seen.map((v) => (
              <span key={v} className={`rounded-md border px-2 py-0.5 text-sm tabular-nums ${v === match ? "border-role-compared bg-role-compared/15" : ""}`}>{v}</span>
            ))
          )}
        </div>
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "N and 2N exist ✓" : "No such pair ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current n" }, { role: "compared", label: "Matching double/half" }, { role: "visited", label: "Seen" }]} />
    </div>
  );
}
