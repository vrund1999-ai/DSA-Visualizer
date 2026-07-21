import { useMemo, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { AnyVisualizerDefinition } from "@/core/types";
import { registry } from "@/core/registry";
import { usePlayer } from "@/core/usePlayer";
import { useVisualizerInput } from "@/core/useVisualizerInput";
import { VisualizerLayout } from "@/components/layout/VisualizerLayout";
import { InputControls } from "@/components/layout/InputControls";
import { PlayerControls } from "@/components/player/PlayerControls";
import { CodePanel } from "@/components/panels/CodePanel";
import { ComplexityBadge } from "@/components/panels/ComplexityBadge";
import { StepNarration } from "@/components/panels/StepNarration";
import { NotFoundPage } from "./NotFoundPage";

export function VisualizerPage() {
  const { id } = useParams();
  const def = id ? registry.byId(id) : undefined;
  if (!def) return <NotFoundPage />;
  return <VisualizerHost key={def.id} def={def} />;
}

/**
 * The generic host — the heart of the "one player system". Given a definition,
 * it builds its steps (pure, memoized) and drives the shared player. It is
 * definition-driven (not registry-bound), so the LeetCode section reuses it
 * with problems from a different registry. Callers pass `key={def.id}` so all
 * hook state resets cleanly when the definition changes.
 *
 *  - `header`    replaces the default "All visualizers" back-link bar.
 *  - `showInput` hides the input controls for definitions with no live input.
 */
export function VisualizerHost({
  def,
  header,
  showInput = true,
}: {
  def: AnyVisualizerDefinition;
  header?: ReactNode;
  showInput?: boolean;
}) {
  const { input, options, setInput, regenerate } = useVisualizerInput(def);

  // Pure generation, memoized on input/options.
  const steps = useMemo(
    () => def.buildSteps(input, options),
    [def, input, options],
  );

  const [state, controls] = usePlayer(steps.length);
  const step = steps[state.index] ?? steps[0];
  const Renderer = def.Renderer;

  return (
    <div className="flex flex-col">
      {header ?? (
        <div className="px-4 pt-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All visualizers
          </Link>
        </div>
      )}
      <VisualizerLayout
        title={def.title}
        summary={def.summary}
        stage={
          <Renderer
            step={step}
            frameIndex={state.index}
            frameCount={steps.length}
          />
        }
        narration={<StepNarration step={step} />}
        controls={<PlayerControls state={state} controls={controls} />}
        code={
          <CodePanel
            code={def.code}
            activeLine={step.line}
            language={def.language}
          />
        }
        complexity={<ComplexityBadge complexity={def.complexity} />}
        input={
          showInput ? (
            <InputControls
              def={def}
              input={input}
              onInputChange={setInput}
              onRandomize={regenerate}
            />
          ) : null
        }
      />
    </div>
  );
}
