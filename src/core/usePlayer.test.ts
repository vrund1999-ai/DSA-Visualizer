import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { usePlayer } from "./usePlayer";

describe("usePlayer", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("starts at frame 0", () => {
    const { result } = renderHook(() => usePlayer(10));
    expect(result.current[0].index).toBe(0);
    expect(result.current[0].atStart).toBe(true);
  });

  it("stepForward then stepBack returns to the same index", () => {
    const { result } = renderHook(() => usePlayer(10));
    act(() => result.current[1].stepForward());
    act(() => result.current[1].stepForward());
    expect(result.current[0].index).toBe(2);
    act(() => result.current[1].stepBack());
    expect(result.current[0].index).toBe(1);
  });

  it("clamps at the last frame", () => {
    const { result } = renderHook(() => usePlayer(3));
    act(() => {
      result.current[1].seek(99);
    });
    expect(result.current[0].index).toBe(2);
    expect(result.current[0].atEnd).toBe(true);
  });

  it("reset returns to 0", () => {
    const { result } = renderHook(() => usePlayer(5));
    act(() => result.current[1].seek(3));
    act(() => result.current[1].reset());
    expect(result.current[0].index).toBe(0);
  });

  it("resets to 0 when count changes", () => {
    const { result, rerender } = renderHook(({ n }) => usePlayer(n), {
      initialProps: { n: 10 },
    });
    act(() => result.current[1].seek(5));
    expect(result.current[0].index).toBe(5);
    rerender({ n: 4 });
    expect(result.current[0].index).toBe(0);
  });

  it("advances frames while playing", async () => {
    const { result } = renderHook(() => usePlayer(10, 10)); // 10 fps → 100ms/tick
    act(() => result.current[1].play());
    // Advance one tick at a time so React can flush the effect that reschedules
    // the next timeout between ticks (a real browser does this naturally).
    for (let i = 0; i < 3; i++) {
      await act(async () => {
        await vi.advanceTimersByTimeAsync(100);
      });
    }
    expect(result.current[0].index).toBe(3);
    expect(result.current[0].isPlaying).toBe(true);
  });

  it("stops playing at the last frame", async () => {
    const { result } = renderHook(() => usePlayer(3, 10));
    act(() => result.current[1].play());
    for (let i = 0; i < 5; i++) {
      await act(async () => {
        await vi.advanceTimersByTimeAsync(100);
      });
    }
    expect(result.current[0].index).toBe(2); // clamped at last frame
    expect(result.current[0].isPlaying).toBe(false); // auto-paused at end
  });
});
