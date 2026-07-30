export const CODE = [
  "function rankTeams(votes) {", //                           0
  "  const teams = votes[0].length;", //                      1
  "  const count = {};   // team -> [pos0, pos1, ...]", //    2
  "  for (const c of votes[0]) count[c] = Array(teams).fill(0);", //3
  "  for (const vote of votes)", //                           4
  "    for (let i = 0; i < vote.length; i++)", //             5
  "      count[vote[i]][i]++;   // tally position", //        6
  "  const order = Object.keys(count);", //                   7
  "  order.sort((a, b) => {", //                              8
  "    for (let i = 0; i < teams; i++)", //                   9
  "      if (count[a][i] !== count[b][i])", //               10
  "        return count[b][i] - count[a][i];   // more wins", //11
  "    return a < b ? -1 : 1;   // tie: alphabetical", //    12
  "  });", //                                                13
  "  return order.join('');", //                             14
  "}", //                                                    15
];
