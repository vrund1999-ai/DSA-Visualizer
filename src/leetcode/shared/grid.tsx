import { ROLE_CLASS } from "./viz";

export interface GridProps {
  rows: number;
  cols: number;
  cellRole: (r: number, c: number) => string;
  cellValue: (r: number, c: number) => string | number;
  size?: string;
}

/** A 2D grid of role-colored cells, shared by the matrix problems. */
export function Grid({ rows, cols, cellRole, cellValue, size = "size-10" }: GridProps) {
  return (
    <div className="flex justify-center overflow-x-auto">
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const role = cellRole(r, c);
            return (
              <div
                key={`${r}-${c}`}
                className={`${size} flex items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${
                  ROLE_CLASS[role] ?? ROLE_CLASS.default
                }`}
              >
                {cellValue(r, c)}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}
