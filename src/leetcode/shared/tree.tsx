import { ROLE_CLASS } from "./viz";

/**
 * Renders a binary tree given as a heap array (index i's children are 2i+1 and
 * 2i+2; `null` marks an absent node). Levels are laid out as centered rows, with
 * absent slots shown faintly to keep left/right structure readable. Shared by
 * the tree problems.
 */
export function TreeView({
  heap,
  roleFor,
}: {
  heap: (number | null)[];
  roleFor: (i: number) => string;
}) {
  const levels: { i: number; v: number | null }[][] = [];
  let d = 0;
  while (2 ** d - 1 < heap.length) {
    const start = 2 ** d - 1;
    const end = 2 ** (d + 1) - 1;
    const row: { i: number; v: number | null }[] = [];
    for (let i = start; i < end && i < heap.length; i++) row.push({ i, v: heap[i] });
    if (d === 0 || row.some((x) => x.v !== null)) levels.push(row);
    d++;
  }

  return (
    <div className="flex flex-col items-center gap-4 overflow-x-auto">
      {levels.map((row, depth) => (
        <div key={depth} className="flex justify-center gap-4">
          {row.map(({ i, v }) =>
            v === null ? (
              <div key={i} className="flex size-10 items-center justify-center">
                <span className="size-1.5 rounded-full bg-muted-foreground/30" />
              </div>
            ) : (
              <div
                key={i}
                className={`flex size-10 items-center justify-center rounded-full border-2 text-sm font-medium tabular-nums transition-colors ${
                  ROLE_CLASS[roleFor(i)] ?? ROLE_CLASS.default
                }`}
              >
                {v}
              </div>
            ),
          )}
        </div>
      ))}
    </div>
  );
}
