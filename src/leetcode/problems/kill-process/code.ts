export const CODE = [
  "function killProcess(pid, ppid, kill) {", //               0
  "  const children = new Map();", //                         1
  "  for (let i = 0; i < pid.length; i++) {", //             2
  "    const p = ppid[i];", //                                3
  "    if (!children.has(p)) children.set(p, []);", //        4
  "    children.get(p).push(pid[i]);", //                     5
  "  }", //                                                   6
  "  const killed = [], q = [kill];", //                      7
  "  while (q.length) {", //                                  8
  "    const cur = q.shift();", //                            9
  "    killed.push(cur);", //                                10
  "    for (const c of children.get(cur) ?? [])", //         11
  "      q.push(c);   // kill descendants too", //           12
  "  }", //                                                  13
  "  return killed;", //                                     14
  "}", //                                                    15
];
