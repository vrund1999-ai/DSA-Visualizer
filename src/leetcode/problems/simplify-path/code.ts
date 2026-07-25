export const CODE = [
  "function simplifyPath(path) {", //                         0
  "  const stack = [];", //                                   1
  "  for (const part of path.split('/')) {", //               2
  "    if (part === '' || part === '.') continue;", //        3
  "    if (part === '..') stack.pop();   // up a level", //   4
  "    else stack.push(part);            // enter dir", //    5
  "  }", //                                                   6
  "  return '/' + stack.join('/');", //                       7
  "}", //                                                     8
];
