import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { AlternatingData } from "./algorithm";

export function AlternatingRenderer({ step }: RendererProps<AlternatingData>) {
  const { colors, start, window, ok, count, answer } = step.data;
  const windowSet = new Set(window);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {colors.map((c, i) => {
          const inWin = windowSet.has(i);
          const role = inWin ? (ok === false ? "swapped" : "current") : "default";
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="h-4 text-[10px] font-semibold text-role-current">{i === start ? "▼" : ""}</span>
              <div
                className={`flex size-9 items-center justify-center rounded-md border-2 text-sm font-medium ${
                  role === "current"
                    ? "border-role-current"
                    : role === "swapped"
                      ? "border-role-swapped"
                      : "border-border"
                } ${c === 1 ? "bg-role-active/40" : "bg-muted/30"}`}
              >
                {c}
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        alternating groups = <b className="tabular-nums">{answer ?? count}</b>
      </div>

      <Legend
        items={[
          { role: "current", label: "alternating window" },
          { role: "swapped", label: "window with a repeat" },
        ]}
      />
    </div>
  );
}
