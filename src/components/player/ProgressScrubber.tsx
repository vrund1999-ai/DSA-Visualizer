import { Slider } from "@/components/ui/slider";

export function ProgressScrubber({
  index,
  count,
  onSeek,
}: {
  index: number;
  count: number;
  onSeek: (i: number) => void;
}) {
  return (
    <Slider
      aria-label="Progress"
      min={0}
      max={Math.max(0, count - 1)}
      step={1}
      value={[index]}
      onValueChange={([v]) => onSeek(v)}
    />
  );
}
