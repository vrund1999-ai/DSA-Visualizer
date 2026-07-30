export const CODE = [
  "function closestPrimes(left, right) {", //                 0
  "  const sieve = Array(right + 1).fill(true);", //          1
  "  sieve[0] = sieve[1] = false;", //                        2
  "  for (let i = 2; i * i <= right; i++)", //                3
  "    if (sieve[i])", //                                     4
  "      for (let j = i * i; j <= right; j += i) sieve[j] = false;",//5
  "  const primes = [];", //                                  6
  "  for (let x = left; x <= right; x++)", //                 7
  "    if (sieve[x]) primes.push(x);", //                     8
  "  let best = [-1, -1], gap = Infinity;", //                9
  "  for (let i = 1; i < primes.length; i++)", //            10
  "    if (primes[i] - primes[i-1] < gap) {", //             11
  "      gap = primes[i] - primes[i-1];", //                 12
  "      best = [primes[i-1], primes[i]];", //               13
  "    }", //                                                 14
  "  return best;", //                                       15
  "}", //                                                    16
];
