import type { RendererProps } from "@/core/types";
import { Legend, ROLE_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { EditDistanceData } from "./algorithm";

export function EditDistanceRenderer({ step }: RendererProps<EditDistanceData>) {
  const { a, b, dp } = step.data;
  const roleForRef = roleLookup(step.highlights);
  const cols = ["∅", ...b];
  const rows = ["∅", ...a];

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex justify-center overflow-auto">
        <table className="border-separate border-spacing-1">
          <thead>
            <tr>
              <th />
              {cols.map((ch, c) => (
                <th key={c} className="size-8 text-center font-mono text-xs text-muted-foreground">{ch}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dp.map((row, r) => (
              <tr key={r}>
                <th className="size-8 text-center font-mono text-xs text-muted-foreground">{rows[r]}</th>
                {row.map((v, c) => {
                  const role = roleForRef(`${r},${c}`);
                  return (
                    <td key={c} className={`size-8 rounded border-2 text-center text-sm tabular-nums transition-colors ${role !== "default" ? ROLE_CLASS[role] : "border-border bg-muted/20"}`}>{v}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Legend
        items={[
          { role: "compared", label: "Neighbours used" },
          { role: "target", label: "Cell filled" },
        ]}
      />
    </div>
  );
}
