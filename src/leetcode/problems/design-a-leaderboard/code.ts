export const CODE = [
  "class Leaderboard {", //                                   0
  "  scores = new Map();", //                                 1
  "  addScore(playerId, score) {", //                         2
  "    this.scores.set(playerId,", //                         3
  "      (this.scores.get(playerId) ?? 0) + score);", //      4
  "  }", //                                                   5
  "  top(K) {", //                                            6
  "    return [...this.scores.values()]", //                  7
  "      .sort((a, b) => b - a)", //                          8
  "      .slice(0, K)", //                                    9
  "      .reduce((s, v) => s + v, 0);", //                   10
  "  }", //                                                  11
  "  reset(playerId) {", //                                  12
  "    this.scores.set(playerId, 0);", //                    13
  "  }", //                                                  14
  "}", //                                                    15
];
