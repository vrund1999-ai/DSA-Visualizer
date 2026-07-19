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

  // grid / text / custom: handled by dedicated visualizers later.
  return null;
}
