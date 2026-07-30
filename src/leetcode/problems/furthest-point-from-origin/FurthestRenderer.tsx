import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FurthestData } from "./algorithm";

export function FurthestRenderer({ step }: RendererProps<FurthestData>) {
  const { moves, scan, L, R, wild, answer } = step.data;
  const chars = moves.split("");

  const roleFor = (i: number) => {
    if (i === scan) return "current";
    const c = chars[i];
    if (c === "L") return "compared";
    if (c === "R") return "active";
    return "pivot";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={chars} roleFor={roleFor} showIndex={false} cellWidth="w-9" />

      <div className="flex gap-4 text-sm tabular-nums">
        <span>L = {L}</span>
        <span>R = {R}</span>
        <span>wild = {wild}</span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        furthest distance = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend
        items={[
          { role: "compared", label: "L" },
          { role: "active", label: "R" },
          { role: "pivot", label: "'_' wildcard" },
          { role: "current", label: "scanning" },
        ]}
      />
    </div>
  );
}
