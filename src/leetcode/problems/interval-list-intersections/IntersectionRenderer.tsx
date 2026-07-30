import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { IntersectionData } from "./algorithm";

export function IntersectionRenderer({ step }: RendererProps<IntersectionData>) {
  const { A, B, i, j, overlap, res, answer } = step.data;
  const allEnds = [...A, ...B].map((iv) => iv[1]);
  const maxT = Math.max(1, ...allEnds);
  const W = 380;
  const scale = (t: number) => (t / maxT) * W;
  const result = answer ?? res;

  const bar = (iv: number[], active: boolean, color: string) => (
    <rect x={scale(iv[0]) + 1} width={Math.max(2, scale(iv[1]) - scale(iv[0]))} height={18} rx={3} y={2} className={active ? "fill-role-current stroke-role-current" : color} />
  );

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex flex-col gap-2">
        {[
          { label: "A", list: A, active: i, color: "fill-role-active/50" },
          { label: "B", list: B, active: j, color: "fill-role-pivot/50" },
        ].map(({ label, list, active, color }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="w-4 text-xs text-muted-foreground">{label}</span>
            <svg width={W + 2} height={22} viewBox={`0 0 ${W + 2} 22`}>
              {list.map((iv, k) => (
                <g key={k}>{bar(iv, k === active, color)}</g>
              ))}
            </svg>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="w-4 text-xs text-role-sorted">∩</span>
          <svg width={W + 2} height={22} viewBox={`0 0 ${W + 2} 22`}>
            {result.map((iv, k) => (
              <rect key={k} x={scale(iv[0]) + 1} width={Math.max(2, scale(iv[1]) - scale(iv[0]))} height={18} rx={3} y={2} className={overlap && overlap[0] === iv[0] && overlap[1] === iv[1] ? "fill-role-current" : "fill-role-sorted"} />
            ))}
          </svg>
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">intersections = <b className="font-mono">{result.map((r) => `[${r}]`).join(" ") || "—"}</b></div>

      <Legend items={[{ role: "active", label: "List A" }, { role: "pivot", label: "List B" }, { role: "current", label: "Current / new overlap" }, { role: "sorted", label: "Intersections" }]} />
    </div>
  );
}
