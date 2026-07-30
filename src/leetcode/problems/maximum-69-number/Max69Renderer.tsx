import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { Max69Data } from "./algorithm";

export function Max69Renderer({ step }: RendererProps<Max69Data>) {
  const { digits, scan, flipped, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === flipped) return "sorted";
    if (i === scan) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={digits} roleFor={roleFor} topLabel={(i) => (i === flipped ? "6→9" : "")} showIndex={false} />

      <div className="rounded-md border px-3 py-1 text-sm">
        maximum = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "scanning" }, { role: "sorted", label: "flipped 6→9" }]} />
    </div>
  );
}
