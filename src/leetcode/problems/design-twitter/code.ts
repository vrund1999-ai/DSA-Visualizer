export const CODE = [
  "class Twitter {", //                                       0
  "  tweets = new Map();   // user -> [time, id]", //         1
  "  follows = new Map();  // user -> Set", //                2
  "  clock = 0;", //                                          3
  "  postTweet(u, id) {", //                                  4
  "    (this.tweets.get(u) ?? set(u)).push([this.clock++, id]);",//5
  "  }", //                                                   6
  "  getNewsFeed(u) {", //                                    7
  "    const who = new Set([u, ...(this.follows.get(u) ?? [])]);",//8
  "    const all = [];", //                                   9
  "    for (const v of who)", //                             10
  "      all.push(...(this.tweets.get(v) ?? []));", //       11
  "    return all.sort((a, b) => b[0] - a[0])", //           12
  "      .slice(0, 10).map(t => t[1]);", //                  13
  "  }", //                                                  14
  "  follow(a, b) { this.follows.get(a)?.add(b); }", //      15
  "  unfollow(a, b) { this.follows.get(a)?.delete(b); }", // 16
  "}", //                                                    17
];
