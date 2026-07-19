import { useCallback, useEffect, useRef, useState } from "react";

export interface PlayerState {
  index: number; // current frame
  count: number; // total frames
  isPlaying: boolean;
  speed: number; // steps per second
  atStart: boolean;
  atEnd: boolean;
}

export interface PlayerControls {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  stepForward: () => void;
  stepBack: () => void;
  reset: () => void;
  seek: (i: number) => void;
  setSpeed: (s: number) => void;
}

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

/**
 * Drives an index across [0, count). Playback uses a rescheduling timeout so
 * speed changes take effect immediately and tab throttling doesn't drift.
 * Regenerating `count` (new input) auto-resets to frame 0.
 */
export function usePlayer(
  count: number,
  initialSpeed = 6,
): [PlayerState, PlayerControls] {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(initialSpeed);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  // New dataset => reset to the start and stop.
  useEffect(() => {
    setIndex(0);
    setIsPlaying(false);
  }, [count]);

  const lastIndex = Math.max(0, count - 1);
  const atEnd = index >= lastIndex;
  const atStart = index <= 0;

  const stop = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = undefined;
  }, []);

  // Playback loop: schedule the next tick based on the current speed.
  useEffect(() => {
    if (!isPlaying) return;
    if (index >= lastIndex) {
      setIsPlaying(false);
      return;
    }
    const delay = 1000 / clamp(speed, 0.25, 60);
    timer.current = setTimeout(
      () => setIndex((i) => clamp(i + 1, 0, lastIndex)),
      delay,
    );
    return stop;
  }, [isPlaying, index, lastIndex, speed, stop]);

  const controls: PlayerControls = {
    play: () => !atEnd && setIsPlaying(true),
    pause: () => setIsPlaying(false),
    toggle: () => (atEnd ? setIndex(0) : setIsPlaying((p) => !p)),
    stepForward: () => {
      setIsPlaying(false);
      setIndex((i) => clamp(i + 1, 0, lastIndex));
    },
    stepBack: () => {
      setIsPlaying(false);
      setIndex((i) => clamp(i - 1, 0, lastIndex));
    },
    reset: () => {
      setIsPlaying(false);
      setIndex(0);
    },
    seek: (i: number) => {
      setIsPlaying(false);
      setIndex(clamp(i, 0, lastIndex));
    },
    setSpeed,
  };

  return [{ index, count, isPlaying, speed, atStart, atEnd }, controls];
}
