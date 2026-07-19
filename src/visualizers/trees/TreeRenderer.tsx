import type { HighlightRole, RendererProps } from "@/core/types";
import type { TreeData } from "./types";

/** Fill colors for highlighted nodes; unhighlighted nodes use the card color. */
const ROLE_FILL: Record<string, string> = {
  compared: "hsl(var(--role-compared))",
  current: "hsl(var(--role-current))",
  swapped: "hsl(var(--role-swapped))",
  visited: "hsl(var(--role-visited))",
  active: "hsl(var(--role-active))",
  sorted: "hsl(var(--role-sorted))",
};

const LEGEND: { role: HighlightRole; label: string; swatch: string }[] = [
  { role: "compared", label: "On search path", swatch: "bg-role-compared" },
  { role: "swapped", label: "Inserted", swatch: "bg-role-swapped" },
  { role: "current", label: "Visiting", swatch: "bg-role-current" },
  { role: "visited", label: "Visited", swatch: "bg-role-visited" },
];

const R = 20; // node radius
const COL = 62; // horizontal spacing per in-order position
const ROW = 84; // vertical spacing per depth

export function TreeRenderer({ step }: RendererProps<TreeData>) {
  const { nodes } = step.data;

  const roleFor = (id: number): string | undefined =>
    step.highlights.find((h) => h.ref === id)?.role;
  const badgeFor = (id: number): string | undefined =>
    step.highlights.find((h) => h.ref === id && h.badge)?.badge;

  const maxDepth = nodes.reduce((m, n) => Math.max(m, n.depth), 0);
  const width = Math.max(nodes.length, 1) * COL;
  const height = (maxDepth + 1) * ROW;

  const x = (pos: number) => pos * COL + COL / 2;
  const y = (depth: number) => depth * ROW + ROW / 2;
  const posById = new Map(nodes.map((n) => [n.id, n]));

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex flex-1 items-center justify-center overflow-auto rounded-lg border bg-muted/20 p-3">
        {nodes.length === 0 ? (
          <p className="text-sm text-muted-foreground">Empty tree</p>
        ) : (
          <svg
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
            className="max-h-full"
            style={{ maxWidth: "100%" }}
          >
            {/* edges first, so nodes draw on top */}
            {nodes.map((n) => {
              if (n.parent === null) return null;
              const p = posById.get(n.parent);
              if (!p) return null;
              return (
                <line
                  key={`e-${n.id}`}
                  x1={x(p.pos)}
                  y1={y(p.depth)}
                  x2={x(n.pos)}
                  y2={y(n.depth)}
                  stroke="hsl(var(--border))"
                  strokeWidth={2}
                />
              );
            })}
            {nodes.map((n) => {
              const role = roleFor(n.id);
              const badge = badgeFor(n.id);
              const fill = role ? ROLE_FILL[role] : "hsl(var(--card))";
              const textColor = role ? "#fff" : "hsl(var(--foreground))";
              return (
                <g key={`n-${n.id}`} className="transition-all">
                  <circle
                    cx={x(n.pos)}
                    cy={y(n.depth)}
                    r={R}
                    fill={fill}
                    stroke={role ? fill : "hsl(var(--border))"}
                    strokeWidth={2}
                    style={{ transition: "fill 0.2s, stroke 0.2s" }}
                  />
                  <text
                    x={x(n.pos)}
                    y={y(n.depth)}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={13}
                    fontWeight={600}
                    fill={textColor}
                  >
                    {n.value}
                  </text>
                  {badge && (
                    <text
                      x={x(n.pos)}
                      y={y(n.depth) - R - 6}
                      textAnchor="middle"
                      fontSize={11}
                      fontWeight={600}
                      fill="hsl(var(--muted-foreground))"
                    >
                      {badge}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {LEGEND.map(({ role, label, swatch }) => (
          <span
            key={role}
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
