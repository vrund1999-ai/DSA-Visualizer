import type { RendererProps } from "@/core/types";
import type { GridData } from "./types";
import { keyOf } from "./grid";

const ROLE_CLASS: Record<string, string> = {
  visited: "bg-role-visited/40",
  active: "bg-role-active/70",
  path: "bg-role-path",
  current: "bg-role-current",
};

const LEGEND: { label: string; swatch: string }[] = [
  { label: "Start / End", swatch: "bg-role-target" },
  { label: "Wall", swatch: "bg-role-wall" },
  { label: "Frontier", swatch: "bg-role-active/70" },
  { label: "Visited", swatch: "bg-role-visited/40" },
  { label: "Path", swatch: "bg-role-path" },
];

/** Shared by every pathfinding visualizer — a grid of cells colored by role. */
export function GridRenderer({ step }: RendererProps<GridData>) {
  const { rows, cols, walls, start, end } = step.data;

  const roleByKey = new Map<string, string>();
  const badgeByKey = new Map<string, string>();
  for (const h of step.highlights) {
    roleByKey.set(String(h.ref), h.role);
    if (h.badge) badgeByKey.set(String(h.ref), h.badge);
  }

  const [sr, sc] = start;
  const [er, ec] = end;
  const showBadges = cols <= 26;

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex flex-1 items-center justify-center overflow-auto rounded-lg border bg-muted/20 p-3">
        <div
          className="grid gap-px"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            width: "100%",
            maxWidth: cols * 34,
          }}
        >
          {Array.from({ length: rows }).map((_, r) =>
            Array.from({ length: cols }).map((__, c) => {
              const key = keyOf(r, c);
              const isStart = r === sr && c === sc;
              const isEnd = r === er && c === ec;
              const role = roleByKey.get(key);
              const badge = badgeByKey.get(key);

              let cls = "bg-card";
              let label = "";
              if (isStart || isEnd) {
                cls = "bg-role-target text-white";
                label = isStart ? "S" : "E";
              } else if (walls[r][c]) {
                cls = "bg-role-wall";
              } else if (role) {
                cls = ROLE_CLASS[role] ?? "bg-card";
              }

              return (
                <div
                  key={key}
                  className={`flex aspect-square items-center justify-center rounded-[3px] border border-border/40 text-[9px] font-semibold tabular-nums transition-colors ${cls}`}
                  title={label || badge || key}
                >
                  {label || (showBadges && !isStart && !isEnd ? badge ?? "" : "")}
                </div>
              );
            }),
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {LEGEND.map(({ label, swatch }) => (
          <span
            key={label}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span className={`inline-block size-3 rounded-sm ${swatch}`} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
