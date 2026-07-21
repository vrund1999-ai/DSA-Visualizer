import type { RendererProps } from "@/core/types";
import { Legend, SWATCH_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { ContainerData } from "./algorithm";

export function ContainerRenderer({ step }: RendererProps<ContainerData>) {
  const { heights, l, r, area, best, bestPair } = step.data;
  const roleFor = roleLookup(step.highlights);
  const max = Math.max(...heights, 1);

  const barColor = (role: string) =>
    role === "default" ? "bg-muted-foreground/25" : SWATCH_CLASS[role] ?? "bg-muted-foreground/25";

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Current area</span>
        <span className="rounded-md border border-role-current bg-role-current/10 px-2.5 py-1 font-semibold tabular-nums">
          {area ?? "—"}
        </span>
        <span className="ml-3 text-muted-foreground">Best</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">
          {best}
        </span>
      </div>

      <div className="flex h-56 items-end justify-center gap-1.5">
        {heights.map((h, i) => {
          const role = roleFor(i);
          const inSpan = l !== null && r !== null && i >= l && i <= r;
          return (
            <div key={i} className="flex h-full flex-col items-center justify-end gap-1">
              <span className="h-4 text-[10px] font-semibold uppercase text-role-current">
                {i === l ? "L" : i === r ? "R" : ""}
              </span>
              <div
                className={`w-6 rounded-t transition-all ${barColor(role)} ${
                  inSpan ? "" : "opacity-60"
                }`}
                style={{ height: `${(h / max) * 100}%` }}
              />
              <span className="text-[10px] tabular-nums text-muted-foreground">{h}</span>
            </div>
          );
        })}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        {bestPair
          ? `Best container between walls ${bestPair.l} and ${bestPair.r}`
          : "Move the shorter wall inward to look for a bigger area…"}
      </p>

      <Legend
        items={[
          { role: "current", label: "Pointers" },
          { role: "swapped", label: "Moving" },
          { role: "target", label: "Best pair" },
        ]}
      />
    </div>
  );
}
