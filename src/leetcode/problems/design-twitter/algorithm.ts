import type { Step } from "@/core/types";

export type TwitterOp =
  | { type: "postTweet"; user: number; tweet: number }
  | { type: "getNewsFeed"; user: number }
  | { type: "follow"; a: number; b: number }
  | { type: "unfollow"; a: number; b: number };

export interface TwitterUser {
  id: number;
  tweets: number[];
  follows: number[];
}

export interface TwitterData {
  ops: string[];
  opIndex: number | null;
  users: TwitterUser[];
  feed: number[] | null;
  answers: (number[] | null)[];
}

export type TwitterStep = Step<TwitterData>;

const label = (op: TwitterOp): string =>
  op.type === "postTweet"
    ? `postTweet(${op.user}, ${op.tweet})`
    : op.type === "getNewsFeed"
      ? `getNewsFeed(${op.user})`
      : `${op.type}(${op.a}, ${op.b})`;

/**
 * Design Twitter: users post timestamped tweets and follow each other; a news feed merges the most recent 10
 * tweets from a user and everyone they follow, newest first (a global clock orders them). `line` indexes
 * CODE.
 */
export function twitterSteps(ops: TwitterOp[]): TwitterStep[] {
  const steps: TwitterStep[] = [];
  const tweets = new Map<number, [number, number][]>();
  const follows = new Map<number, Set<number>>();
  let clock = 0;
  const opLabels = ops.map(label);
  const answers: (number[] | null)[] = ops.map(() => null);

  const usersView = (): TwitterUser[] => {
    const ids = new Set<number>([...tweets.keys(), ...follows.keys()]);
    for (const set of follows.values()) for (const b of set) ids.add(b);
    return [...ids]
      .sort((a, b) => a - b)
      .map((id) => ({
        id,
        tweets: (tweets.get(id) ?? []).map(([, t]) => t),
        follows: [...(follows.get(id) ?? [])].sort((a, b) => a - b),
      }));
  };

  const snap = (o: Partial<TwitterData>): TwitterData => ({
    ops: opLabels,
    opIndex: null,
    users: usersView(),
    feed: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<TwitterData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(0, `Run ${ops.length} Twitter operation(s).`);

  for (let k = 0; k < ops.length; k++) {
    const op = ops[k];
    if (op.type === "postTweet") {
      if (!tweets.has(op.user)) tweets.set(op.user, []);
      tweets.get(op.user)!.push([clock++, op.tweet]);
      push(5, `User ${op.user} posts tweet ${op.tweet}.`, { opIndex: k });
    } else if (op.type === "follow") {
      if (!follows.has(op.a)) follows.set(op.a, new Set());
      follows.get(op.a)!.add(op.b);
      push(15, `User ${op.a} follows ${op.b}.`, { opIndex: k });
    } else if (op.type === "unfollow") {
      follows.get(op.a)?.delete(op.b);
      push(16, `User ${op.a} unfollows ${op.b}.`, { opIndex: k });
    } else {
      const who = new Set<number>([op.user, ...(follows.get(op.user) ?? [])]);
      const all: [number, number][] = [];
      for (const v of who) all.push(...(tweets.get(v) ?? []));
      const feed = all.sort((a, b) => b[0] - a[0]).slice(0, 10).map(([, t]) => t);
      answers[k] = feed;
      push(12, `Feed for ${op.user}: [${feed.join(", ")}].`, { opIndex: k, feed });
    }
  }

  return steps;
}
