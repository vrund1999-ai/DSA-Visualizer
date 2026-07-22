import type { RendererProps } from "@/core/types";
import { Legend, ROLE_CLASS } from "@/leetcode/shared/viz";
import type { PascalData } from "./algorithm";

export function PascalRenderer({ step }: RendererProps<PascalData>) {
  const { tri, r, c, from } = step.data;
  const fromSet = new Set(from.map(([fr, fc]) => `${fr},${fc}`));

  const role = (rr: number, cc: number) => {
    if (rr === r && cc === c) return "target";
    if (fromSet.has(`${rr},${cc}`)) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 flex-col items-center justify-center gap-1.5">
        {tri.map((row, rr) => (
          <div key={rr} className="flex gap-1.5">
            {row.map((v, cc) => (
              <div
                key={cc}
                className={`flex size-9 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${
                  ROLE_CLASS[role(rr, cc)] ?? ROLE_CLASS.default
                }`}
              >
                {v}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Legend
        items={[
          { role: "compared", label: "Two entries above" },
          { role: "target", label: "Sum written" },
        ]}
      />
    </div>
  );
}
