import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CircularGameData } from "./algorithm";

export function CircularGameRenderer({ step }: RendererProps<CircularGameData>) {
  const { circle, start, out, k } = step.data;

  const roleAt = (i: number) => {
    if (i === out) return "target";
    if (i === start) return "current";
    return "default";
  };

  // arrange players around a circle
  const r = 120;
  const size = Math.max(circle.length, 1);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">count every {k} · {circle.length} remaining</div>

      <div className="relative" style={{ width: 2 * r + 56, height: 2 * r + 56 }}>
        {circle.map((player, i) => {
          const angle = (i / size) * 2 * Math.PI - Math.PI / 2;
          const x = r + r * Math.cos(angle);
          const y = r + r * Math.sin(angle);
          const role = roleAt(i);
          const cls =
            role === "current"
              ? "border-role-current bg-role-current/20"
              : role === "target"
                ? "border-role-target bg-role-target/20"
                : "border-border bg-card";
          return (
            <div
              key={player}
              className={`absolute flex size-11 items-center justify-center rounded-full border-2 text-sm font-medium tabular-nums ${cls}`}
              style={{ left: x, top: y }}
            >
              {player}
            </div>
          );
        })}
      </div>

      <Legend items={[{ role: "current", label: "Count start" }, { role: "target", label: "Eliminated" }]} />
    </div>
  );
}
