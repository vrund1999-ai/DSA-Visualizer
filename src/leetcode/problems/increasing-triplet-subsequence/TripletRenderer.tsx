import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TripletData } from "./algorithm";

export function TripletRenderer({ step }: RendererProps<TripletData>) {
  const { nums, pos, first, second, answer } = step.data;

  const fmt = (v: number) => (Number.isFinite(v) ? v : "∞");

  const roleFor = (i: number) => {
    if (answer === true && i === pos) return "sorted";
    if (i === pos) return "current";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === pos ? "n" : "")} showIndex={false} />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-4 py-2">first = <b className="tabular-nums">{fmt(first)}</b></span>
        <span className="rounded-md border px-4 py-2">second = <b className="tabular-nums">{fmt(second)}</b></span>
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-sorted" : "text-muted-foreground"}`}>
          {answer ? "increasing triple exists" : "no increasing triple"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current n" }, { role: "sorted", label: "Completes triple" }, { role: "visited", label: "Seen" }]} />
    </div>
  );
}
