import type { RendererProps } from "@/core/types";
import { Legend, ROLE_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { LCPData } from "./algorithm";

export function LCPRenderer({ step }: RendererProps<LCPData>) {
  const { words, prefixLen } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Common prefix</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-mono font-semibold text-role-target">
          {prefixLen > 0 ? `"${words[0]?.slice(0, prefixLen)}"` : "—"}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        {words.map((w, r) => (
          <div key={r} className="flex items-center gap-1.5">
            {[...w].map((ch, c) => {
              const role = roleForRef(`${r}-${c}`);
              return (
                <div
                  key={c}
                  className={`flex size-9 items-center justify-center rounded-md border-2 font-mono text-sm transition-colors ${
                    ROLE_CLASS[role] ?? ROLE_CLASS.default
                  }`}
                >
                  {ch}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <Legend
        items={[
          { role: "current", label: "First word's letter" },
          { role: "compared", label: "Matches" },
          { role: "swapped", label: "Mismatch" },
          { role: "target", label: "Confirmed prefix" },
        ]}
      />
    </div>
  );
}
