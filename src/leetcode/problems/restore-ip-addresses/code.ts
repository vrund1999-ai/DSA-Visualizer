export const CODE = [
  "function restoreIpAddresses(s) {", //                      0
  "  const res = [];", //                                     1
  "  function bt(start, parts) {", //                         2
  "    if (parts.length === 4) {", //                         3
  "      if (start === s.length) res.push(parts.join('.'));", //4
  "      return;", //                                         5
  "    }", //                                                 6
  "    for (let len = 1; len <= 3; len++) {", //              7
  "      if (start + len > s.length) break;", //              8
  "      const seg = s.slice(start, start + len);", //        9
  "      if (seg.length > 1 && seg[0] === '0') continue;", // 10
  "      if (Number(seg) > 255) continue;   // invalid", //   11
  "      bt(start + len, [...parts, seg]);   // place dot", //12
  "    }", //                                                13
  "  }", //                                                  14
  "  bt(0, []);", //                                         15
  "  return res;", //                                        16
  "}", //                                                    17
];
