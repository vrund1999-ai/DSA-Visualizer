import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import type { AnyVisualizerDefinition, InputControl } from "@/core/types";

interface Props {
  def: AnyVisualizerDefinition;
  input: unknown;
  onInputChange: (input: unknown) => void;
  onRandomize: () => void;
}

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomArray = (size: number, min: number, max: number): number[] =>
  Array.from({ length: size }, () => randInt(min, max));

/**
 * Renders input controls generically from `def.inputSchema`. Each control kind
 * knows how to derive a fresh input value and push it up via onInputChange.
 */
export function InputControls({
  def,
  input,
  onInputChange,
  onRandomize,
}: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-card p-3">
      {def.inputSchema.map((control, i) => (
        <ControlRow
          key={i}
          control={control}
          input={input}
          onInputChange={onInputChange}
        />
      ))}
      <Button variant="outline" size="sm" onClick={onRandomize}>
        <Shuffle className="size-4" />
        Randomize
      </Button>
    </div>
  );
}

function ControlRow({
  control,
  input,
  onInputChange,
}: {
  control: InputControl;
  input: unknown;
  onInputChange: (input: unknown) => void;
}) {
  if (control.kind === "array") {
    const arr = Array.isArray(input) ? (input as number[]) : [];
    const size = arr.length || control.defaultSize;
    return (
      <label className="flex flex-col gap-1.5">
        <span className="flex justify-between text-xs text-muted-foreground">
          <span>{control.label} size</span>
          <span className="tabular-nums">{size}</span>
        </span>
        <Slider
          min={5}
          max={control.maxSize}
          step={1}
          value={[size]}
          onValueChange={([v]) =>
            onInputChange(randomArray(v, control.min, control.max))
          }
        />
      </label>
    );
  }

  if (control.kind === "number") {
    const value = typeof input === "number" ? input : control.default;
    return (
      <label className="flex flex-col gap-1.5">
        <span className="flex justify-between text-xs text-muted-foreground">
          <span>{control.label}</span>
          <span className="tabular-nums">{value}</span>
        </span>
        <Slider
          min={control.min}
          max={control.max}
          step={1}
          value={[value]}
          onValueChange={([v]) => onInputChange(v)}
        />
      </label>
    );
  }

  if (control.kind === "grid") {
    return <GridEditor input={input} onInputChange={onInputChange} />;
  }

  // text / custom: no shared control — the visualizer's Randomize seeds input.
  return null;
}

/** Minimal structural shape of a pathfinding grid input. */
interface GridLike {
  rows: number;
  cols: number;
  walls: boolean[][];
  start: [number, number];
  end: [number, number];
}

const isGridLike = (v: unknown): v is GridLike =>
  typeof v === "object" &&
  v !== null &&
  Array.isArray((v as GridLike).walls) &&
  Array.isArray((v as GridLike).start);

/**
 * Click a cell to toggle a wall (start/end are protected). Editing pushes a new
 * grid up via onInputChange; the visualizer re-runs on the updated grid.
 */
function GridEditor({
  input,
  onInputChange,
}: {
  input: unknown;
  onInputChange: (input: unknown) => void;
}) {
  if (!isGridLike(input)) return null;
  const { rows, cols, walls, start, end } = input;
  const [sr, sc] = start;
  const [er, ec] = end;

  const toggle = (r: number, c: number) => {
    if ((r === sr && c === sc) || (r === er && c === ec)) return;
    const nextWalls = walls.map((row) => [...row]);
    nextWalls[r][c] = !nextWalls[r][c];
    onInputChange({ ...input, walls: nextWalls });
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs text-muted-foreground">
        Click cells to add or remove walls
      </span>
      <div
        className="grid gap-px"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((__, c) => {
            const isStart = r === sr && c === sc;
            const isEnd = r === er && c === ec;
            let cls = "bg-card hover:bg-muted";
            if (isStart || isEnd) cls = "bg-role-target cursor-default";
            else if (walls[r][c]) cls = "bg-role-wall";
            return (
              <button
                key={`${r},${c}`}
                type="button"
                aria-label={
                  isStart ? "start" : isEnd ? "end" : `cell ${r},${c}`
                }
                onClick={() => toggle(r, c)}
                className={`aspect-square rounded-[2px] border border-border/40 ${cls}`}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}
