import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DoubledData } from "./algorithm";

export function DoubledRenderer({ step }: RendererProps<DoubledData>) {
  const { sorted, roles, base, dbl, res, answer, failed } = step.data;

  const roleFor = (i: number) => {
    if (i === base) return "current";
    if (i === dbl) return "compared";
    if (roles[i] === "base") return "sorted";
    if (roles[i] === "double") return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">sorted changed array</span>
        <ArrayCells values={sorted} roleFor={roleFor} showIndex />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        {failed && answer ? <span className="text-role-swapped">not a doubled array → []</span> : <>original = [<b className="tabular-nums">{(answer ?? res).join(", ")}</b>]</>}
      </div>

      <Legend items={[{ role: "current", label: "Base (original)" }, { role: "compared", label: "Its double" }, { role: "sorted", label: "Paired base" }, { role: "visited", label: "Paired double" }]} />
    </div>
  );
}
