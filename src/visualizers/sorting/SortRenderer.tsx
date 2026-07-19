import { motion } from "framer-motion";
import type { HighlightRole, RendererProps } from "@/core/types";
import type { SortData } from "./types";

const ROLE_CLASS: Record<string, string> = {
  compared: "bg-role-compared",
  swapped: "bg-role-swapped",
  sorted: "bg-role-sorted",
  current: "bg-role-current",
  pivot: "bg-role-pivot",
  active: "bg-role-active",
  visited: "bg-role-visited",
  default: "bg-muted-foreground/40",
};

const LEGEND: { role: HighlightRole | "default"; label: string }[] = [
  { role: "compared", label: "Comparing" },
  { role: "swapped", label: "Swapping" },
  { role: "sorted", label: "Sorted" },
  { role: "pivot", label: "Pivot" },
];

/** Shared by every sorting visualizer — bars, height ∝ value, color by role. */
export function SortRenderer({ step }: RendererProps<SortData>) {
  const { values } = step.data;
  const max = Math.max(...values, 1);
  const roleFor = (i: number): string =>
    step.highlights.find((h) => h.ref === i)?.role ?? "default";
  const showValues = values.length <= 30;

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex flex-1 items-end justify-center gap-[2px] rounded-lg border bg-muted/20 p-3">
        {values.map((v, i) => {
          const role = roleFor(i);
          return (
            <motion.div
              key={i}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
              className="flex min-w-[3px] flex-1 flex-col items-center justify-end"
              style={{ maxWidth: 44 }}
            >
              <div
                className={`w-full rounded-t transition-colors ${
                  ROLE_CLASS[role] ?? ROLE_CLASS.default
                }`}
                style={{ height: `${(v / max) * 100}%` }}
                title={String(v)}
              />
              {showValues && (
                <span className="mt-1 text-[10px] tabular-nums text-muted-foreground">
                  {v}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {LEGEND.map(({ role, label }) => (
          <span
            key={role}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span
              className={`inline-block size-3 rounded-sm ${ROLE_CLASS[role]}`}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
