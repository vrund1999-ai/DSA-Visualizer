export const CODE = [
  "class NestedIterator {", //                                0
  "  constructor(nestedList) {", //                           1
  "    this.flat = [];", //                                   2
  "    const dfs = list => {", //                             3
  "      for (const item of list) {", //                      4
  "        if (item.isInteger())", //                         5
  "          this.flat.push(item.getInteger());", //          6
  "        else dfs(item.getList());   // recurse", //        7
  "      }", //                                                8
  "    };", //                                                9
  "    dfs(nestedList);", //                                 10
  "    this.i = 0;", //                                      11
  "  }", //                                                  12
  "  hasNext() { return this.i < this.flat.length; }", //    13
  "  next() { return this.flat[this.i++]; }", //             14
  "}", //                                                    15
];
