import type { HighlightRole, RendererProps } from "@/core/types";
import { patRef, type StringData } from "./types";

const CELL = 28; // px, keeps the text and pattern rows aligned

const ROLE_CLASS: Record<string, string> = {
  current: "bg-role-current text-white border-role-current",
  compared: "bg-role-compared text-white border-role-compared",
  swapped: "bg-role-swapped text-white border-role-swapped",
  sorted: "bg-role-sorted text-white border-role-sorted",
  visited: "bg-role-visited/20 border-border",
  default: "bg-card border-border",
};

const LEGEND: { role: HighlightRole; label: string; swatch: string }[] = [
  { role: "current", label: "Comparing", swatch: "bg-role-current" },
  { role: "sorted", label: "Match", swatch: "bg-role-sorted" },
  { role: "swapped", label: "Mismatch", swatch: "bg-role-swapped" },
];

/** Shared by every string-matching visualizer — text row with the pattern aligned below. */
export function StringRenderer({ step }: RendererProps<StringData>) {
  const { text, pattern, shift, found } = step.data;
  const n = text.length;

  const textRole = (i: number): string =>
    step.highlights.find((h) => h.ref === i)?.role ?? "default";
  const patRole = (j: number): string =>
    step.highlights.find((h) => h.ref === patRef(j))?.role ?? "default";

  const cellCls = (role: string) =>
    `flex items-center justify-center rounded-[3px] border-2 font-mono text-sm transition-colors ${
      ROLE_CLASS[role] ?? ROLE_CLASS.default
    }`;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="overflow-x-auto">
        <div style={{ width: n * CELL }} className="flex flex-col gap-1">
          {/* text row */}
          <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${n}, ${CELL}px)` }}>
            {text.split("").map((ch, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <div className={cellCls(textRole(i))} style={{ height: CELL }}>
                  {ch}
                </div>
                <span className="text-[9px] tabular-nums text-muted-foreground">{i}</span>
              </div>
            ))}
          </div>
          {/* pattern row, offset by `shift` columns */}
          <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${n}, ${CELL}px)` }}>
            {Array.from({ length: n }).map((_, c) => {
              const j = c - shift;
              const inPattern = j >= 0 && j < pattern.length;
              if (!inPattern) return <div key={c} style={{ height: CELL }} />;
              return (
                <div key={c} className={cellCls(patRole(j))} style={{ height: CELL }}>
                  {pattern[j]}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        {found.length === 0
          ? "no match reported yet"
          : `match${found.length > 1 ? "es" : ""} at index ${found.join(", ")}`}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {LEGEND.map(({ role, label, swatch }) => (
          <span key={role} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className={`inline-block size-3 rounded-sm ${swatch}`} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
