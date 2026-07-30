import { describe, it, expect } from "vitest";
import { twitterSteps, type TwitterOp } from "./algorithm";
import { CODE } from "./code";

const feeds = (ops: TwitterOp[]) => {
  const steps = twitterSteps(ops);
  return steps[steps.length - 1].data.answers.filter((a): a is number[] => a !== null);
};

describe("twitterSteps", () => {
  it("matches the canonical example", () => {
    expect(
      feeds([
        { type: "postTweet", user: 1, tweet: 5 },
        { type: "getNewsFeed", user: 1 },
        { type: "follow", a: 1, b: 2 },
        { type: "postTweet", user: 2, tweet: 6 },
        { type: "getNewsFeed", user: 1 },
        { type: "unfollow", a: 1, b: 2 },
        { type: "getNewsFeed", user: 1 },
      ]),
    ).toEqual([[5], [6, 5], [5]]);
  });

  it("caps the feed at 10 newest tweets", () => {
    const ops: TwitterOp[] = [];
    for (let i = 1; i <= 12; i++) ops.push({ type: "postTweet", user: 1, tweet: i });
    ops.push({ type: "getNewsFeed", user: 1 });
    expect(feeds(ops)[0]).toEqual([12, 11, 10, 9, 8, 7, 6, 5, 4, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    const steps = twitterSteps([
      { type: "postTweet", user: 1, tweet: 5 },
      { type: "getNewsFeed", user: 1 },
    ]);
    for (const s of steps) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
