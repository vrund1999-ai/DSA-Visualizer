import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ThreeCharsData } from "./algorithm";

export function ThreeCharsRenderer({ step }: RendererProps<ThreeCharsData>) {
  const { s, pos, last, added, count, answer } = step.data;

  const m = Math.min(last.a, last.b, last.c);

  const roleFor = (i: number) => {
    if (i === pos) return "current";
    if (m >= 0 && i <= m) return "sorted"; // valid start range
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={s.split("")} roleFor={roleFor} topLabel={(i) => (i === pos ? "i" : "")} showIndex={true} />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">last a = <b className="tabular-nums">{last.a}</b></span>
        <span className="rounded-md border px-3 py-1">last b = <b className="tabular-nums">{last.b}</b></span>
        <span className="rounded-md border px-3 py-1">last c = <b className="tabular-nums">{last.c}</b></span>
      </div>

      <div className="text-sm">
        {added > 0 && <span className="mr-3 text-role-sorted">+{added}</span>}
        total = <b className="tabular-nums text-foreground">{answer ?? count}</b>
      </div>

      <Legend items={[{ role: "current", label: "Right endpoint i" }, { role: "sorted", label: "Valid start range" }, { role: "visited", label: "Past" }]} />
    </div>
  );
}
