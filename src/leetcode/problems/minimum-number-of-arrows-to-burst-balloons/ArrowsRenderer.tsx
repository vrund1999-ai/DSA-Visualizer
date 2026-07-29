import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ArrowsData } from "./algorithm";

export function ArrowsRenderer({ step }: RendererProps<ArrowsData>) {
  const { points, i, arrowAt, newArrow, arrows, answer } = step.data;
  const allX = points.flat();
  const minX = Math.min(...allX);
  const maxX = Math.max(...allX);
  const W = 300;
  const px = (x: number) => ((x - minX) / (maxX - minX || 1)) * W;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="rounded-md border px-3 py-1 text-sm">arrows = <b className="tabular-nums">{answer ?? arrows}</b></div>

      <div className="relative" style={{ width: `${W}px`, height: `${points.length * 16 + 20}px` }}>
        {arrowAt !== null && <div className="absolute top-0 bottom-4 w-0.5 bg-role-compared" style={{ left: `${px(arrowAt)}px` }} />}
        {points.map(([a, b], k) => {
          const active = k === i;
          const burst = i !== null && arrowAt !== null && a <= arrowAt && b >= arrowAt && (k <= i);
          return (
            <div key={k} className={`absolute h-3 rounded-full ${active ? (newArrow ? "bg-role-current" : "bg-role-sorted") : burst ? "bg-role-sorted/60" : "bg-role-active/50"}`} style={{ left: `${px(a)}px`, width: `${Math.max(4, px(b) - px(a))}px`, top: `${k * 16}px` }} />
          );
        })}
      </div>

      <Legend items={[{ role: "compared", label: "Arrow position" }, { role: "sorted", label: "Burst" }, { role: "current", label: "Needs new arrow" }, { role: "active", label: "Balloon" }]} />
    </div>
  );
}
